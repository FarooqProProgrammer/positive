import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section data-sc-act="flow" className="w-full pt-4 md:pt-8 pb-12 lg:pb-16 overflow-hidden relative">
      {/* Background Dimensional Ambient Glow */}
      <div
        data-sc-parallax="0.1"
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#B9FF66]/15 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div data-sc-in className="flex flex-col items-start order-1">
            <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-medium leading-[1.18] sm:leading-[1.24] text-[#191A23]">
              Navigating the digital landscape for success
            </h1>

            {/* Mobile Illustration (appears right after H1 on mobile) */}
            <div className="w-full flex justify-center py-6 lg:hidden order-2">
              <Image
                src="/images/hero-illustration.svg"
                alt="Digital Marketing Navigation Illustration"
                width={500}
                height={400}
                className="w-full max-w-[400px] h-auto object-contain"
                priority
              />
            </div>

            <p className="text-[18px] sm:text-[20px] text-[#191A23] leading-relaxed max-w-[498px] mt-4 lg:mt-9 mb-7 lg:mb-9 order-3">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>

            <Link
              href="#contact"
              data-sc-magnet="0.25"
              className="w-full sm:w-auto inline-block text-center bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[20px] font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 active:scale-95 order-4 shadow-[0_4px_0_#191A23] hover:shadow-[0_2px_0_#191A23]"
            >
              Book a consultation
            </Link>
          </div>

          {/* Desktop Illustration (right column with dimensional planes & interactive tilt) */}
          <div
            data-sc-parallax="-0.15"
            data-sc-tilt="7"
            className="hidden lg:flex justify-end items-center order-2 relative group"
          >
            {/* Floating foreground accent badge */}
            <div
              data-sc-parallax="-0.28"
              className="absolute -top-2 left-6 z-20 bg-white border border-[#191A23] shadow-[0_4px_0_#191A23] rounded-[14px] px-4 py-2 flex items-center gap-2 pointer-events-none transition-transform duration-300 group-hover:scale-105"
            >
              <span className="w-3 h-3 rounded-full bg-[#B9FF66] animate-pulse" />
              <span className="text-[14px] font-semibold text-[#191A23] tracking-wide">+250% Growth</span>
            </div>

            {/* Main Megaphone & Waves Illustration */}
            <Image
              src="/images/hero-illustration.svg"
              alt="Digital Marketing Navigation Illustration"
              width={600}
              height={515}
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-sm transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
