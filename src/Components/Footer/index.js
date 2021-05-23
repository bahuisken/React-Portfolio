import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="row">
      <div className="col-sm-12 navbar-light bg-light fixed-bottom footer-border">
        <p id="footer-text" className="text-center mt-2">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/bricehuisken/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="font-awesome" icon={faLinkedin} />
          </a>
          &nbsp;
          <a
            className="footer-link"
            href="https://github.com/bahuisken"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="font-awesome" icon={faGithub} />
          </a>
          &nbsp;
          <a
            className="footer-link"
            href="mailto:brice.huisken@gmail.com?subject=Re:%20Brice%20Huisken%20Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="font-awesome" icon={faEnvelope} />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
