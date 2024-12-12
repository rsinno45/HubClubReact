import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import DSBS from "../assets/DSBS.jpg";
import Register from "../assets/Register.jpg";
import GovBuysPic from "../assets/GovBuys.jpg";
import hubZoneCheck from "../assets/hubZoneCheck.jpg";
import FedProData from "../assets/FedProData.jpg";

const ContractingPage = () => {
  const resources = [
    {
      title: "HUBZONE Check",
      description: "Verify if your business is in a HUBZone designated area",
      href: "https://maps.certify.sba.gov/hubzone/map",
      imageSrc: hubZoneCheck,
      alt: "HUBZone Map Check",
    },
    {
      title: "Federal Procurement Data System",
      description: "Access federal procurement data and contract information",
      href: "https://www.fpds.gov/fpdsng_cms/index.php/en",
      imageSrc: FedProData,
      alt: "Federal Procurement Data System",
    },
    {
      title: "Dynamic Small Business Search",
      description: "Search database of small business government contractors",
      href: "https://dsbs.sba.gov/search/dsp_dsbs.cfm",
      imageSrc: DSBS,
      alt: "Dynamic Small Business Search",
    },
    {
      title: "Everything Government Buys",
      description: "Comprehensive guide to government procurement",
      href: "#",
      imageSrc: GovBuysPic,
      alt: "Government Procurement Guide",
    },
    {
      title: "Get Registered",
      description: "Register your business in SAM.gov",
      href: "https://sam.gov/",
      imageSrc: Register,
      alt: "SAM.gov Registration",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerSlide = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerSlide.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerSlide.desktop);
      } else if (window.innerWidth >= 640) {
        setItemsToShow(itemsPerSlide.tablet);
      } else {
        setItemsToShow(itemsPerSlide.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsToShow >= resources.length ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex <= 0
          ? Math.max(0, resources.length - itemsToShow)
          : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const totalSlides = Math.ceil(resources.length / itemsToShow);
  const currentSlide = Math.floor(currentIndex / itemsToShow);

  return (
    <div
      id="Info"
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Everything You Need to Succeed
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Contracting <span className="text-blue-600">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access essential tools and platforms to help your business succeed
            in government contracting
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden py-5">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsToShow)
                }%)`,
                width: `${(resources.length / itemsToShow) * 100}%`,
              }}
            >
              {resources.map((resource, idx) => (
                <div
                  key={idx}
                  className="px-4"
                  style={{ width: `${100 / resources.length}%` }}
                >
                  <div className="group bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full flex flex-col"
                    >
                      <div className="relative">
                        <img
                          src={resource.imageSrc}
                          alt={resource.alt}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-6 flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {resource.title}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(idx * itemsToShow)}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex + itemsToShow >= resources.length}
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractingPage;
