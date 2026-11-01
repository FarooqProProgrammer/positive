import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

interface ServiceItem {
  id: number;
  titleLines: string[];
  bgColor: string;
  badgeBgColor: string;
  badgeTextColor: string;
  circleBgColor: string;
  arrowColor: string;
  linkColor: string;
  image: string;
  alt: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 1,
      titleLines: ["Search engine", "optimization"],
      bgColor: "bg-[#F3F3F3]",
      badgeBgColor: "bg-[#B9FF66]",
      badgeTextColor: "text-[#191A23]",
      circleBgColor: "bg-[#191A23]",
      arrowColor: "#B9FF66",
      linkColor: "text-[#191A23]",
      image: "/images/services/seo.svg",
      alt: "Search Engine Optimization Illustration",
    },
    {
      id: 2,
      titleLines: ["Pay-per-click", "advertising"],
      bgColor: "bg-[#B9FF66]",
      badgeBgColor: "bg-white",
      badgeTextColor: "text-[#191A23]",
      circleBgColor: "bg-[#191A23]",
      arrowColor: "#B9FF66",
      linkColor: "text-[#191A23]",
      image: "/images/services/ppc.svg",
      alt: "Pay-Per-Click Advertising Illustration",
    },
    {
      id: 3,
      titleLines: ["Social Media", "Marketing"],
      bgColor: "bg-[#191A23]",
      badgeBgColor: "bg-white",
      badgeTextColor: "text-[#191A23]",
      circleBgColor: "bg-white",
      arrowColor: "#191A23",
      linkColor: "text-white",
      image: "/images/services/social-media.svg",
      alt: "Social Media Marketing Illustration",
    },
    {
      id: 4,
      titleLines: ["Email", "Marketing"],
      bgColor: "bg-[#F3F3F3]",
      badgeBgColor: "bg-[#B9FF66]",
      badgeTextColor: "text-[#191A23]",
      circleBgColor: "bg-[#191A23]",
      arrowColor: "#B9FF66",
      linkColor: "text-[#191A23]",
      image: "/images/services/email-marketing.svg",
      alt: "Email Marketing Illustration",
    },
    {
      id: 5,
      titleLines: ["Content", "Creation"],
      bgColor: "bg-[#B9FF66]",
      badgeBgColor: "bg-white",
      badgeTextColor: "text-[#191A23]",
      circleBgColor: "bg-[#191A23]",
      arrowColor: "#B9FF66",
      linkColor: "text-[#191A23]",
      image: "/images/services/content-creation.svg",
      alt: "Content Creation Illustration",
    },
    {
      id: 6,
      titleLines: ["Analytics and", "Tracking"],
      bgColor: "bg-[#191A23]",
      badgeBgColor: "bg-[#B9FF66]",
      badgeTextColor: "text-[#191A23]",
      circleBgColor: "bg-white",
      arrowColor: "#191A23",
      linkColor: "text-white",
      image: "/images/services/analytics.svg",
      alt: "Analytics and Tracking Illustration",
    },
  ];

  return (
    <section id="services" data-sc-act="flow" className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div data-sc-in>
          <SectionHeader
            title="Services"
            description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          />
        </div>

        <div
          data-sc-in
          data-sc-stagger="80"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <div
              key={service.id}
              data-sc-tilt="5"
              data-sc-spotlight
              className={`${service.bgColor} rounded-[45px] border border-[#191A23] shadow-[0_5px_0_#191A23] p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative transition-transform duration-200 hover:-translate-y-1.5`}
            >
              {/* Text & Link Left Column */}
              <div className="flex flex-col justify-between h-full min-h-[180px] sm:min-h-[210px] z-10">
                <div className="flex flex-col items-start gap-1">
                  {service.titleLines.map((line, idx) => (
                    <span
                      key={idx}
                      className={`${service.badgeBgColor} ${service.badgeTextColor} px-2 py-0.5 rounded-[7px] text-2xl sm:text-[28px] font-medium leading-snug`}
                    >
                      {line}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-4 mt-8 sm:mt-12 focus:outline-none"
                >
                  <span
                    data-sc-magnet="0.2"
                    className={`w-[41px] h-[41px] rounded-full ${service.circleBgColor} flex items-center justify-center transition-transform duration-200 group-hover:rotate-45 shadow-[0_2px_0_#191A23]`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5M15 5H7M15 5V13"
                        stroke={service.arrowColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className={`hidden sm:inline text-[20px] font-normal ${service.linkColor} group-hover:underline underline-offset-4`}
                  >
                    Learn more
                  </span>
                </Link>
              </div>

              {/* Service Illustration Right Column */}
              <div className="w-full sm:w-[210px] h-[170px] flex justify-end items-center self-end sm:self-center z-10">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={210}
                  height={170}
                  className="max-h-[170px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
