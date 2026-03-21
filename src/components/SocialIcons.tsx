import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const centerIcon = (target: HTMLSpanElement) => {
    const link = target.querySelector("a");

    if (!link) return;

    link.style.setProperty("--siLeft", "50%");
    link.style.setProperty("--siTop", "50%");
  };

  const handlePointerMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.currentTarget;
    const link = target.querySelector("a");

    if (!link) return;

    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    link.style.setProperty("--siLeft", `${x}px`);
    link.style.setProperty("--siTop", `${y}px`);
  };

  const handlePointerLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    centerIcon(event.currentTarget);
  };

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
          <a href="https://github.com/sommayadeep" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
          <a
            href="https://www.linkedin.com/in/sommayadeep-saha-127baa335/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
          <a href="https://x.com/Sommayadee65755" target="_blank">
            <FaXTwitter />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/sommayadeep_saha.pdf"
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
