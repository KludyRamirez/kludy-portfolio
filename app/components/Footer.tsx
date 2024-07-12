import React from "react";
import {
  BsArrowUpRight,
  BsArrowUpRightSquare,
  BsEnvelopeAtFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center w-[100%] h-screen bg-[#191970]">
      <div className="w-[100%] h-[624px] px-[220px] pt-[120px] pb-[100px]">
        <div className="flex flex-col w-[100%] h-[100%]">
          <div className="w-[100%] flex justify-start items-start gap-16 border-b-[1px] border-[#f9f9f9] pb-[160px]">
            <div className="flex flex-col justify-start gap-8 w-[35%] text-[white] font-[400] tracking-normal">
              <div className="flex justify-start items-center gap-4 tracking-[0.3em] text-[20px]">
                <span>Connect with me</span>
                <BsArrowUpRightSquare className="text-[24px]" />
              </div>
              <a
                className="underline-none"
                href="https://www.linkedin.com/in/kludyramirez/"
                target="_blank"
              >
                <div className="text-[20px] flex items-center justify-start gap-4 cursor-pointer">
                  <BsLinkedin className="text-[24px]" />
                  <span className="hover:underline">kludyramirez</span>
                </div>
              </a>
              <a
                className="underline-none"
                href="mailto:ramirezkludy23@gmail.com"
                target="_blank"
              >
                <div className="text-[20px] flex items-center justify-start gap-4 cursor-pointer">
                  <BsEnvelopeAtFill className="text-[24px]" />
                  <span className="hover:underline">ramirezkludy23</span>
                </div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-8 w-[35%] text-[white] font-[400] tracking-normal">
              <div className="text-[20px] text-[#191970] flex items-center justify-start gap-4 cursor-pointer">
                <span className="hover:underline">My summary</span>
                <BsLinkedin className="text-[24px]" />
              </div>
              <a
                className="underline-none"
                href="https://www.facebook.com/kludy.ramirez19"
                target="_blank"
              >
                <div className="text-[20px] flex items-center justify-start gap-4 cursor-pointer">
                  <span className="hover:underline">My Facebook</span>
                </div>
              </a>
              <a
                className="underline-none"
                href="https://www.instagram.com/kludengg"
                target="_blank"
              >
                <div className="text-[20px] flex items-center justify-start gap-4 cursor-pointer">
                  <span className="hover:underline">My Instagram</span>
                </div>
              </a>
              <a
                className="underline-none"
                href="https://github.com/KludyRamirez"
                target="_blank"
              >
                <div className="text-[20px] flex items-center justify-start gap-4 cursor-pointer">
                  <span className="hover:underline">My GitHub</span>
                  <BsGithub className="text-[24px]" />
                </div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-8 w-[35%] text-[white] font-[400] tracking-normal">
              <div className="text-[20px] text-[#191970] flex items-center justify-start gap-4 cursor-pointer">
                <span className="hover:underline">My summary</span>
                <BsLinkedin className="text-[24px]" />
              </div>
              <Link
                className="underline-none"
                target="_blank"
                href="/ramirezkludy-cv.pdf"
              >
                <div className="text-[20px] flex items-center justify-start gap-4 cursor-pointer">
                  <span className="hover:underline">My Resume</span>
                  <BsArrowUpRight className="text-[24px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-between items-center pt-[128px]">
          <div className="flex justify-start items-center gap-4">
            <FaRegCopyright className="text-[24px] text-white" />
            <span className="text-[20px] text-white tracking-normal">
              Kludy Ramirez 2024
            </span>
          </div>
          <div className="flex justify-start items-center gap-6">
            <span className="text-[20px] text-white tracking-normal">
              To God be all the Glory.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
