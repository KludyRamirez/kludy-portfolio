import Image from "next/image";
import React from "react";
import osa from "../assets/images/osalogo.jpg";
import growthopsau from "../assets/images/growthopsau.png";

export default function Filled() {
  return (
    <div className="flex justify-center w-[100%] h-screen bg-[#0047AB] px-[200px] py-[180px] gap-[100px]">
      <div className="w-[36%] h-[100%]">
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
      <div className="flex justify-center items-center w-[58%] h-[100%] gap-4">
        <div className="flex flex-col w-[25%] h-[100%]">
          <div className="flex flex-col justify-end items-center w-[100%] h-[46%]">
            <div className="border-[1px] p-4">
              <span className="text-[40px] text-[white] font-[700]">
                Freelance
              </span>
            </div>
            <div className="w-[12px] h-[12px] bg-[white] rounded-[50%]"></div>
            <div className="w-[2px] h-[30%] bg-[white]"></div>
          </div>
          <div className="flex justify-center items-center w-[100%] h-[8%]">
            <div className="bg-[white] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-start w-[100%] h-[46%] mt-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Freelance
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Apr 2021 - Jun 2023
            </span>
          </div>
        </div>
        <div className="w-[25%] h-[100%]">
          <div className="flex flex-col justify-end items-start w-[100%] h-[46%] mb-4 gap-2">
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
          <div className="flex justify-center items-center w-[100%] h-[8%]">
            <div className="bg-[#FAFA33] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-center w-[100%] h-[46%]">
            <div className="w-[2px] h-[30%] bg-[#FAFA33]"></div>
            <div className="w-[12px] h-[12px] bg-[#FAFA33] rounded-[50%]"></div>
            <div className="border-[1px] border-[#FAFA33] p-6">
              <Image src={growthopsau} alt="" className="w-[80px] h-[80px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[25%] h-[100%]">
          <div className="flex flex-col justify-end items-center w-[100%] h-[46%]">
            <div className="border-[1px] border-[#FDDA0D] p-6">
              <Image src={growthopsau} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div className="w-[12px] h-[12px] bg-[#FDDA0D] rounded-[50%]"></div>
            <div className="w-[2px] h-[30%] bg-[#FDDA0D]"></div>
          </div>
          <div className="flex justify-center items-center w-[100%] h-[8%]">
            <div className="bg-[#FDDA0D] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-start w-[100%] h-[46%] mt-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Junior Web Developer
            </span>
            <span className="text-[15px] text-[white] tracking-normal">
              GrowthOps
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Oct 2023 - Nov 2023
            </span>
          </div>
        </div>
        <div className="w-[25%] h-[100%]">
          <div className="flex flex-col justify-end items-start w-[100%] h-[46%] mb-4 gap-2">
            <span className="text-[16px] text-[white] tracking-normal">
              Full Stack Developer
            </span>
            <span className="text-[15px] text-[white] tracking-normal">
              PLV
            </span>
            <span className="text-[14px] text-[white] tracking-normal">
              Jan 2024 - Jun 2024
            </span>
          </div>
          <div className="flex justify-center items-center w-[100%] h-[8%]">
            <div className="bg-[#FFA500] w-[100%] h-[100%]"></div>
          </div>
          <div className="flex flex-col justify-start items-center w-[100%] h-[46%]">
            <div className="w-[2px] h-[30%] bg-[#FFA500]"></div>
            <div className="w-[12px] h-[12px] bg-[#FFA500] rounded-[50%]"></div>
            <div className="border-[1px] border-[#FFA500] p-4">
              <Image
                src={osa}
                alt=""
                className="w-[80px] h-[80px] rounded-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
