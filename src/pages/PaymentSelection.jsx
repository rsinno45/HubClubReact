import React from "react";

const PaymentSelection = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Select Your Membership Plan
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Choose the membership level that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <h3 className={`text-xl font-bold text-${plan.color}`}>
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold mt-2">${plan.price}</p>
                <p className="text-sm mt-1 text-gray-600">{plan.type}</p>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 no-underline"
                >
                  Pay Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentSelection;
