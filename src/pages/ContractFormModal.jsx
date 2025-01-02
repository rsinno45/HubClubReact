import React, { useState } from "react";
import { X } from "lucide-react";
import { pdfjs } from "react-pdf";
import { PDFDocument } from "pdf-lib";
import Contract from "./PDF/APp.pdf";

const PDFViewerModal = ({ planName, planPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCon, setIsOpenCon] = useState(false);
  const [pdf, setPdf] = useState(null);

  const plans = [
    {
      name: "Enterprise",
      color: "purple-600",
      price: "50,000",
      type: "Premium Memberships",
      link: "https://square.link/u/EksgGU0f",
    },
    {
      name: "Platinum",
      color: "blue-600",
      price: "25,000",
      type: "Premium Memberships",
      link: "https://square.link/u/K8KJBwQC",
    },
    {
      name: "Gold",
      color: "amber-500",
      price: "10,000",
      type: "Premium Memberships",
      link: "https://square.link/u/Qp9DsXPh",
    },
    {
      name: "Silver",
      color: "gray-400",
      price: "5,000",
      type: "Event Memberships",
      link: "https://square.link/u/yLeDhJP1",
    },
    {
      name: "Bronze",
      color: "red-700",
      price: "3,000",
      type: "Event Memberships",
      link: "https://square.link/u/k3ymjHWV",
    },
    {
      name: "Associate",
      color: "gray-600",
      price: "1,000",
      type: "Event Memberships",
      link: "https://square.link/u/1EErxdYg",
    },
  ];

  const generatePdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText("This is a sample contract.", { x: 100, y: 100 });
    const pdfBytes = await pdfDoc.save();
    setPdf(pdfBytes);
  };

  const fillOutPdf = async () => {
    const pdfDoc = await PDFDocument.load(pdf);
    const form = pdfDoc.getForm();
    form.getField("name").setText("John Doe");
    const filledPdfBytes = await pdfDoc.save();
    // Save the filled-out PDF to your server or database
  };

  return (
    <>
      <div className="flex items-center justify-center py-5">
        {" "}
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md "
        >
          Join Now!
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative ">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">MEMBERSHIP APPLICATION</h2>
                <p className="text-gray-600"></p>
              </div>

              <form
                name="membership-application"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="membership-application"
                />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold bg-gray-100 p-2">
                    SELECT A PLAN
                  </h3>

                  {plans.map((plan) => (
                    <label
                      key={plans.name}
                      className="inline-flex items-center px-5"
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={plans.name}
                        required
                      />
                      <span className="ml-2 ">
                        {plan.name} - ${plan.price}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Applicant Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold bg-gray-100 p-2">
                    APPLICANT INFORMATION
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Current Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        DOB
                      </label>
                      <input
                        type="date"
                        name="dob"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Cell
                      </label>
                      <input
                        type="tel"
                        name="cell"
                        className="w-full p-2 border rounded"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Marital Status
                      </label>
                      <div className="flex space-x-4">
                        {["Single", "Married", "Divorced", "Widowed"].map(
                          (status) => (
                            <label
                              key={status}
                              className="inline-flex items-center"
                            >
                              <input
                                type="radio"
                                name="maritalStatus"
                                value={status}
                                className="mr-2"
                                required
                              />
                              {status}
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold bg-gray-100 p-2">
                    COMPANY INFORMATION
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Type of Company
                      </label>
                      <div className="flex space-x-4">
                        {[
                          "Corporation",
                          "LLC",
                          "Partnership",
                          "Sole Proprietor",
                        ].map((type) => (
                          <label
                            key={type}
                            className="inline-flex items-center"
                          >
                            <input
                              type="radio"
                              name="companyType"
                              value={type}
                              className="mr-2"
                              required
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company Address
                      </label>
                      <input
                        type="text"
                        name="companyAddress"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        className="w-full p-2 border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        FEIN
                      </label>
                      <input
                        type="text"
                        name="fein"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Dun & Bradstreet #
                      </label>
                      <input
                        type="text"
                        name="dunsBradstreet"
                        className="w-full p-2 border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Years in Business
                      </label>
                      <input
                        type="number"
                        name="yearsInBusiness"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Number of Employees
                      </label>
                      <input
                        type="number"
                        name="numberOfEmployees"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        HUBZone Employees
                      </label>
                      <input
                        type="number"
                        name="hubzoneEmployees"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold bg-gray-100 p-2">
                    BUSINESS INFORMATION
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Description of Business
                      </label>
                      <textarea
                        name="businessDescription"
                        className="w-full p-2 border rounded"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          UEI #
                        </label>
                        <input
                          type="text"
                          name="ueiNumber"
                          className="w-full p-2 border rounded"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Cage Code
                        </label>
                        <input
                          type="text"
                          name="cageCode"
                          className="w-full p-2 border rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        NAICS Codes
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <input
                            key={i}
                            type="text"
                            name={`naicsCode${i + 1}`}
                            placeholder={`NAICS ${i + 1} Code`}
                            className="w-full p-2 border rounded"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold bg-gray-100 p-2">
                    CERTIFICATIONS
                  </h3>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Federal Certifications
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {["8(a)", "SB", "NWBE", "DVBE", "HUBZone", "DSB"].map(
                        (cert) => (
                          <label
                            key={cert}
                            className="inline-flex items-center"
                          >
                            <input
                              type="checkbox"
                              name="federalCertifications"
                              value={cert}
                              className="mr-2"
                            />
                            {cert}
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Local Certifications
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {["MBE", "WBE", "DBE", "AC-DBE"].map((cert) => (
                        <label key={cert} className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="localCertifications"
                            value={cert}
                            className="mr-2"
                          />
                          {cert}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFViewerModal;
