import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import FedGoal from "../assets/FedGoals.jpg";
import FAR from "../assets/FAR.jpg";
import FAQ from "../assets/FAQ.jpg";
import Benefit from "../assets/Benefits.jpg";
import WantedCodes from "../assets/WantedCodes.jpg";
import SE from "../assets/SE.jpg";
import Acq from "../assets/Acq.jpg";
import Simple from "../assets/Simple.jpg";
import Membership from "../assets/Membership.jpg";
import FedGoals from "../pages/ContractingInfoDocs/FedGoals-2025.pdf";
import FARs from "../pages/ContractingInfoDocs/FAR.pdf";
import FAQs from "../pages/ContractingInfoDocs/HUB Club™ FAQs.pdf";
import Benefits from "../pages/ContractingInfoDocs/FY 24-25 - HUB Club Membership Benefits.pdf";
import MostWanted from "../pages/ContractingInfoDocs/Most wanted NAICS Codes FY 22-23.pdf";
import SocioEco from "../pages/ContractingInfoDocs/Document 7 - SBA Programs FY 23-24.pdf";
import Ac from "../pages/ContractingInfoDocs/Acq Chart.pdf";
import AcqSimple from "../pages/ContractingInfoDocs/Acq Simplified.pdf";
import MemberCode from "../pages/ContractingInfoDocs/HUB Club NAICS Codes FY23-24.pdf";

const resources = [
  {
    title: "Federal Goals",
    description: "Key federal contracting goals and objectives for businesses",
    href: FedGoals,
    imageSrc: FedGoal,
    alt: "Federal Goals Image",
  },
  {
    title: "Federal Acquisition Regulations",
    description: "Understanding federal acquisition policies and procedures",
    href: FARs,
    imageSrc: FAR,
    alt: "Federal Acquisition Regulations Image",
  },
  {
    title: "FAQs",
    description: "Common questions about government contracting processes",
    href: FAQs,
    imageSrc: FAQ,
    alt: "FAQs Image",
  },
  {
    title: "HUB Club Benefits",
    description: "Exclusive benefits available to HUB Club members",
    href: Benefits,
    imageSrc: Benefit,
    alt: "HUB Club Benefits Image",
  },
  {
    title: "Most Wanted NAICS Codes",
    description: "Essential NAICS codes for government contractors",
    href: MostWanted,
    imageSrc: WantedCodes,
    alt: "NAICS Codes Image",
  },
  {
    title: "Socio-economic Designations",
    description:
      "Understanding various socio-economic categories and certifications",
    href: SocioEco,
    imageSrc: SE,
    alt: "Socio-economic Designations Image",
  },
  {
    title: "Acquisitions Reality Chart",
    description: "Real-world visualization of the acquisition process",
    href: Ac,
    imageSrc: Acq,
    alt: "Acquisitions Chart Image",
  },
  {
    title: "Acquisitions Simplified",
    description: "Streamlined guide to government acquisitions",
    href: AcqSimple,
    imageSrc: Simple,
    alt: "Acquisitions Simplified Image",
  },
  {
    title: "HUB Club Membership NAICS Codes",
    description: "Specialized NAICS codes for HUB Club members",
    href: MemberCode,
    imageSrc: Membership,
    alt: "HUB Club NAICS Codes Image",
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

const ContractingNeeds = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Everything You Need to Succeed
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Contracting <span className="text-blue-600">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access essential tools and platforms to help your business succeed
            in government contracting
          </p>
        </div>

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
                        loading="lazy"
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

export default ContractingNeeds;
