"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

interface Step {
  number: string;
  title: string;
  content: string;
}

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const steps: Step[] = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We conduct comprehensive market research, competitor benchmarking, and audience profiling to identify high-impact growth levers and formulate a customized multi-channel strategy.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Our skilled specialists execute the agreed campaigns across chosen platforms—deploying technical optimizations, creating engaging content, and launching high-converting paid ad funnels.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "We continuously analyze performance telemetry, conduct rapid A/B testing on ad copies and landing experiences, and refine bids to maximize ROI and lower acquisition costs.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "You receive clear, transparent monthly reports highlighting key business metrics alongside scheduled review meetings to discuss achievements, insights, and next initiatives.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "We leverage data-driven feedback loops and industry trend forecasting to proactively iterate on your marketing engine, guaranteeing sustained long-term growth.",
    },
  ];

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <SectionHeader
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />

        <div className="flex flex-col gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={step.number}
                className={`rounded-[30px] sm:rounded-[45px] border border-[#191A23] shadow-[0_5px_0_#191A23] transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
                }`}
              >
                <button
                  onClick={() => toggleStep(idx)}
                  className="w-full text-left p-6 sm:px-12 sm:py-8 lg:py-10 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-7">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#191A23]">
                      {step.number}
                    </span>
                    <span className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#191A23]">
                      {step.title}
                    </span>
                  </div>

                  {/* Plus / Minus Button Circle */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#F3F3F3] border border-[#191A23] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <span className="w-4 sm:w-6 h-0.5 sm:h-1 bg-[#191A23] rounded-full" />
                    ) : (
                      <div className="relative w-4 sm:w-6 h-4 sm:h-6 flex items-center justify-center">
                        <span className="absolute w-4 sm:w-6 h-0.5 sm:h-1 bg-[#191A23] rounded-full" />
                        <span className="absolute h-4 sm:h-6 w-0.5 sm:w-1 bg-[#191A23] rounded-full" />
                      </div>
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-12 pb-8 sm:pb-10 pt-0 animate-in fade-in duration-200">
                    <hr className="border-t border-[#191A23] mb-6 sm:mb-8" />
                    <p className="text-base sm:text-lg text-[#191A23] leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

