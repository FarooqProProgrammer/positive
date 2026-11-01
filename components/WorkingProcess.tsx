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
    <section data-sc-act="flow" className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div data-sc-in>
          <SectionHeader
            title="Our Working Process"
            description="Step-by-Step Guide to Achieving Your Business Goals"
          />
        </div>

        <div
          data-sc-in
          data-sc-stagger="60"
          className="flex flex-col gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={step.number}
                className={`rounded-[45px] border border-[#191A23] shadow-[0_5px_0_#191A23] p-8 sm:p-10 lg:p-[40px_60px] transition-all duration-300 ${
                  isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3] hover:bg-white"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => toggleStep(index)}
                >
                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                    <span className="text-[30px] sm:text-[40px] lg:text-[60px] font-medium text-[#191A23]">
                      {step.number}
                    </span>
                    <h3 className="text-[18px] sm:text-[22px] lg:text-[30px] font-medium text-[#191A23]">
                      {step.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    aria-label={isOpen ? "Collapse section" : "Expand section"}
                    className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[58px] lg:h-[58px] rounded-full border border-[#191A23] bg-[#F3F3F3] flex items-center justify-center shrink-0 transition-transform duration-200"
                  >
                    <span className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium text-[#191A23] leading-none mb-1">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#191A23]">
                    <p className="text-[16px] sm:text-[18px] text-[#191A23] leading-relaxed">
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
