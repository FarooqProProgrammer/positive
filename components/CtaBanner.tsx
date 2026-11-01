import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section data-sc-act="flow" className="w-full py-10 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div
          data-sc-in
          className="bg-[#F3F3F3] rounded-[45px] p-8 sm:p-12 lg:p-[60px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#191A23]/10 shadow-[0_5px_0_#191A23]"
        >
          {/* Left Text & CTA Button */}
          <div className="flex flex-col items-start z-10 max-w-[500px]">
            <h3 className="text-[26px] sm:text-[30px] font-medium text-[#191A23] mb-4 sm:mb-6">
              Let’s make things happen
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#191A23] leading-relaxed mb-6 sm:mb-8">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <Link
              href="#contact"
              data-sc-magnet="0.25"
              className="w-full sm:w-auto inline-block text-center bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[18px] sm:text-[20px] font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 active:scale-95 shadow-[0_4px_0_#191A23]"
            >
              Get your free proposal
            </Link>
          </div>

          {/* Right Illustration with subtle scroll parallax */}
          <div
            data-sc-parallax="-0.1"
            className="hidden lg:flex justify-end items-center relative w-[360px] h-[340px] pointer-events-none"
          >
            <Image
              src="/images/cta-illustration.svg"
              alt="Decorative CTA graphic"
              width={360}
              height={340}
              className="object-contain scale-110 drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
