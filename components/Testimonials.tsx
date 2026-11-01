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
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <SectionHeader
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />

        <div className="bg-[#191A23] rounded-[45px] py-12 sm:py-16 lg:py-[84px] px-6 sm:px-12 lg:px-[100px] text-white overflow-hidden relative">
          {/* Testimonial Active Slide */}
          <div className="max-w-[850px] mx-auto min-h-[300px] flex flex-col justify-between">
            {/* Speech Bubble Container */}
            <div className="relative border border-[#B9FF66] rounded-[45px] p-8 sm:p-12 mb-10 transition-opacity duration-300">
              <p className="text-base sm:text-lg lg:text-[20px] text-white leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>

              {/* Speech bubble pointer arrow */}
              <div className="absolute -bottom-4 left-14 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-[#B9FF66]">
                <div className="absolute -top-[17px] -left-[14px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-[#191A23]" />
              </div>
            </div>

            {/* Author Info */}
            <div className="pl-14 mb-10 sm:mb-14">
              <h5 className="text-[#B9FF66] text-lg sm:text-[20px] font-medium">
                {testimonials[currentIndex].name}
              </h5>
              <p className="text-white/80 text-sm sm:text-base font-normal">
                {testimonials[currentIndex].role}
              </p>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between sm:justify-center sm:gap-14 pt-4">
              {/* Prev Button */}
              <button
                onClick={prev}
                className="text-white hover:text-[#B9FF66] transition-colors p-2 focus:outline-none cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Star Indicators */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="focus:outline-none cursor-pointer p-1"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className={`transition-all duration-300 ${
                        idx === currentIndex
                          ? "fill-[#B9FF66] text-[#B9FF66] scale-125"
                          : "fill-white/30 text-white/30 hover:fill-white/60"
                      }`}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={next}
                className="text-white hover:text-[#B9FF66] transition-colors p-2 focus:outline-none cursor-pointer"
                aria-label="Next Testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

