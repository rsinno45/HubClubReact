import React, { useState } from "react";
import { Check, X } from "lucide-react";

const MembershipPage = () => {
  // Toggle for mobile view detail expansion
  const [expandedTier, setExpandedTier] = useState(null);

  const plans = [
    {
      name: "Enterprise",
      color: "purple-600",
      price: "50,000",
      type: "Premium Memberships",
    },
    {
      name: "Platinum",
      color: "blue-600",
      price: "25,000",
      type: "Premium Memberships",
    },
    {
      name: "Gold",
      color: "amber-500",
      price: "10,000",
      type: "Premium Memberships",
    },
    {
      name: "Silver",
      color: "gray-400",
      price: "5,000",
      type: "Event Memberships",
    },
    {
      name: "Bronze",
      color: "red-700",
      price: "3,000",
      type: "Event Memberships",
    },
    {
      name: "Associate",
      color: "gray-600",
      price: "1,000",
      type: "Event Memberships",
    },
  ];

  // Features list grouped by category
  const features = [
    { name: "Sam Registration", category: "Core Features" },
    { name: "HUBZone Assistance", category: "Core Features" },
    { name: "DSVCB Assistance", category: "Core Features" },
    { name: "8a Assistance", category: "Core Features" },
    { name: "Sam Annual Assistance", category: "Core Features" },
    { name: "HUBZone Renewal Assistance", category: "Core Features" },
    { name: "DSVCB Renewal Assistance", category: "Core Features" },
    { name: "SBS Marketing", category: "Marketing Services" },
    { name: "PCO Marketing", category: "Marketing Services" },
    { name: "Direct Mail", category: "Marketing Services" },
    { name: "MBE/WBE Certification", category: "Certifications" },
    { name: "DBE Certification", category: "Certifications" },
    { name: "Federal Certifications", category: "Certifications" },
    { name: "Real Estate Analysis", category: "Additional Services" },
    { name: "Capability Statements", category: "Marketing Materials" },
    { name: "Marketing Materials", category: "Marketing Materials" },
    { name: "Meet Small Business Specialist (SBS) Events", category: "Events" },
    { name: "SBS One on One Meetings", category: "Events" },
    { name: "State Certifications", category: "Certifications" },
    { name: "Professional Services", category: "Additional Services" },
    { name: "Website Services", category: "Digital Services" },
    { name: "Social Media Services", category: "Digital Services" },
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
        "Sam Registration": true,
        "HUBZone Assistance": true,
        "DSVCB Assistance": true,
        "8a Assistance": true,
        "Sam Annual Assistance": true,
        "HUBZone Renewal Assistance": true,
        "DSVCB Renewal Assistance": true,
        "SBS Marketing": true,
        "PCO Marketing": true,
        "Direct Mail": true,
        "MBE/WBE Certification": true,
        "DBE Certification": true,
        "Federal Certifications": true,
        "Real Estate Analysis": true,
        "Capability Statements": true,
        "Marketing Materials": true,
        "Meet Small Business Specialist (SBS) Events": "Unlimited",
        "SBS One on One Meetings": "Unlimited",
        "State Certifications": "$1,000",
        "Professional Services": "Discounted Rates Applied",
        "Website Services": "$10,000",
        "Social Media Services": "$250/Month",
      },
      Platinum: {
        "Sam Registration": true,
        "HUBZone Assistance": true,
        "DSVCB Assistance": true,
        "8a Assistance": true,
        "Sam Annual Assistance": true,
        "HUBZone Renewal Assistance": true,
        "DSVCB Renewal Assistance": true,
        "SBS Marketing": true,
        "PCO Marketing": true,
        "Direct Mail": true,
        "MBE/WBE Certification": "$5,000",
        "DBE Certification": "$5,000",
        "Federal Certifications": "$5,000",
        "Real Estate Analysis": true,
        "Capability Statements": true,
        "Marketing Materials": true,
        "Meet Small Business Specialist (SBS) Events": "20 Events",
        "SBS One on One Meetings": "20 Meetings",
        "State Certifications": "$5,000",
        "Professional Services": "Discounted Rates Applied",
        "Website Services": "$13,500",
        "Social Media Services": "$350/Month",
      },
      Gold: {
        "Sam Registration": true,
        "HUBZone Assistance": true,
        "DSVCB Assistance": true,
        "8a Assistance": true,
        "Sam Annual Assistance": true,
        "HUBZone Renewal Assistance": true,
        "DSVCB Renewal Assistance": true,
        "SBS Marketing": true,
        "PCO Marketing": true,
        "Direct Mail": "$2,000 per Mailer",
        "MBE/WBE Certification": "$10,000",
        "DBE Certification": "$10,000",
        "Federal Certifications": "$10,000",
        "Real Estate Analysis": "$175/hr",
        "Capability Statements": "$300",
        "Marketing Materials": "$500",
        "Meet Small Business Specialist (SBS) Events": "15 Events",
        "SBS One on One Meetings": "15 Meetings",
        "State Certifications": "$10,000",
        "Professional Services": "Request for Pricing",
        "Website Services": "$15,000",
        "Social Media Services": "$500/Month",
      },
      Silver: {
        "Sam Registration": true,
        "HUBZone Assistance": "Request for Pricing",
        "DSVCB Assistance": "Request for Pricing",
        "8a Assistance": "Request for Pricing",
        "Sam Annual Assistance": "Request for Pricing",
        "HUBZone Renewal Assistance": "Request for Pricing",
        "DSVCB Renewal Assistance": "Request for Pricing",
        "SBS Marketing": "Limited",
        "PCO Marketing": "Limited",
        "Direct Mail": "Request for Pricing",
        "MBE/WBE Certification": "Request for Pricing",
        "DBE Certification": "Request for Pricing",
        "Federal Certifications": "Request for Pricing",
        "Real Estate Analysis": "N/A",
        "Capability Statements": "$500",
        "Marketing Materials": "$500",
        "Meet Small Business Specialist (SBS) Events": "10 Events",
        "SBS One on One Meetings": "10 Meetings",
        "State Certifications": "$10,000",
        "Professional Services": "Request for Pricing",
        "Website Services": "$17,500",
        "Social Media Services": "$750/Month",
      },
      Bronze: {
        "Sam Registration": true,
        "HUBZone Assistance": "Request for Pricing",
        "DSVCB Assistance": "Request for Pricing",
        "8a Assistance": "Request for Pricing",
        "Sam Annual Assistance": "Request for Pricing",
        "HUBZone Renewal Assistance": "Request for Pricing",
        "DSVCB Renewal Assistance": "Request for Pricing",
        "SBS Marketing": "Limited",
        "PCO Marketing": "Limited",
        "Direct Mail": "N/A",
        "MBE/WBE Certification": "N/A",
        "DBE Certification": "N/A",
        "Federal Certifications": "N/A",
        "Real Estate Analysis": "N/A",
        "Capability Statements": "N/A",
        "Marketing Materials": "$1,000",
        "Meet Small Business Specialist (SBS) Events": "5 Events",
        "SBS One on One Meetings": "5 Meetings",
        "State Certifications": "$10,000",
        "Professional Services": "Request for Pricing",
        "Website Services": "$20,000",
        "Social Media Services": "$1000/Month",
      },
      Associate: {
        "Sam Registration": true,
        "HUBZone Assistance": "N/A",
        "DSVCB Assistance": "N/A",
        "8a Assistance": "N/A",
        "Sam Annual Assistance": "N/A",
        "HUBZone Renewal Assistance": "N/A",
        "DSVCB Renewal Assistance": "N/A",
        "SBS Marketing": "Limited",
        "PCO Marketing": "Limited",
        "Direct Mail": "N/A",
        "MBE/WBE Certification": "N/A",
        "DBE Certification": "N/A",
        "Federal Certifications": "N/A",
        "Real Estate Analysis": "N/A",
        "Capability Statements": "N/A",
        "Marketing Materials": "N/A",
        "Meet Small Business Specialist (SBS) Events": "Per Request",
        "SBS One on One Meetings": "Per Request",
        "State Certifications": "N/A",
        "Professional Services": "N/A",
        "Website Services": "N/A",
        "Social Media Services": "N/A",
      },
    };

    return values[plan.name]?.[feature.name] || "N/A";
  };

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
              {/* Join Now Button Row */}
              <div className="bg-white p-6 border-t">
                <span className="text-sm text-gray-700"></span>
              </div>
              {plans.map((plan) => (
                <div
                  key={`button-${plan.name}`}
                  className="bg-white p-6 border-t text-center"
                >
                  <a
                    href={`/join/${plan.name.toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                    className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md"
                  >
                    Join Now!
                  </a>
                </div>
              ))}
            </div>
          </div>
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
                    href={`/join/${plan.name.toLowerCase()}`}
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
      </div>
    </div>
  );
};

export default MembershipPage;
