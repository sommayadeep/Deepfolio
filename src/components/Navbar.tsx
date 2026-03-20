import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    const smootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.9,
      speed: 0.9,
      effects: false,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother = smootherInstance;
    smootherInstance.scrollTop(0);
    smootherInstance.paused(true);

    const links = Array.from(document.querySelectorAll(".header ul a"));
    const onLinkClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        smootherInstance.scrollTo(section, true, "top top");
      }
    };

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", onLinkClick);
    });

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    return () => {
      links.forEach((elem) => {
        const element = elem as HTMLAnchorElement;
        element.removeEventListener("click", onLinkClick);
      });
      window.removeEventListener("resize", onResize);
      smootherInstance.kill();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">          SS
        </a>
        <a
          href="mailto:sommayadeepsaha@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sommayadeepsaha@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
