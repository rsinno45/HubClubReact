import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import MembershipPage from "./pages/MembershipPage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";

// Import all event images
import Huntsville from "./assets/huntsville.jpg";
import Tampa from "./assets/tampa.jpg";
import DC from "./assets/DCEvents.jpg";
import Baton from "./assets/batonLA.jpeg";
import Ozark from "./assets/ozarks.jpg";
import Topeka from "./assets/topeka.jpg";
import RIA from "./assets/RIA.jpeg";
import FrenchLick from "./assets/frenchLick.jpeg";
import NewHaven from "./assets/NewHaven.jpeg";
import Reno from "./assets/RenoEvents.jpg";

function App() {
  const events = [
    {
      id: "huntsville-al",
      city: "Huntsville, AL",
      date: "January 15th 2025",
      image: Huntsville,
      status: "sold out",
    },
    {
      id: "tampa-fl",
      city: "Tampa, FL",
      date: "February 1st 2025",
      image: Tampa,
      status: "sold out",
    },
    {
      id: "washington-dc",
      city: "Washington, DC",
      date: "February 29th 2025",
      image: DC,
      status: "available",
    },
    {
      id: "baton-rouge-la",
      city: "Baton Rouge, LA",
      date: "March 20th 2025",
      image: Baton,
      status: "available",
    },
    {
      id: "lake-ozarks-mo",
      city: "Lake of Ozarks, MO",
      date: "April 10th 2025",
      image: Ozark,
      status: "available",
    },
    {
      id: "topeka-ks",
      city: "Topeka, KS",
      date: "May 15th 2025",
      image: Topeka,
      status: "available",
    },
    {
      id: "ria-il",
      city: "RIA, IL",
      date: "May 19th 2025",
      image: RIA,
      status: "available",
    },
    {
      id: "french-lick-in",
      city: "French Lick, IN",
      date: "May 29th 2025",
      image: FrenchLick,
      status: "available",
    },
    {
      id: "new-haven-ct",
      city: "New Haven, CT",
      date: "June 25th 2025",
      image: NewHaven,
      status: "available",
    },
    {
      id: "reno-nv",
      city: "Reno, NV",
      date: "August 14th 2025",
      image: Reno,
      status: "available",
    },
  ];

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/events" element={<EventsPage events={events} />} />
          {events.map((event) => (
            <Route
              key={event.id}
              path={`/events/${event.id}`}
              element={<EventDetailPage eventData={event} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
