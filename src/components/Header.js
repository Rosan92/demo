import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      CBSE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      State Board
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Skill Education
                    </a>
                  </li>
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown mx-2">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Robotics
                      </a>
                    </li>
                  </ul>
                  <li>
                    <a className="dropdown-item" href="#">
                      IIT Foundation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Primary
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      First Grade
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Second Grade
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Third Grade
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fourth Grade
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fifth Grade
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Secondary
                </a>
                <ul className="dropdown-menu">
                  <h5>
                    <a className="dropdown-item" href="#">
                      Classes
                    </a>
                  </h5>
                  <li>
                    <a className="dropdown-item" href="#">
                      Class6
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Class7
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Class8
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Class9
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Class10
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <h5>
                    <a className="dropdown-item" href="#">
                      Boards
                    </a>
                  </h5>
                  <li>
                    <a className="dropdown-item" href="#">
                      CBSE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Telengana
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Andhra Pradesh
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Exams
                </a>
                <ul className="dropdown-menu">
                  <h5>
                    <a className="dropdown-item" href="#">
                      Engineering
                    </a>
                  </h5>
                  <li>
                    <a className="dropdown-item" href="#">
                      VITEE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JEE Main
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JEE Advanced
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      VSAT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      KLEEE
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <h5>
                    <a className="dropdown-item" href="#">
                      Medical
                    </a>
                  </h5>
                  <li>
                    <a className="dropdown-item" href="#">
                      NEET
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AIIMS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AP EAMCET
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      TS EAMCET
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Futures
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Learn Module
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Test Module
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Doubt Module
                    </a>
                  </li>
                </ul>
              </li>
              <button className="btn btn-white border-primary rounded-4 mx-2">
                Login
              </button>
              <button className="btn btn-primary rounded-4 mx-2">SignUp</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
