import Image from "next/image";
import React from "react";
import osa from "../assets/images/osalogo.jpg";
import growthopsau from "../assets/images/growthopsau.png";

export default function Filled() {
  return (
    <div className="flex sm:justify-start lg:justify-center w-[100%] sm:h-[100%] lg:h-screen bg-[#0047AB] sm:px-[20px] lg:px-[200px] sm:py-[80px] lg:py-[180px] gap-[100px] sm:flex-wrap">
      <div className="sm:w-[100%] lg:w-[36%] h-[100%]">
        <div className="flex flex-col gap-4">
          <span className="text-[64px] font-[800] text-[#FBEC5D]">
            Over the years,
          </span>
          <div className="flex justify-start items center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 text-[17px] font-[400] text-[white] leading-loose tracking-normal">
                <span>
                  I developed and optimized web applications, focusing on
                  creating user-friendly interfaces and enhancing user
                  interaction. Using modern technologies, I streamlined
                  front-end components and API requests, ensuring efficient and
                  effective performance.
                </span>
                <span>
                  I also led code review processes, implemented CI/CD pipelines
                  for automated deployment, and collaborated with diverse teams
                  to enhance both technical and interpersonal skills.
                </span>
                <span>
                  In addition, I contributed to designing and maintaining
                  various websites, managing development workflows, and creating
                  comprehensive software documentation.
                </span>
                <span>
                  To end, I worked closely with cross-functional teams to
                  deliver high-quality code and components, demonstrating a
                  commitment to excellence and innovation. My efforts were
                  recognized with multiple awards for outstanding performance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-start lg:justify-center items-center sm:w-[100%] lg:w-[58%] h-[100%] sm:gap-16 lg:gap-4 sm:flex-wrap">
        <div className="sm:w-[100%] lg:w-[25%] sm:h-[fit-content] lg:h-[100%]">
          <div className="flex flex-col justify-end items-center w-[100%] sm:h-[30%] h-[46%]">
            <div className="border-[1px] p-4">
              <span className="text-[40px] text-[white] font-[700]">
                Freelance
              </span>
            </div>
            <div className="w-[12px] h-[12px] bg-[white] rounded-[50%]"></div>
            <div className="w-[2px] sm:h-[60px] lg:h-[30%] bg-[white]"></div>
          </div>
          <div className="flex justify-center items-center w-[100%] sm:h-[50px] lg:h-[8%]">
            <div className="bg-[white] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-start w-[100%] sm:h-[fit-content] h-[46%] mt-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Freelance
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Apr 2021 - Jun 2023
            </span>
          </div>
        </div>
        <div className="sm:w-[100%] lg:w-[25%] sm:h-[fit-content] lg:h-[100%]">
          <div className="flex flex-col justify-end items-start w-[100%] sm:h-[30%] h-[46%] mb-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Web Dev Intern
            </span>
            <span className="text-[15px] text-[white] tracking-normal">
              GrowthOps
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Jun 2023 - Oct 2023
            </span>
          </div>
          <div className="flex justify-center items-center w-[100%] sm:h-[50px] lg:h-[8%]">
            <div className="bg-[#FAFA33] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-center w-[100%] sm:h-[30%] h-[46%]">
            <div className="w-[2px] sm:h-[60px] lg:h-[30%] bg-[#FAFA33]"></div>
            <div className="w-[12px] h-[12px] bg-[#FAFA33] rounded-[50%]"></div>
            <div className="border-[1px] border-[#FAFA33] p-6">
              <Image src={growthopsau} alt="" className="w-[80px] h-[80px]" />
            </div>
          </div>
        </div>
        <div className="sm:w-[100%] lg:w-[25%] sm:h-[fit-content] lg:h-[100%]">
          <div className="flex flex-col justify-end items-center w-[100%] sm:h-[30%] h-[46%]">
            <div className="border-[1px] border-[#FAFA33] p-6">
              <Image src={growthopsau} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div className="w-[12px] h-[12px] bg-[#fdda0d] rounded-[50%]"></div>
            <div className="w-[2px] sm:h-[60px] lg:h-[30%] bg-[#fdda0d]"></div>
          </div>
          <div className="flex justify-center items-center w-[100%] sm:h-[50px] lg:h-[8%]">
            <div className="bg-[#fdda0d] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-start w-[100%] sm:h-[fit-content] h-[46%] mt-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Junior Web Developer
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Oct 2023 - Nov 2023
            </span>
          </div>
        </div>
        <div className="sm:w-[100%] lg:w-[25%] sm:h-[fit-content] lg:h-[100%]">
          <div className="flex flex-col justify-end items-start w-[100%] sm:h-[30%] h-[46%] mb-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Full Stack Developer
            </span>
            <span className="text-[15px] text-[white] tracking-normal">
              PLV-OSA
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Jan 2024 - Jun 2024
            </span>
          </div>
          <div className="flex justify-center items-center w-[100%] sm:h-[50px] lg:h-[8%]">
            <div className="bg-[#FFA500] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-center w-[100%] sm:h-[30%] h-[46%]">
            <div className="w-[2px] sm:h-[60px] lg:h-[30%] bg-[#FFA500]"></div>
            <div className="w-[12px] h-[12px] bg-[#FFA500] rounded-[50%]"></div>
            <div className="border-[1px] border-[#FFA500] p-6">
              <Image src={growthopsau} alt="" className="w-[80px] h-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
