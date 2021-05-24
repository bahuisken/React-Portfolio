import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import resume from "./Brice_Huisken_Resume_2021.pdf";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-custom bg-custom">
      <div className="contact-holder">
        <h1 className="navbar-brand">BRICE HUISKEN</h1>
        <p className="contact-info">
          <a
            className="contact-info-link"
            href={`mailto:brice.huisken@gmail.com?subject=Re:%20Brice%20Huisken%20Portfolio`}
            target="_blank"
            rel="noreferrer"
          >
            brice.huisken@gmail.com
          </a>
          <br />
          <a className="contact-info-link" href="tel:3035215956">
            303.521.5956
          </a>
        </p>
      </div>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              activeClassName="current-link"
              className="nav-link"
              onClick={() =>
                setTimeout(window.location.reload.bind(window.location), 1)
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              exact
              activeClassName="current-link"
              className="nav-link"
              onClick={() =>
                setTimeout(window.location.reload.bind(window.location), 1)
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              exact
              activeClassName="current-link"
              className="nav-link"
              onClick={() =>
                setTimeout(window.location.reload.bind(window.location), 1)
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
