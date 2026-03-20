import { useState, useCallback, useEffect, useMemo } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { projectImageMap, projectLinkMap } from "../data/projectImageMap.ts";

interface GitHubRepo {
  name: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  topics?: string[];
  owner: {
    login: string;
  };
  pushed_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
  has_pages: boolean;
}

interface PortfolioProject {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  updatedAt: string;
}

const rawGitHubUsernames =
  import.meta.env.VITE_GITHUB_USERNAMES ||
  import.meta.env.VITE_GITHUB_USERNAME ||
  "sommayadeep,sommayadeepsaha";

const GITHUB_USERNAMES = Array.from(
  new Set(
    rawGitHubUsernames
      .split(",")
      .map((name: string) => name.trim())
      .filter(Boolean)
  )
);
const GITHUB_PROJECT_LIMIT = 12;

const readableDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

const getRepoCategory = (repo: GitHubRepo) => {
  const topicLabel = repo.topics?.[0]?.replace(/[-_]/g, " ");
  if (topicLabel) return topicLabel;
  if (repo.language) return `${repo.language} project`;
  return "Web project";
};

const getRepoTools = (repo: GitHubRepo) => {
  const topics = (repo.topics || []).slice(0, 3).map((item) => item.replace(/[-_]/g, " "));
  if (repo.language) topics.unshift(repo.language);
  if (!topics.length) return "Code, architecture, deployment";
  return topics.join(", ");
};

const getRepoLink = (repo: GitHubRepo) => {
  const overrideLink = projectLinkMap[repo.name];
  if (overrideLink) return overrideLink;
  if (repo.homepage) return repo.homepage;
  if (repo.has_pages) return `https://${repo.owner.login}.github.io/${repo.name}/`;
  return repo.html_url;
};

const mapRepoToProject = (repo: GitHubRepo): PortfolioProject => ({
  title: repo.name,
  category: getRepoCategory(repo),
  tools: getRepoTools(repo),
  image: projectImageMap[repo.name] || "/images/preview.png",
  link: getRepoLink(repo),
  updatedAt: repo.pushed_at,
});

const Work = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const responses = await Promise.all(
          GITHUB_USERNAMES.map((username) =>
            fetch(
              `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`,
              { signal: controller.signal }
            )
          )
        );

        const successfulResponses = responses.filter((response) => response.ok);
        if (!successfulResponses.length) {
          throw new Error("Unable to fetch GitHub repositories");
        }

        const results = await Promise.all(
          successfulResponses.map((response) => response.json() as Promise<GitHubRepo[]>)
        );

        const allRepos = results.flat();
        const uniqueRepos = Array.from(
          new Map(allRepos.map((repo) => [repo.full_name, repo])).values()
        );

        const syncedProjects = uniqueRepos
          .filter((repo) => !repo.fork && !repo.archived)
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, GITHUB_PROJECT_LIMIT)
          .map(mapRepoToProject);

        setProjects(syncedProjects);
        setCurrentIndex(0);
      } catch (error) {
        if (!controller.signal.aborted) {
          setProjects([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();

    return () => controller.abort();
  }, []);

  const timelineProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      ),
    [projects]
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (!projects.length) return;
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    if (projects.length <= 1) return;
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);

  const goToNext = useCallback(() => {
    if (projects.length <= 1) return;
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {isLoading && <p className="work-status">Syncing projects from GitHub...</p>}
          {!isLoading && !projects.length && (
            <p className="work-status">
              Could not load GitHub projects right now. Please try again later.
            </p>
          )}
          {!isLoading && projects.length === 1 && (
            <p className="work-status">
              Only one project found. Add more repos on your GitHub account to enable sliding.
            </p>
          )}

          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
            disabled={projects.length <= 1}
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
            disabled={projects.length <= 1}
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-date">
                          Updated {readableDate(project.updatedAt)}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
                disabled={projects.length <= 1}
              />
            ))}
          </div>

          {timelineProjects.length > 0 && (
            <div className="projects-timeline">
              {timelineProjects.map((project) => (
                <button
                  key={`${project.title}-${project.updatedAt}`}
                  className="timeline-item"
                  onClick={() => {
                    const targetIndex = projects.findIndex(
                      (item) => item.title === project.title
                    );
                    if (targetIndex >= 0) goToSlide(targetIndex);
                  }}
                  data-cursor="disable"
                >
                  <span className="timeline-date">{readableDate(project.updatedAt)}</span>
                  <span className="timeline-title">{project.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
