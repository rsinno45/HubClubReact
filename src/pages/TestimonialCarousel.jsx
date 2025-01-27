import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "The HUB Club has provided me with all the technical services and the process to win contracts. I wish I joined The HUB Club 15 years ago!",
      author: "Mike G.",
    },
    {
      text: "Learning about federal contracting is very difficult and seems insurmountable, but thanks to The HUB Club, I am able to master photo contracting and be successful!",
      author: "Amer S.",
    },
    {
      text: "Everything I learned to be successful with federal contracting is all due to The HUB Club. The strategies employed by The HUB Club are top notch!",
      author: "Charles J.",
    },
    {
      text: "I have been trying to get  my business up and running and to be profitable for the past four years and then I joined The HUB Club. I am operating with a new attitude, and my company is successful in securing federal contracts. Thank you, The HUB Club!",
      author: "Christian S.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Members Say
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 flex flex-col items-center text-center px-4"
                  >
                    <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 max-w-3xl mx-auto">
                      "{testimonial.text}"
                    </blockquote>
                    <cite className="text-lg font-semibold text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
