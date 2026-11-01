import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full pt-4 md:pt-8 pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="flex flex-col items-start order-1">
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
              className="w-full sm:w-auto inline-block text-center bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[20px] font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 active:scale-95 order-4"
            >
              Book a consultation
            </Link>
          </div>

          {/* Desktop Illustration (right column) */}
          <div className="hidden lg:flex justify-end items-center order-2">
            <Image
              src="/images/hero-illustration.svg"
              alt="Digital Marketing Navigation Illustration"
              width={600}
              height={515}
              className="w-full max-w-[600px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

