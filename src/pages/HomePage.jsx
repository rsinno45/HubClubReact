import React from "react";
import "./pages_styling/homePage.css";
import About from "./About";
import ContractingInfo from "./ContractingInfo";
import TestimonialCarousel from "./TestimonialCarousel";

import ContractingPage from "./ContractingNeeds";
import ContractingHero from "./ContractingHero";

const HomePage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Join Us at
            <br />
            The HUB Club!
          </h1>
          <h2 className="hero-subtitle">
            Learn how to get Federal Contracts
            <br />
            for your Business
          </h2>
          <a href="/membership" className="join-button">
            Join Now!
          </a>
        </div>
      </div>
      <About />
      <ContractingInfo />
      <TestimonialCarousel />
      <ContractingPage />
      <ContractingHero />
    </>
  );
};

export default HomePage;
