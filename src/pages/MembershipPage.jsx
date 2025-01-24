import React, { useState } from "react";
import { Check, X } from "lucide-react";
import PDFViewerModal from "./ContractFormModal";

const MembershipPage = () => {
  // Toggle for mobile view detail expansion
  const [expandedTier, setExpandedTier] = useState(null);

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

  // Features list grouped by category
  const features = [
    { name: "SAM Registration", category: "Core Features" },
    { name: "HUBZone Assistance", category: "Core Features" },
    { name: "SDVOB Assistance", category: "Core Features" },
    { name: "8a Assistance", category: "Core Features" },
    { name: "SAM Annual Assistance", category: "Core Features" },
    { name: "HUBZone Renewal Assistance", category: "Core Features" },
    { name: "SDVOB Renewal Assistance", category: "Core Features" },
    { name: "MBE/WBE Certification¹", category: "Certifications" },
    { name: "DBE Certification¹", category: "Certifications" },
    { name: "Federal Certifications¹", category: "Certifications" },
    { name: "State Certifications¹", category: "Certifications" },
    { name: "Capability Statements", category: "Marketing Materials" },
    { name: "Marketing Materials", category: "Marketing Materials" },
    {
      name: "Meet Small Business Specialist (SBS) Events²",
      category: "Events",
    },
    { name: "SBS One on One Meetings²", category: "Events" },
    { name: "Professional Services³", category: "Additional Services" },
    { name: "Workforce Development⁴", category: "Additional Services" },
    { name: "Business Development⁴", category: "Additional Services" },
    { name: "Business Planning⁴", category: "Additional Services" },
    { name: "Business Analytics⁴", category: "Additional Services" },
    { name: "F.A.R. Training⁴", category: "Additional Services" },
    { name: "Real Estate Analysis⁴", category: "Additional Services" },
    { name: "Social Media Services⁵", category: "Digital Services" },
    { name: "SBS Marketing⁵", category: "Marketing Services" },
    { name: "PCO Marketing⁵", category: "Marketing Services" },
    { name: "Direct Mail⁶", category: "Marketing Services" },
    { name: "Website Services⁷", category: "Digital Services" },
    { name: "RST Cloud Services⁷", category: "Additional Services" },
    { name: "Business Financing⁸", category: "Additional Services" },
  ];

  const titleColors = {
    Membership: "text-gray-900",
    Plans: {
      Enterprise: "text-purple-600",
      Platinum: "text-blue-600",
      Gold: "text-amber-500",
      Silver: "text-gray-400",
      Bronze: "text-red-700",
      Associate: "text-gray-600",
    },
  };

  // Helper function to determine feature value
  const getFeatureValue = (plan, feature) => {
    const values = {
      Enterprise: {
        "SAM Registration": true,
        "HUBZone Assistance": true,
        "SDVOB Assistance": true,
        "8a Assistance": true,
        "SAM Annual Assistance": true,
        "HUBZone Renewal Assistance": true,
        "SDVOB Renewal Assistance": true,
        "MBE/WBE Certification¹": true,
        "DBE Certification¹": true,
        "Federal Certifications¹": true,
        "State Certifications¹": true,
        "Capability Statements": true,
        "Marketing Materials": true,
        "Meet Small Business Specialist (SBS) Events²": "Unlimited",
        "SBS One on One Meetings²": "Unlimited",
        "Professional Services³": true,
        "Workforce Development⁴": true,
        "Business Development⁴": true,
        "Business Planning⁴": true,
        "Business Analytics⁴": true,
        "F.A.R. Training⁴": true,
        "Real Estate Analysis⁴": true,
        "Social Media Services⁵": true,
        "SBS Marketing⁵": true,
        "PCO Marketing⁵": true,
        "Direct Mail⁶": true,
        "Website Services⁷": true,
        "RST Cloud Services⁷": true,
        "Business Financing⁸": true,
      },
      Platinum: {
        "SAM Registration": true,
        "HUBZone Assistance": true,
        "SDVOB Assistance": true,
        "8a Assistance": true,
        "SAM Annual Assistance": true,
        "HUBZone Renewal Assistance": true,
        "SDVOB Renewal Assistance": true,
        "MBE/WBE Certification¹": "Discount",
        "DBE Certification¹": "RFP*",
        "Federal Certifications¹": "RFP*",
        "State Certifications¹": "RFP*",
        "Capability Statements": true,
        "Marketing Materials": true,
        "Meet Small Business Specialist (SBS) Events²": "20",
        "SBS One on One Meetings²": "20",
        "Professional Services³": "Discount",
        "Workforce Development⁴": "Discount",
        "Business Development⁴": "Discount",
        "Business Planning⁴": "Discount",
        "Business Analytics⁴": "Discount",
        "F.A.R. Training⁴": "Discount",
        "Real Estate Analysis⁴": "Discount",
        "Social Media Services⁵": "Discount",
        "SBS Marketing⁵": "Discount",
        "PCO Marketing⁵": "Discount",
        "Direct Mail⁶": "Discount",
        "Website Services⁷": "Discount",
        "RST Cloud Services⁷": "Discount",
        "Business Financing⁸": "RFP*",
      },
      Gold: {
        "SAM Registration": true,
        "HUBZone Assistance": true,
        "SDVOB Assistance": true,
        "8a Assistance": true,
        "SAM Annual Assistance": true,
        "HUBZone Renewal Assistance": true,
        "SDVOB Renewal Assistance": true,
        "MBE/WBE Certification¹": "RFP*",
        "DBE Certification¹": "RFP*",
        "Federal Certifications¹": "RFP*",
        "State Certifications¹": "RFP*",
        "Capability Statements": "RFP*",
        "Marketing Materials": "RFP*",
        "Meet Small Business Specialist (SBS) Events²": "RFP*",
        "SBS One on One Meetings²": "RFP*",
        "Professional Services³": "RFP*",
        "Workforce Development⁴": "RFP*",
        "Business Development⁴": "RFP*",
        "Business Planning⁴": "RFP*",
        "Business Analytics⁴": "RFP*",
        "F.A.R. Training⁴": "RFP*",
        "Real Estate Analysis⁴": "RFP*",
        "Social Media Services⁵": "RFP*",
        "SBS Marketing⁵": "RFP*",
        "PCO Marketing⁵": "RFP*",
        "Direct Mail⁶": "RFP*",
        "Website Services⁷": "RFP*",
        "RST Cloud Services⁷": "RFP*",
        "Business Financing⁸": "RFP*",
      },
      Silver: {
        "SAM Registration": "RFP*",
        "HUBZone Assistance": "RFP*",
        "SDVOB Assistance": "RFP*",
        "8a Assistance": "RFP*",
        "SAM Annual Assistance": "RFP*",
        "HUBZone Renewal Assistance": "RFP*",
        "SDVOB Renewal Assistance": "RFP*",
        "MBE/WBE Certification¹": "RFP*",
        "DBE Certification¹": "RFP*",
        "Federal Certifications¹": "RFP*",
        "State Certifications¹": "RFP*",
        "Capability Statements": "$500",
        "Marketing Materials": "$1,000",
        "Meet Small Business Specialist (SBS) Events²": "10",
        "SBS One on One Meetings²": "15",
        "Professional Services³": "RFP*",
        "Workforce Development⁴": "RFP*",
        "Business Development⁴": "RFP*",
        "Business Planning⁴": "RFP*",
        "Business Analytics⁴": "N/A",
        "F.A.R. Training⁴": "N/A",
        "Real Estate Analysis⁴": "N/A",
        "Social Media Services⁵": "N/A",
        "SBS Marketing⁵": "N/A",
        "PCO Marketing⁵": "N/A",
        "Direct Mail⁶": "N/A",
        "Website Services⁷": "N/A",
        "RST Cloud Services⁷": "N/A",
        "Business Financing⁸": "N/A",
      },
      Bronze: {
        "SAM Registration": "RFP*",
        "HUBZone Assistance": "RFP*",
        "SDVOB Assistance": "RFP*",
        "8a Assistance": "RFP*",
        "SAM Annual Assistance": "RFP*",
        "HUBZone Renewal Assistance": "RFP*",
        "SDVOB Renewal Assistance": "RFP*",
        "MBE/WBE Certification¹": "RFP*",
        "DBE Certification¹": "RFP*",
        "Federal Certifications¹": "RFP*",
        "State Certifications¹": "RFP*",
        "Capability Statements": "N/A",
        "Marketing Materials": "N/A",
        "Meet Small Business Specialist (SBS) Events²": "5",
        "SBS One on One Meetings²": "10",
        "Professional Services³": "N/A",
        "Workforce Development⁴": "N/A",
        "Business Development⁴": "N/A",
        "Business Planning⁴": "N/A",
        "Business Analytics⁴": "N/A",
        "F.A.R. Training⁴": "N/A",
        "Real Estate Analysis⁴": "N/A",
        "Social Media Services⁵": "N/A",
        "SBS Marketing⁵": "N/A",
        "PCO Marketing⁵": "N/A",
        "Direct Mail⁶": "N/A",
        "Website Services⁷": "N/A",
        "RST Cloud Services⁷": "N/A",
        "Business Financing⁸": "N/A",
      },
      Associate: {
        "SAM Registration": "RFP*",
        "HUBZone Assistance": "RFP*",
        "SDVOB Assistance": "RFP*",
        "8a Assistance": "RFP*",
        "SAM Annual Assistance": "N/A",
        "HUBZone Renewal Assistance": "N/A",
        "SDVOB Renewal Assistance": "N/A",
        "MBE/WBE Certification¹": "N/A",
        "DBE Certification¹": "N/A",
        "Federal Certifications¹": "N/A",
        "State Certifications¹": "N/A",
        "Capability Statements": "N/A",
        "Marketing Materials": "N/A",
        "Meet Small Business Specialist (SBS) Events²": "Per Request",
        "SBS One on One Meetings²": "5",
        "Professional Services³": "N/A",
        "Workforce Development⁴": "N/A",
        "Business Development⁴": "N/A",
        "Business Planning⁴": "N/A",
        "Business Analytics⁴": "N/A",
        "F.A.R. Training⁴": "N/A",
        "Real Estate Analysis⁴": "N/A",
        "Social Media Services⁵": "N/A",
        "SBS Marketing⁵": "N/A",
        "PCO Marketing⁵": "N/A",
        "Direct Mail⁶": "N/A",
        "Website Services⁷": "N/A",
        "RST Cloud Services⁷": "N/A",
        "Business Financing⁸": "N/A",
      },
    };

    return values[plan.name]?.[feature.name] || "N/A";
  };

  const footnotes = [
    "RFP* - Request for Pricing.",
    "¹ Enterprise Membership includes Local and State Certifications.",
    "² Events and SBS Meetings are One on ONE meetings with Small Business Liaisons, Small Business Specialist and Small Business Program Officials throughout the fiscal year (30 minimum meetings).",
    "³ Professional Services are for Members only including basic Accounting and Legal Services.",
    "⁴ Business Development services also include supply chain, private sector business growth and federal research.",
    "⁵ Marketing Services includes weekly contact with Procurement Contracting Officers, Government Purchasing Card Holders and Private Sector Industries.",
    "⁶ Direct Mail for governmental, wholesale and retail opportunities at a discount.",
    "⁷ IT services are available to HUB Club™ Members that include website analysis, federal regulations concerning websites, and Cloud storage is available.",
    "⁸ Business Financing is available to HUB Club™ Members through Conventional Funding, Grants, NMTCs and OZFs.",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Choose Your Plan
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Membership <span className="text-blue-600">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect membership level for your business needs
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {/* Header */}
              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Features
                </h3>
              </div>
              {plans.map((plan) => (
                <div key={plan.name} className="bg-gray-50 p-6 text-center">
                  <h3 className={`text-lg font-semibold text-${plan.color}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">${plan.price}/yr</p>
                </div>
              ))}

              {/* Features */}
              {features.map((feature) => (
                <React.Fragment key={feature.name}>
                  <div className="bg-white p-4 border-t">
                    <span className="text-sm text-gray-700">
                      {feature.name}
                    </span>
                  </div>
                  {plans.map((plan) => (
                    <div
                      key={`${feature.name}-${plan.name}`}
                      className="bg-white p-4 border-t text-center"
                    >
                      {typeof getFeatureValue(plan, feature) === "boolean" ? (
                        getFeatureValue(plan, feature) ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">
                          {getFeatureValue(plan, feature)}
                        </span>
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Join Now Button Row */}
          <PDFViewerModal />
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b">
                <h3
                  className={`text-xl font-semibold text-${plan.color} text-center`}
                >
                  {plan.name}
                </h3>
                <p className="mt-2 text-center text-gray-600">
                  ${plan.price}/yr
                </p>
                <div className="mt-4 flex flex-col space-y-3">
                  <button
                    onClick={() =>
                      setExpandedTier(
                        expandedTier === plan.name ? null : plan.name
                      )
                    }
                    className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    {expandedTier === plan.name ? "Show Less" : "View Details"}
                  </button>
                  <a
                    href={plan.link}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
                  >
                    Join Now!
                  </a>
                </div>
              </div>
              {expandedTier === plan.name && (
                <div className="p-6 space-y-4">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-700">
                        {feature.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {typeof getFeatureValue(plan, feature) === "boolean" ? (
                          getFeatureValue(plan, feature) ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )
                        ) : (
                          getFeatureValue(plan, feature)
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Footnotes Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
          <div className="space-y-2">
            {footnotes.map((note, index) => (
              <p key={index} className="text-sm text-gray-600">
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
