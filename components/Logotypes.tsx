import React from "react";
import Image from "next/image";

export default function Logotypes() {
  const logos = [
    { name: "Amazon", src: "/images/logos/amazon.svg", width: 124, height: 48 },
    { name: "Dribbble", src: "/images/logos/dribbble.svg", width: 126, height: 48 },
    { name: "HubSpot", src: "/images/logos/hubspot.svg", width: 128, height: 48 },
    { name: "Notion", src: "/images/logos/notion.svg", width: 128, height: 48 },
    { name: "Netflix", src: "/images/logos/netflix.svg", width: 125, height: 48 },
    { name: "Zoom", src: "/images/logos/zoom.svg", width: 128, height: 48 },
  ];

  return (
    <section className="w-full py-8 lg:py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div
          data-sc-in
          data-sc-stagger="70"
          className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between items-center gap-8 lg:gap-12"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex justify-center items-center py-2 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="h-9 lg:h-11 w-auto object-contain max-w-[120px] lg:max-w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
