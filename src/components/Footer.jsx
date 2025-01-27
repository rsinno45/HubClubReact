import React from "react";
import "./Footer.css";
import Logo from "/assets/hub-club-logo.png";
import SBA from "/assets/SBALogosFooter.png";

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
              <div className=" grid-cols-1 gap-x-2 gap-y-1 text-sm">
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
                <p className="col-span-2 mt-2 font-bold">
                  WE ACCEPT ALL CREDIT CARDS
                </p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="footer-column contact-info">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-details space-y-2">
                <p className="flex items-center gap-2">
                  <i className="fas fa-user"></i> Victor Santana
                </p>
                <p>
                  <a
                    href="mailto:info@hubclubchicago.com"
                    className="flex items-center gap-2"
                  >
                    <i className="fas fa-envelope"></i> info@hubclubchicago.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:312-617-3248"
                    className="flex items-center gap-2"
                  >
                    <i className="fas fa-phone"></i> 312-617-3248
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <i className="fas fa-location-dot mt-1"></i>
                  <span>
                    1500 South Western
                    <br />
                    Avenue Suite 502
                    <br />
                    Chicago, Illinois 60608
                  </span>
                </p>
                <div className="">
                  <img src={SBA} alt="SBA Logos" className="w-100" />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="footer-column naics-codes">
              <h4 className="footer-title">NAICS Codes</h4>
              <div className="grid grid-cols-4 gap-x-4 gap-y-1 text-sm">
                <p>541199</p>
                <p>541612</p>
                <p>541870</p>
                <p>512120</p>
                <p>541219</p>
                <p>541614</p>
                <p>541890</p>
                <p>512191</p>
                <p>541430</p>
                <p>541618</p>
                <p>541922</p>
                <p>512199</p>
                <p>541490</p>
                <p>541690</p>
                <p>561730</p>
                <p>512250</p>
                <p>541511</p>
                <p>541715</p>
                <p>561790</p>
                <p>512290</p>
                <p>541513</p>
                <p>541810</p>
                <p>561990</p>
                <p>513140</p>
                <p>541519</p>
                <p>541840</p>
                <p>721199</p>
                <p>516210</p>
                <p>541611</p>
                <p>541860</p>
                <p>611710</p>
                <p>518210</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright mt-4 border-t border-gray-200 pt-4">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <p>
              © 2003-{currentYear} Copyright GLC Hub Club LLC. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-4">
              <img src={Logo} alt="HUB Club Logo" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
