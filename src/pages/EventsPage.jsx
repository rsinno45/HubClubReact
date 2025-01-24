import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Hotel,
  Plane,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Events from "../assets/Events.jpg";
import Baton from "../assets/batonLA.jpeg";
import Ozark from "../assets/ozarks.jpg";
import Topeka from "../assets/topeka.jpg";
import RIA from "../assets/RIA.jpeg";
import FrenchLick from "../assets/frenchLick.jpeg";
import NewHaven from "../assets/NewHaven.jpeg";
import Reno from "../assets/RenoEvents.jpg";
import Events2025 from "../assets/Chicago-Events-Background.jpg";
import ".//pages_styling/About.css";

const EventsPage = ({ events: propEvents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update slides to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = propEvents || [
    {
      city: "Baton Rouge, LA",
      date: "March 20th 2025",
      image: Baton,
      status: "available",
    },
    {
      city: "Lake of the Ozarks, MO",
      date: "April 10th 2025",
      image: Ozark,
      status: "available",
    },
    {
      city: "Topeka, KS",
      date: "May 15th 2025",
      image: Topeka,
      status: "available",
    },
    {
      city: "RIA, IL",
      date: "June 10th 2025",
      image: RIA,
      status: "available",
    },
    {
      city: "French Lick, IN",
      date: "May 29th 2025",
      image: FrenchLick,
      status: "available",
    },
    {
      city: "New Haven, CT",
      date: "June 25th 2025",
      image: NewHaven,
      status: "available",
    },
    {
      city: "Reno, NV",
      date: "August 14th 2025",
      image: Reno,
      status: "available",
    },
  ];

  const extendedEvents = [...events, ...events, ...events].map((event) => ({
    ...event,
    id: event.city
      .toLowerCase()
      .replace(/\s+of\s+/g, "-of-")
      .replace(/\s+/g, "-")
      .replace(/,/g, ""),
  }));

  const hotelInfo = [
    "Hotel registrations will be available 60 days prior to event and will be open for 45 days.",
    "Hotel accommodations and airfare will be available at a discount for HUB Club Members only 60 days prior to the GLC Meetings.",
    "Airline bookings will be available up to 30 days prior to event.",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const renderEventCard = (event, idx) => (
    <Link
      to={`/events/${event.id}`}
      key={idx}
      className="w-full px-2"
      style={{ flex: `0 0 ${100 / slidesToShow}%` }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="relative h-64">
        <img
          src={event.image}
          alt={event.city}
          className="w-full h-full object-cover rounded-xl"
        />
        {event.status === "sold out" && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full transform rotate-12">
            SOLD OUT
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
          <div className="flex items-center space-x-2 text-white mb-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold text-lg">{event.city}</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Calendar className="w-5 h-5" />
            <span>{event.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className="relative w-full h-[600px] mb-16">
        <img
          src={Events2025}
          alt="Events Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" id="EventsTitle">
          <div className="absolute bottom-8 right-8 flex flex-col items-center">
            <h1 className="text-white text-8xl font-bold tracking-wide text-shadow">
              Events
            </h1>
            <h2 className="text-white text-8xl font-bold tracking-wide text-shadow">
              2025
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h3 className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">
              GLC Meetings
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Take the Plunge with The HUB Club!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tired of trying with no luck of getting business with the Federal
              Government?
            </p>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                About Our GLC Meetings
              </h3>
              <p className="text-gray-600">
                The HUB Club has created the perfect system where a small
                business can secure Federal Contracts. The HUB Club brings PCOs,
                SBIs, SBS and employees of OSDBUs to you. You meet these federal
                officials in person and have a one-on-one meeting(s) and find
                out what is needed for your business to be successful.
              </p>
              <p className="text-gray-600">
                Since 2003, The HUB Club has worked with over 900 small
                businesses. With over 20 years of experience, getting your
                business in contract with the right Agency or Subagency has
                never been easier.
              </p>
              <Link
                to="/membership"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 no-underline inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                Join the HUB Club Now
              </Link>
            </div>
            <div>
              <img
                src={Events}
                alt="Business meeting"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Conference Dates Carousel Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                UPCOMING EVENTS
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                GLC Conference Dates
              </h3>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      (currentIndex * 100) / slidesToShow
                    }%)`,
                  }}
                >
                  {extendedEvents.map((event, idx) =>
                    renderEventCard(event, idx)
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Travel Information Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Important Travel Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Hotel className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Hotel Accommodations
                    </h4>
                    {hotelInfo.slice(0, 2).map((info, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-2">
                        {info}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Flight Bookings
                    </h4>
                    <p className="text-gray-600 text-sm">{hotelInfo[2]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
