import React from "react";
import skillfront from "../assets/images/skillfront.png";
import ociaipro from "../assets/images/ociaipro.png";
import ociaiassoc from "../assets/images/ociaiassoc.png";
import ocidata from "../assets/images/ocidata.png";
import ocifound from "../assets/images/ocifound.png";
import introcybersec from "../assets/images/introcybersec.png";
import javascriptone from "../assets/images/javascriptone.png";
import javascripttwo from "../assets/images/javascripttwo.png";
import pythonone from "../assets/images/pythonone.png";
import pythontwo from "../assets/images/pythontwo.png";
import icip from "../assets/images/icip.png";
import ofsa from "../assets/images/ofsa.png";
import udemy from "../assets/images/udemy.png";
import ace from "../assets/images/ace.png";
import microsoft from "../assets/images/microsoft.png";
import Image from "next/image";

export default function Certifications() {
  return (
    <div className="flex flex-col justify-start items-start w-[100%] min-h-screen bg-[#f5f4fc]">
      <div className="w-[100%] sm:mt-[40px] lg:mt-[166px] sm:px-[20px] lg:px-[200px] pt-[50px] mb-[100px]">
        <div className="flex flex-col items-center gap-4 w-[100%]">
          <div className="w-[100%] flex justify-center items-center">
            <span className="text-[32px] text-[#0047AB] font-[800]">
              Certifications
            </span>
          </div>
          <span className="text-[16px] text-[#0047AB] font-[500] tracking-normal">
            Certifications I gathered from past years.
          </span>

          <div className="mt-12 flex-wrap w-[100%] flex justify-start items-start gap-4 sm:px-[20px] lg:px-[164px]">
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={microsoft} alt="" className="w-[300px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Security, Compliance, and Identity Fundamentals
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://learn.microsoft.com/en-us/users/kludyramirez-9112/credentials/974ee59fb18f9cc8?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.microsoft.com
                  </span>
                </a>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ace} alt="" className="w-[160px] h-[160px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Multicloud Network Associate
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.credly.com/badges/e8da8120-ace2-42a6-96fc-d5ca59272370/linked_in_profile"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    credly.com
                  </span>
                </a>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ociaipro} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  OCI 2024 Generative AI Certified Professional
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=76E311E22A9F506E15C9E2E7F098394A10A3CAE03705998B08EEE1E644E67C68"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.oracle.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ociaiassoc} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  OCI 2023 AI Certified Foundations Associate
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=3557639427BF6F7E34E0D16F03B6AECA77B28C750D231B26512FC7FB00236070"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.oracle.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ocidata} alt="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  OCI Data Management 2023 Certified Foundations Associate
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=E38C16DFB5DA8B0A0EA4BA0698082A79A2B06C6534063349FFA4B697DA149CF4"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.oracle.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ocifound} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Oracle Cloud Infrastructure 2023 Certified Foundations
                  Associate
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=12C5A88AE64C80594163949821AF1ED5DDB039D5A90056A114D4E13097FEF707"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.oracle.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ocifound} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Oracle Cloud Infrastructure 2023 Certified Foundations
                  Associate
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=12C5A88AE64C80594163949821AF1ED5DDB039D5A90056A114D4E13097FEF707"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.oracle.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image
                  src={introcybersec}
                  alt=""
                  className="w-[160px] [160px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Introduction to Cybersecurity
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.credly.com/badges/9104605d-d3d8-4bdc-bf76-68ec409bbde5/linked_in_profile"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    credly.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image
                  src={javascriptone}
                  alt=""
                  className="w-[160px] [160px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  JavaScript Essentials 1
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.credly.com/badges/9104605d-d3d8-4bdc-bf76-68ec409bbde5/linked_in_profile"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    credly.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image
                  src={javascripttwo}
                  alt=""
                  className="w-[160px] [160px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  JavaScript Essentials 2
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.credly.com/badges/679303a6-ea28-4c44-af8d-7e3dfd4d63f4/linked_in_profile"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    credly.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={pythonone} alt="" className="w-[160px] [160px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Python Essentials 1
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.credly.com/badges/b9ac665e-6482-4183-b388-6ee2c1426806/linked_in_profile"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    credly.com
                  </span>
                </a>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={pythontwo} alt="" className="w-[160px] [160px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  Python Essentials 2
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.credly.com/badges/b98e0f55-b1cb-441e-9918-8e40a10fce70/linked_in_profile"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    credly.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={icip} alt="" className="w-[160px] [160px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  OPSWAT Introduction to Critical Infrastructure Protection
                  (ICIP)
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://learn.opswatacademy.com/certificate/7e0iDgJ5eQ"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.opswatacademy.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={ofsa} alt="" className="w-[170px] [170px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  OPSWAT File Security Associate (OFSA)
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://learn.opswatacademy.com/certificate/kZ4Z8u64LQ"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    learn.opswatacademy.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={udemy} alt="" className="w-[180px] [180px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  The Complete Cyber Security Course : Hackers Exposed!
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.udemy.com/certificate/UC-39016d8e-60b7-4a00-9b55-95bf161a6b6e/"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    udemy.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={udemy} alt="" className="w-[180px] [180px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  The Complete 2024 Web Development Bootcamp
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.udemy.com/certificate/UC-cc00e318-75ea-4b93-9ffe-ccfea92b2e18/"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    udemy.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={udemy} alt="" className="w-[180px] [180px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  React - The Complete Guide 2024 (incl. Next.js, Redux)
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.udemy.com/certificate/UC-4015dcb4-e736-47a0-b78c-ee63aeb3a4d4/"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    udemy.com
                  </span>
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col w-[365px] h-[300px] bg-[#F9F8FD] rounded-[4px] shadow-bottomShadow hover:transform hover:translate-y-[-3px] hover:shadow-bottomRightShadow">
              <div className="flex justify-center items-center w-[100%] h-[174px]">
                <Image src={skillfront} alt="" className="w-[240px]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1 w-[100%] h-[126px] bg-white rounded-bl-[4px] rounded-br-[4px] p-12">
                <span className="text-[16px] text-[#474747] font-[700] tracking-normal">
                  ISO/IEC 27001 Information Security Associate™
                </span>
                <a
                  className="underline-none hover:underline"
                  href="https://www.skillfront.com/Badges/95465772447866"
                  target="_blank"
                >
                  <span className="text-[17px] text-[#0047AB] font-[500] tracking-normal">
                    skillfront.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
