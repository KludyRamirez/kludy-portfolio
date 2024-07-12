import React from "react";

export default function Filled() {
  return (
    <div className="flex justify-around w-[100%] h-screen bg-[#0047AB] px-[200px] py-[180px]">
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
      <div className="w-[60%] h-[100%]"></div>
    </div>
  );
}
