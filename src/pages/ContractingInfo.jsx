import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import DSBS from "/assets/DSBS.jpg";
import Register from "/assets/Register.jpg";
import GovBuysPic from "/assets/GovBuys.jpg";
import hubZoneCheck from "/assets/hubZoneCheck.jpg";
import FedProData from "/assets/FedProData.jpg";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={previous}
        className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={next}
        className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

const ContractingPage = () => {
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
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="py-4"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<CustomButtonGroup />}
            itemClass="px-4"
          >
            {resources.map((resource, idx) => (
              <div key={idx} className="h-full">
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ContractingPage;
