import React from "react";
import "./Footer.css";
import Logo from "../assets/hub-club-logo.png/";
import SBA from "../assets/SBALogosFooter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container-fluid">
          <div className="footer-content">
            {/* Left Column */}
            <div className="footer-column company-info">
              <h4 className="footer-title">THE HUB CLUB™ is:</h4>
              <div className="info-text">
                <p>HUBZone Certified</p>
                <p>Small Disadvantaged Business</p>
                <p>F.A.R Certified</p>
                <p>Small Business Professional Certified</p>
                <p>C-GMP</p>
                <p>Travel Agent</p>
                <p>IATA/ARC: 10-548020</p>
                <p>CLIA: 00-323643</p>
                <p>Unique ID: SB2RMA63GRJ8</p>
                <p>CAGE: 7V7F5</p>
                <h4 className="credit-cards">
                  WE ACCEPT ALL
                  <br />
                  CREDIT CARDS
                </h4>
              </div>
            </div>

            {/* Middle Column */}
            <div className="footer-column contact-info">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-details">
                <p>
                  <i className="fas fa-user"></i> Victor Santana
                </p>
                <p>
                  <a href="mailto:info@hubclubchicago.com">
                    <i className="fas fa-envelope"></i> info@hubclubchicago.com
                  </a>
                </p>
                <p>
                  <a href="tel:312-617-3248">
                    <i className="fas fa-phone"></i> 312-617-3248
                  </a>
                </p>
                <p>
                  <i className="fas fa-location-dot"></i>
                  1500 South Western
                  <br />
                  Avenue Suite 502
                  <br />
                  Chicago, Illinois 60608
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="footer-column naics-codes">
              <h4 className="footer-title">NAICS Codes</h4>
              <div className="naics-grid">
                <div className="naics-group">
                  <p>541199</p>
                  <p>541219</p>
                  <p>541430</p>
                  <p>541490</p>
                  <p>541511</p>
                  <p>541513</p>
                  <p>541519</p>
                  <p>541611</p>
                </div>
                <div className="naics-group">
                  <p>541612</p>
                  <p>541614</p>
                  <p>541618</p>
                  <p>541690</p>
                  <p>541715</p>
                  <p>541810</p>
                  <p>541840</p>
                  <p>541860</p>
                </div>
                <div className="naics-group">
                  <p>541870</p>
                  <p>541890</p>
                  <p>541922</p>
                  <p>561730</p>
                  <p>561790</p>
                  <p>561990</p>
                  <p>721199</p>
                  <p>611710</p>
                </div>
                <div className="naics-group">
                  <p>512120</p>
                  <p>512191</p>
                  <p>512199</p>
                  <p>512250</p>
                  <p>512290</p>
                  <p>513140</p>
                  <p>516210</p>
                  <p>518210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container-fluid">
          <div className="copyright-content">
            <p>
              © {currentYear} Copyright GLC Hub Club LLC. All Rights Reserved.
            </p>
            <div className="footer-logos">
              <img src={Logo} alt="HUB Club Logo" className="hub-logo" />
              <img
                src={SBA}
                alt="SBA Logos"
                className="sba-logo"
                style={{ width: "10rem", height: "5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
