import React from "react";
import membershipContract from "./PDF/FY24-25 - HUB Club™ Membership Contract.pdf";

const ContractDownload = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Hub Club Membership Contract
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Thank you for applying to Hub Club Chicago. Please download and
            review your membership contract below.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <a
            href={membershipContract}
            download
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Download Contract
          </a>

          <p className="mt-6 text-sm text-gray-500">
            After reviewing the contract, please proceed to complete your
            membership payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContractDownload;
