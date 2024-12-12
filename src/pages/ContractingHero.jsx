import React from "react";
import Hero from "../assets/ContractingHero.jpg";

const ContractingHero = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Success In <span className="text-blue-500">Contracting</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-4">
              Making Federal Contracts{" "}
              <span className="text-blue-500">Easy</span>
            </h2>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <img
                src={Hero} // Replace with your money image
                alt="Stack of hundred dollar bills"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-6 leading-tight">
                OVER $1.1 TRILLION IN GOVERNMENT CONTRACTS SECURED FOR SMALL
                BUSINESS IN FISCAL YEAR 2022-2023.
              </h2>

              <p className="text-gray-700 mb-8">
                The Hub Club is a private membership Club for businesses who are
                looking to increase their business by securing Federal
                Contracts. The HUB Club is not affiliated nor part of the
                Federal Government in any form or fashion. The HUB Club is not
                endorsed by any federal agency.
              </p>

              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
                Learn More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractingHero;
