import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <footer className="w-full bg-white pt-10">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div className="bg-[#191A23] rounded-t-[45px] p-8 sm:p-12 lg:px-[60px] lg:pt-[55px] lg:pb-[50px] text-white">
          {/* Top Row: Logo, Nav, Socials */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10 lg:border-none">
            {/* Logo White */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.svg"
                alt="Positivus"
                width={180}
                height={29}
                className="h-7 sm:h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Navigation Links */}
            <ul className="flex flex-wrap items-center gap-6 sm:gap-10 text-base sm:text-[18px] text-white">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="underline underline-offset-4 hover:text-[#B9FF66] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] rounded-full bg-white text-[#191A23] flex items-center justify-center hover:bg-[#B9FF66] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] rounded-full bg-white text-[#191A23] flex items-center justify-center hover:bg-[#B9FF66] transition-colors"
                aria-label="Facebook"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>

              {/* Twitter / X */}
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] rounded-full bg-white text-[#191A23] flex items-center justify-center hover:bg-[#B9FF66] transition-colors"
                aria-label="Twitter"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Middle Row: Contact Info & Newsletter Form */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 my-10 lg:my-14">
            {/* Contact Details */}
            <div className="flex flex-col items-start gap-5">
              <span className="bg-[#B9FF66] text-[#191A23] px-2 py-0.5 rounded-[7px] text-lg sm:text-[20px] font-medium inline-block">
                Contact us:
              </span>
              <p className="text-base sm:text-[18px] text-white">
                Email: info@positivus.com
              </p>
              <p className="text-base sm:text-[18px] text-white">
                Phone: 555-567-8901
              </p>
              <p className="text-base sm:text-[18px] text-white leading-relaxed">
                Address: 1234 Main St<br />
                Moonstone City, Stardust State 12345
              </p>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="w-full lg:max-w-[634px] bg-[#292A32] rounded-[14px] p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white rounded-[14px] px-6 py-4 text-base sm:text-[18px] text-white placeholder-white/60 focus:outline-none focus:border-[#B9FF66] transition-colors"
              />
              <button
                type="button"
                className="w-full sm:w-auto shrink-0 bg-[#B9FF66] text-[#191A23] px-8 py-4 rounded-[14px] text-base sm:text-[20px] font-medium hover:bg-white transition-colors cursor-pointer"
              >
                Subscribe to news
              </button>
            </div>
          </div>

          {/* Bottom Row: Legal / Copyright */}
          <div className="border-t border-white/20 pt-8 sm:pt-12 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-[18px] text-white/80 gap-4">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <Link
              href="#privacy"
              className="underline underline-offset-4 hover:text-[#B9FF66] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

