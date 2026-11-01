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
    <section id="about" data-sc-act="flow" className="w-full py-12 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0">
        <div data-sc-in>
          <SectionHeader
            title="Team"
            description="Meet the skilled and experienced team behind our successful digital marketing strategies"
          />
        </div>

        <div
          data-sc-in
          data-sc-stagger="70"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {members.map((member) => (
            <div
              key={member.id}
              data-sc-tilt="4"
              data-sc-spotlight
              className="bg-white rounded-[45px] border border-[#191A23] shadow-[0_5px_0_#191A23] p-8 sm:p-9 flex flex-col justify-between relative transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Header: Photo, Name, Role, LinkedIn */}
                <div className="flex items-start justify-between pb-7 border-b border-[#191A23] relative">
                  <div className="flex items-center gap-5">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden relative shrink-0 border border-[#191A23] bg-[#B9FF66]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[20px] font-medium text-[#191A23]">
                        {member.name}
                      </h4>
                      <p className="text-[16px] text-[#191A23] font-normal">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[34px] h-[34px] rounded-full bg-[#191A23] flex items-center justify-center shrink-0 hover:bg-[#B9FF66] transition-colors group"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#B9FF66] group-hover:text-[#191A23] transition-colors fill-current"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                    </svg>
                  </Link>
                </div>

                {/* Bio text */}
                <p className="text-[16px] sm:text-[18px] text-[#191A23] leading-relaxed pt-7">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Team Button */}
        <div data-sc-in className="flex justify-end mt-10">
          <Link
            href="#contact"
            data-sc-magnet="0.2"
            className="w-full sm:w-auto inline-block text-center bg-[#191A23] text-white px-[45px] py-[20px] rounded-[14px] text-[18px] sm:text-[20px] font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 active:scale-95 shadow-[0_4px_0_#191A23]"
          >
            See all team
          </Link>
        </div>
      </div>
    </section>
  );
}
