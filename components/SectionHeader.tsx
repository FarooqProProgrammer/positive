import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-10 md:mb-16 lg:mb-20 ${className}`}
    >
      <div className="inline-flex">
        <h2 className="bg-[#B9FF66] text-[#191A23] px-2 py-0.5 rounded-[7px] text-3xl sm:text-4xl font-medium tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-base sm:text-lg text-[#191A23] max-w-[580px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

