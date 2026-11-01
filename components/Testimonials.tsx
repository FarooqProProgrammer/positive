"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      id: 2,
      quote:
        "\"Positivus completely revamped our search visibility and PPC performance. Within 90 days, our customer acquisition cost dropped by 38% while our conversion volumes doubled. Their transparent communication and strategic expertise make them an indispensable partner.\"",
      name: "Sarah Jenkins",
      role: "VP of Growth at RetailFlow",
    },
    {
      id: 3,
      quote:
        "\"The content creation and organic social campaigns orchestrated by Positivus elevated our brand presence across all key target demographics. Our engagement rates skyrocketed by 150%, and we gained unprecedented industry authority.\"",
      name: "David Chen",
      role: "Founder & CEO at InnovateLab",
    },
    {
      id: 4,
      quote:
        "\"Working with the Positivus team has been a game-changer. They don't just execute campaigns; they act as a strategic extension of our internal team, consistently bringing fresh ideas and measurable results.\"",
      name: "Elena Rostova",
      role: "Head of Marketing at CloudScale",
    },
    {
      id: 5,
      quote:
        "\"Their data-driven approach to SEO and analytics tracking helped us uncover hidden revenue opportunities. Positivus has delivered beyond our highest expectations time and time again.\"",
      name: "Marcus Vance",
      role: "Chief Operating Officer at Nexus Health",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
    );
  };

  return (
    <section data-sc-act="flow" className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div data-sc-in>
          <SectionHeader
            title="Testimonials"
            description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          />
        </div>

        {/* Carousel Container */}
        <div
          data-sc-in
          className="bg-[#191A23] rounded-[45px] py-12 px-6 sm:px-12 lg:py-20 lg:px-16 text-white relative overflow-hidden shadow-[0_6px_0_#B9FF66]"
        >
          {/* Active Testimonial Card */}
          <div className="max-w-[800px] mx-auto flex flex-col items-center">
            {/* Speech Bubble */}
            <div className="relative border border-[#B9FF66] rounded-[40px] p-8 sm:p-12 mb-10 w-full transition-all duration-300">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-relaxed text-white">
                {testimonials[currentIndex].quote}
              </p>

              {/* Speech bubble pointer notch */}
              <div
                className="absolute -bottom-4 left-16 sm:left-20 w-8 h-8 bg-[#191A23] border-b border-r border-[#B9FF66] rotate-45"
                aria-hidden="true"
              />
            </div>

            {/* Author info */}
            <div className="self-start pl-16 sm:pl-20 mb-12 sm:mb-16">
              <h4 className="text-[18px] sm:text-[20px] font-medium text-[#B9FF66]">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-[16px] sm:text-[18px] text-white">
                {testimonials[currentIndex].role}
              </p>
            </div>

            {/* Navigation Controls: Arrows and Star Indicators */}
            <div className="flex items-center justify-between w-full max-w-[500px]">
              {/* Prev Button */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous Testimonial"
                className="p-2 text-white hover:text-[#B9FF66] transition-colors cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Star Indicators */}
              <div className="flex items-center gap-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="p-1 cursor-pointer transition-transform hover:scale-125"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill={currentIndex === idx ? "#B9FF66" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                        fill={currentIndex === idx ? "#B9FF66" : "white"}
                        stroke={currentIndex === idx ? "#B9FF66" : "white"}
                      />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={next}
                aria-label="Next Testimonial"
                className="p-2 text-white hover:text-[#B9FF66] transition-colors cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
