"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<"say-hi" | "get-quote">("say-hi");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <SectionHeader
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />

        <div className="bg-[#F3F3F3] rounded-[45px] p-8 sm:p-12 lg:p-[60px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Form Column */}
          <div className="w-full lg:max-w-[556px] z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Radio Inquiry Type Buttons */}
              <div className="flex items-center gap-8 mb-2">
                {/* Say Hi */}
                <label className="flex items-center gap-3 cursor-pointer text-base sm:text-lg text-[#191A23]">
                  <input
                    type="radio"
                    name="inquiry"
                    checked={inquiryType === "say-hi"}
                    onChange={() => setInquiryType("say-hi")}
                    className="sr-only"
                  />
                  <div className="w-7 h-7 rounded-full border border-[#191A23] bg-white flex items-center justify-center">
                    {inquiryType === "say-hi" && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B9FF66]" />
                    )}
                  </div>
                  <span>Say Hi</span>
                </label>

                {/* Get a Quote */}
                <label className="flex items-center gap-3 cursor-pointer text-base sm:text-lg text-[#191A23]">
                  <input
                    type="radio"
                    name="inquiry"
                    checked={inquiryType === "get-quote"}
                    onChange={() => setInquiryType("get-quote")}
                    className="sr-only"
                  />
                  <div className="w-7 h-7 rounded-full border border-[#191A23] bg-white flex items-center justify-center">
                    {inquiryType === "get-quote" && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B9FF66]" />
                    )}
                  </div>
                  <span>Get a Quote</span>
                </label>
              </div>

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-base sm:text-[18px] text-[#191A23] font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  required
                  className="w-full bg-white border border-[#191A23] rounded-[14px] px-6 py-4 text-base sm:text-[18px] text-[#191A23] placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-base sm:text-[18px] text-[#191A23] font-normal"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white border border-[#191A23] rounded-[14px] px-6 py-4 text-base sm:text-[18px] text-[#191A23] placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-base sm:text-[18px] text-[#191A23] font-normal"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full bg-white border border-[#191A23] rounded-[14px] px-6 py-4 text-base sm:text-[18px] text-[#191A23] placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#191A23] text-white py-5 rounded-[14px] text-lg sm:text-[20px] font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 active:scale-98 mt-2 cursor-pointer"
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Illustration Column */}
          <div className="hidden lg:flex justify-end items-center relative w-[500px] h-[550px] -mr-16 pointer-events-none">
            <Image
              src="/images/contact-illustration.svg"
              alt="Contact Us Graphic"
              width={500}
              height={550}
              className="object-contain scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

