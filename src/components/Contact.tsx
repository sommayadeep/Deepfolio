import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const EMAIL = "sommayadeepsaha@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={GMAIL_COMPOSE}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                {EMAIL}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916909790275" data-cursor="disable">
                +91 69097 90275
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech CSE (AI/ML), SRM University AP</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/sommayadeep"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sommayadeep-saha-127baa335/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+916909690275"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sommayadeep Saha</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
