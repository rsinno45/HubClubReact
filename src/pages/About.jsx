import React, { useEffect, useRef } from "react";
import "./pages_styling/About.css";
import HubClub1 from "../assets/hubAbout1.jpg";
import HubClub2 from "../assets/hubAbout2.jpg";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const designations = [
    "HUBZone - 3%",
    "Disabled Veteran - 5%",
    "Veteran - 5%",
    "Women - 5%",
    "8(a) - 5%",
  ];
  const designations2 = [
    "Disadvantaged Small Business - 5%",
    "Ability One – Mandatory",
    "Native American - Mandatory",
    "AC-DBE/DBE",
    "MBE/WBE",
  ];

  return (
    <section className="about-section fade-in-section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {/* Left Side - Images and Designations */}
          <div className="col-lg-6 slide-in-left">
            <div className="about-images">
              <div className="text-overlay">
                <h3>
                  Government
                  <br />
                  Contracting Made
                  <br />
                  Easy
                </h3>
              </div>
              <img
                src={HubClub1}
                alt="White House"
                className="main-image"
                onError={(e) =>
                  console.error("Image failed to load:", e.target.src)
                }
              />
              <img
                src={HubClub2}
                alt="American Flag"
                className="flag-image"
                onError={(e) =>
                  console.error("Image failed to load:", e.target.src)
                }
              />
            </div>

            <div className="designations-container">
              <h3>
                These are the Socio-Economic Designations by preference by the
                Federal Government:
              </h3>
              <div className="design-break">
                <ul className="designations-list">
                  {designations.map((designation, index) => (
                    <li key={index}>{designation}</li>
                  ))}
                </ul>
                <ul className="designations-list">
                  {designations2.map((designations2, index) => (
                    <li key={index}>{designations2}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="col-lg-6 slide-in-right">
            <div className="about-content">
              <h4 className="section-subtitle">ABOUT THE HUB CLUB</h4>
              <h2 className="section-title">We Bring Success To You</h2>
              <p className="about-text">
                The HUB Club provides the tools and resources for obtaining
                success in the complicated and confusing procurement world of
                the Federal Government process. The HUB Club provides both the
                research needed for locating Federal Agencies that are looking
                for products and services. The HUB Club provides an innovated
                marketing program that will place your business in front of
                procurement officers throughout the Federal Government. The HUB
                Club assists our members with trained and qualified HUBZone
                employees for small businesses trying to secure their HUBZone
                Certification and other Socio-Economic Certifications. The HUB
                Club provides qualified training for all of our HUB Club members
                that have the Socio- Economic designations administered by the
                US Small Business Administration.
              </p>

              <h4 className="section-subtitle">HISTORY OF THE HUB CLUB</h4>
              <p className="about-text">
                The HUB Club has been assisting small businesses since 2003 with
                securing federal contracts. In 2006, The HUB Club changed its
                name from Quick Turnaround Services to the HUB Club due to the
                huge demand for HUBZone Certified Business. With 3% of all
                contracts required to go to HUBZone businesses, the need was
                there and hence the name change.
              </p>
              <p className="about-text">
                Since 2012, the HUB Club has included other Socio-Economic
                Designations in its membership. In 2016, securing local and
                state MBEs and WBEs for HUB Club members became a necessity and
                a reality. With over 2,100 small businesses since 2003 with an
                assortment of Socio-Economic Designation and NAICS Codes, the
                HUB Club has assisted members with over $2 Billion in first time
                contracts over the past 20 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
