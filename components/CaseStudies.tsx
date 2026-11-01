import React from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      metric: "+50%",
      metricLabel: "Website Traffic",
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      metric: "+200%",
      metricLabel: "Organic Search",
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      metric: "+25%",
      metricLabel: "Social Followers",
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section id="cases" data-sc-act="flow" className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div data-sc-in>
          <SectionHeader
            title="Case Studies"
            description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          />
        </div>

        <div
          data-sc-in
          data-sc-tilt="3"
          className="bg-[#191A23] rounded-[45px] p-8 sm:p-14 lg:py-[70px] lg:px-[60px] text-white shadow-[0_6px_0_#B9FF66]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            {cases.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col justify-between ${
                  index === 0
                    ? "pb-8 lg:pb-0 lg:pr-12"
                    : index === 1
                    ? "py-8 lg:py-0 lg:px-12"
                    : "pt-8 lg:pt-0 lg:pl-12"
                }`}
              >
                <div>
                  <div className="inline-block bg-[#B9FF66] text-[#191A23] text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {item.metric} {item.metricLabel}
                  </div>
                  <p className="text-[16px] sm:text-[18px] text-white/90 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-[#B9FF66] text-[18px] sm:text-[20px] font-normal hover:opacity-80 transition-opacity"
                >
                  <span className="group-hover:underline underline-offset-4">
                    Learn more
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      d="M5 15L15 5M15 5H7M15 5V13"
                      stroke="#B9FF66"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
