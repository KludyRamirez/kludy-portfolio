import React from "react";
import bpiaia from "../assets/images/bpiaia-logo.png";
import aia from "../assets/images/aia.png";
import mlac from "../assets/images/mlac.png";
import osa from "../assets/images/osalogo.jpg";
import chatapp from "../assets/images/chatapp.svg";
import bananauyu from "../assets/images/bananauyu.png";
import popshop from "../assets/images/popshop.png";
import growthops from "../assets/images/growthops.png";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="flex flex-col justify-start items-start w-[100%] min-h-screen bg-[#f5f4fc]">
      <div className="w-[100%] mt-[166px] px-[200px] py-[100px]">
        <div className="flex flex-col items-center gap-4 w-[100%]">
          <div className="w-[100%] flex justify-center items-center">
            <span className="text-[32px] text-[#0047AB] font-[800]">
              Projects
            </span>
          </div>
          <span className="text-[16px] text-[#0047AB] font-[500] tracking-normal">
            Selected projects that I have been part in the past.
          </span>
          <div className="mt-12 flex-wrap w-[100%] flex justify-start items-start gap-4 px-[164px]">
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={bpiaia} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  BPI-AIA
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://bpi-aia.com.ph/en"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    bpi-aia.com.ph
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={aia} alt="" className="w-[171px] h-[74px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  AIA-PH
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://aia.com.ph/en"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    aia.com.ph
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={aia} alt="" className="w-[171px] h-[74px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  AIA-TH
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://aia.co.th"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    aia.co.th
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={mlac} alt="" className="w-[80px] h-[80px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  MLAC Therapy
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://mlac-homeweb.vercel.app"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    mlac-homeweb.vercel.app
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image
                  src={osa}
                  alt=""
                  className="w-[80px] h-[80px] rounded-[50%]"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  PLV Reprimand Hub
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://plv-osa-reprimand-hub.vercel.app"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    reprimand-hub.vercel.app
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={chatapp} alt="" className="w-[80px] h-[80px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  KludChat Mobile
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://github.com/KludyRamirez/kludyChatApp"
                  target="_blank"
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                      Github Link
                    </span>
                    <BsGithub className="text-[18px] text-[#0047AB]" />
                  </div>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={bananauyu} alt="" className="w-[120px] h-[120px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  BananaUyu App
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://bananauyu.vercel.app/"
                  target="_blank"
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                      bananauyu.vercel.app
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={popshop} alt="" className="w-[120px] h-[120px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  Popshop UI
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://popshop-ph.netlify.app/"
                  target="_blank"
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                      popshop-ph.netlify.app
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={growthops} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[18px] text-[#474747] font-[700] tracking-normal">
                  Technical Assessment
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://techassessmentgrowthops.web.app/"
                  target="_blank"
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                      techassessment.web.app
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
