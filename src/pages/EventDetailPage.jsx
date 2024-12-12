import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  Building2,
  Clock,
  ArrowRight,
} from "lucide-react";

const EventDetailPage = ({ eventData }) => {
  const defaultAgenda = {
    dayPrior: [
      { time: "3:00 PM", activity: "Hotel Check In" },
      { time: "4:00 PM", activity: "Registration" },
      { time: "5:00 PM", activity: "Networking" },
    ],
    mainDay: [
      { time: "7:00 AM", activity: "Registration Begins" },
      { time: "9:00 AM", activity: "Opening Remarks" },
      { time: "9:30 AM", activity: "Match Making Sessions & Agency Speakers*" },
      { time: "12:00 PM", activity: "Lunch - OSDBU Speaker" },
      { time: "1:00 PM", activity: "Match Making Sessions & Agency Speakers*" },
      { time: "5:00 PM", activity: "Dinner/Networking" },
    ],
    dayAfter: [
      { time: "5:00 AM", activity: "Hotel Check Out" },
      { time: "10:00 AM", activity: "Recap of GLC Meeting" },
    ],
  };

  const federalAgencies = [
    "Agriculture (USDA)",
    "Air Force (DoD)",
    "Army (DoD)",
    "Commerce",
    "Department of Defense",
    "Education",
    "Energy",
    "Health & Human Services",
    "Homeland Security (DHS)",
    "Housing & Urban Development",
    "Interior",
    "Justice",
    "Labor",
    "NASA",
    "Navy (DoD)",
    "State Department",
    "Treasury",
    "Veterans Administration",
  ];

  const quasiFederalAgencies = [
    "Federal Reserve Bank",
    "Fannie Mae",
    "Freddie Mac",
    "Ginnie Mae",
    "National Veteran Business Council",
    "Tennessee Valley Authority",
    "U.S. Postal Service",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={eventData.image}
          alt={eventData.city}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">{eventData.city}</h1>
            <div className="flex justify-center space-x-8 text-xl">
              <div className="flex items-center">
                <Building2 className="w-6 h-6 mr-2" />
                <span>30 Agencies</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span>400 Attendees</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                <span>{eventData.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Agenda Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            GLC Conference Agenda
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Day Prior */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Day Prior
              </h3>
              <div className="space-y-4">
                {defaultAgenda.dayPrior.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{item.time}</p>
                      <p className="text-gray-600">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Day */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Day of GLC Meeting
              </h3>
              <div className="space-y-4">
                {defaultAgenda.mainDay.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{item.time}</p>
                      <p className="text-gray-600">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day After */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Day After
              </h3>
              <div className="space-y-4">
                {defaultAgenda.dayAfter.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{item.time}</p>
                      <p className="text-gray-600">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Throughout the day, federal agency speakers will be highlighting
            the needs of their agency, and matchmaking sessions of 25 minutes
            will be available on a first come, first serve order according to
            HUB Club™ levels of membership. Each HUB Club™ member will be
            guaranteed three one-on-one match making sessions.
          </p>
        </div>

        {/* Agencies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Participating Agencies
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">
              Federal Agencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {federalAgencies.map((agency, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  <span>{agency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">
              Quasi-Federal Agencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quasiFederalAgencies.map((agency, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  <span>{agency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Opportunities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Go to{" "}
            <a
              href="https://SAM.gov"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAM.gov
            </a>{" "}
            and enter your NAICS Code(s) and see the opportunities you can
            qualify for and by attending GLC Meetings, you will have a direct
            pipeline to success. See the Federal Agencies invited to the GLC
            Meetings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
