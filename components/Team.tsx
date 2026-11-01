import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export default function Team() {
  const members: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO and Founder",
      bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: "/images/team/john.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Director of Operations",
      bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: "/images/team/jane.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: "/images/team/michael.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "PPC Manager",
      bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: "/images/team/emily.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Brian Williams",
      role: "Social Media Specialist",
      bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: "/images/team/brian.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 6,
      name: "Sarah Kim",
      role: "Content Creator",
      bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image: "/images/team/sarah.jpg",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <SectionHeader
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[45px] border border-[#191A23] shadow-[0_5px_0_#191A23] p-8 sm:p-9 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-start justify-between relative">
                  <div className="flex items-center gap-5">
                    {/* Avatar with Signature Positivus Decorative Badge */}
                    <div className="relative w-[85px] h-[85px] sm:w-[95px] sm:h-[95px] shrink-0">
                      {/* Decorative green star backdrop */}
                      <div className="absolute inset-0 bg-[#B9FF66] rounded-full rotate-6 scale-95" />
                      {/* Avatar Image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#191A23]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="flex flex-col">
                      <h4 className="text-xl sm:text-[20px] font-medium text-[#191A23]">
                        {member.name}
                      </h4>
                      <p className="text-sm sm:text-base text-[#191A23]/70 font-normal">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn Icon */}
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[34px] h-[34px] rounded-full bg-[#191A23] text-[#B9FF66] flex items-center justify-center shrink-0 hover:bg-[#B9FF66] hover:text-[#191A23] transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-[#191A23] my-6" />

                {/* Member Bio */}
                <p className="text-[16px] sm:text-[18px] text-[#191A23] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Team Button */}
        <div className="flex justify-end mt-10">
          <Link
            href="#team"
            className="w-full sm:w-auto text-center bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[18px] sm:text-[20px] font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 active:scale-95"
          >
            See all team
          </Link>
        </div>
      </div>
    </section>
  );
}

