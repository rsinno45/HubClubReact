import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/hub-club-logo.png";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-light ${
        isSticky ? "navbar-sticky" : ""
      }`}
    >
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="HUB Club" />
        </a>

        <button
          className="navbar-toggler hc-nav-trigger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvas"
        >
          <span></span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          id="navbarOffcanvas"
          tabIndex="-1"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              {isHomePage && (
                <>
                  <li className="nav-item">
                    <Link
                      to="about-section"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="nav-link"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="Info"
                      spy={true}
                      smooth={true}
                      duration={100}
                      className="nav-link"
                    >
                      Contracting Information
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/membership">
                  Membership
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/people/GLC-HUB-Club/61563883584627/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/company/glc-hub-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
