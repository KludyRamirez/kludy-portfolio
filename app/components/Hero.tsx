"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import hero from "../assets/images/hero.jpg";
import {
  BsArrowUpRight,
  BsFacebook,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import Link from "next/link";
import klogo from "../assets/images/klogo.png";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="w-[100%] sm:h-[100%] lg:h-screen">
      <div className="w-[100%] h-[fit-content] flex flex-col sm:bg-herobgsm md:bg-herobgsm lg:bg-herobg pb-[90px]">
        <div className="lg:fixed sm:px-[20px] md:px-[40px] lg:px-[97px] sm:pt-4 lg:h-[180px] flex items-center justify-between w-[100%] z-20">
          <Image
            src={klogo}
            alt=""
            className="w-[80px] h-[80px] rounded-[50%]"
          />
          <div
            onClick={toggleMenuButton}
            className="cursor-pointer mt-[18px] flex flex-col items-end w-[100px] h-[40px] gap-4"
          >
            <div className="w-[45px] h-[2px] sm:bg-[#FBEC5D] bg-[#0047AB]"></div>
            <div className="w-[33px] h-[2px] sm:bg-[#FBEC5D] bg-[#0047AB]"></div>
          </div>
          {isMenuOpen ? (
            <div
              ref={menuRef}
              className="absolute fixed sm:top-0 sm:right-0 sm:w-screen sm:h-screen top-[30px] right-[60px] w-[420px] h-[550px] bg-[white] z-70 pt-8 pb-8 pr-8 pl-12 shadow-sm"
            >
              <div className="flex flex-col items-start justify-start w-[100%] h-[100%] tracking-normal gap-4">
                <div className="flex w-[100%] justify-end items-center">
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-[8px] mr-[2px] cursor-pointer flex flex-col items-end w-[100px] h-[40px] gap-4 text-[48px] text-[#0047AB]"
                  >
                    <div className="mt-[18px] w-[45px] h-[2px] bg-[#0047AB] transform rotate-[45deg]"></div>
                    <div className="mt-[-18px] w-[45px] h-[2px] bg-[#0047AB] transform rotate-[-45deg]"></div>
                  </div>
                </div>
                <div className="w-[100%] flex flex-col items-start gap-4">
                  <Link
                    className="underline-none"
                    target="_blank"
                    href="/ramirezkludy-cv.pdf"
                  >
                    <div className="w-[100%] flex justify-start items-center gap-4">
                      <span className="text-[24px] text-[400] text-[#0047AB]">
                        My Resume
                      </span>
                      <BsArrowUpRight className="text-[24px] text-[#0047AB]" />
                    </div>
                  </Link>
                  <a
                    className="underline-none"
                    href="mailto:ramirezkludy23@gmail.com"
                    target="_blank"
                  >
                    <div className="w-[100%] flex justify-start items-center gap-4">
                      <span className="text-[24px] text-[400] text-[#0047AB]">
                        My Email
                      </span>
                      <BsArrowUpRight className="text-[24px] text-[#0047AB]" />
                    </div>
                  </a>
                </div>
                <div className="w-[100%] flex justify-between items-end pt-[240px]">
                  <div className="flex justify-start items-center gap-8">
                    <a
                      className="underline-none"
                      href="https://www.facebook.com/kludy.ramirez19"
                      target="_blank"
                    >
                      <div className="w-[100%] flex justify-strt items-center">
                        <BsFacebook className="text-[32px] text-[#0047AB]" />
                      </div>
                    </a>
                    <a
                      className="underline-none"
                      href="https://www.instagram.com/kludengg"
                      target="_blank"
                    >
                      <div className="w-[100%] flex justify-start items-center">
                        <BsInstagram className="text-[32px] text-[#0047AB]" />
                      </div>
                    </a>
                    <a
                      className="underline-none"
                      href="https://github.com/KludyRamirez"
                      target="_blank"
                    >
                      <div className="w-[100%] flex justify-start items-center">
                        <BsGithub className="text-[32px] text-[#0047AB]" />
                      </div>
                    </a>
                  </div>
                  <div className="bg-[#0047AB] rounded-[4px] mr-4 ">
                    <span className="text-[24px] text-[white] p-4 font-[700]">
                      Jesus
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="sm:mt-[100px] md:mt-[100px] lg:mt-[240px] h-[370px] sm:h-[100%] sm:px-[20px] md:px-[20px] lg:px-[210px] flex justify-between items-center flex-wrap sm:gap-12">
          <div className="flex flex-col w-[620px] h-[100%] gap-8 lg:relative flex-wrap">
            <span className="text-[#FBEC5D] sm:text-[48px] md:text-[48px] lg:text-[72px] font-[800] sm:leading-normal md:leading-normal lg:leading-[80px] sm:mt-[0px] md:mt-[0px] lg:mt-[10px]">
              Full Stack Developer.
            </span>
            <span className="text-[white] text-[20px] font-[400] leading-loose mt-[-10px] tracking-normal">
              I enjoy building robust and scalable frontend and backend
              solutions that offer excellent user experiences.
            </span>
            <svg
              className="absolute top-[-60px] left-[-316px]"
              xmlns="http://www.w3.org/2000/svg"
              width="420"
              height="870"
              viewBox="0 0 410 1029"
              id="sauce-drip-outline"
              data-shape="true"
            >
              <path
                fill="none"
                stroke="#ccf381"
                stroke-miterlimit="50"
                d="M-595.702 68.801c170.37-196.112 467.886-203.922 648.382-23.426 118.036 118.036 155.527 286.059 112.51 435.858-4.761 16.58-12.01 32.283-19.316 47.909a138.955 138.955 0 00-9.03 25.534c-11.945 47.534.67 99.913 37.845 137.087 24.143 24.144 54.677 37.886 86.17 41.312 5.473.626 11.028.919 16.625.918 32.33 3.426 63.742 17.627 88.47 42.354 61.444 61.445 57.39 163.708-12.16 219.767-51.833 41.779-127.42 43.175-180.571 3.087-34.726-26.19-54.364-63.667-58.474-102.473 0-5.596-.293-11.151-.92-16.624-3.425-31.494-17.166-62.028-41.31-86.172-37.174-37.174-89.555-49.788-137.088-37.841a140.596 140.596 0 00-25.545 9.04c-15.375 7.181-30.8 14.359-47.102 19.074-158.488 45.834-337.525 1.47-456.231-133.131-145.451-164.927-146.471-416.267-2.255-582.273zm477.57 432.312c78.526-78.524 78.527-206.402 0-284.928-78.582-78.583-206.402-78.525-284.927 0-78.583 78.583-78.583 206.345 0 284.928 78.526 78.526 206.345 78.583 284.928 0z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col w-[548px] h-[100%] lg:relative sm:items-center">
            <div className="z-10 lg:absolute top-[-80px] left-0 sm:w-[200px] sm:h-[200px] lg:w-[300px] shadow-sm overflow:hidden sm:border-[1px] sm:p-2">
              <Image
                src={hero}
                alt=""
                className="w-[100%] sm:h-[100%] sm:object-cover"
              />
            </div>

            <div className="mt-[-26px] border-[1px] border-white w-[380px] h-[420px] lg:relative sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="380"
                height="380"
                viewBox="0 0 523 214"
                data-shape="true"
                aria-hidden="true"
                id="cs-pattern-right"
                className="lg:absolute top-[60px] left-[80px]"
              >
                <path
                  fill="#4831d4"
                  d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="380"
                height="380"
                viewBox="0 0 523 214"
                data-shape="true"
                aria-hidden="true"
                id="cs-pattern-right"
                className="absolute top-[-220px] left-[-326px]"
              >
                <path
                  fill="#ffffff"
                  d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="380"
                height="380"
                viewBox="0 0 523 214"
                data-shape="true"
                aria-hidden="true"
                id="cs-pattern-right"
                className="absolute top-[-220px] left-[-326px]"
              >
                <path
                  fill="none"
                  stroke="#ccf381"
                  stroke-miterlimit="50"
                  stroke-width="2"
                  d="M2.114 541.705v0l-.56 22.258v0l22.258-.561v0l-.56 22.259v0l22.258-.56v0l-.56 22.258v0l22.258-.56v0l-.559 22.26v0l22.26-.56v0"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:pt-14 flex justify-start itens-center gap-12 w-[100%] sm:px-[20px] md:px-[20px] lg:px-[210px] flex-wrap">
          <div className="w-[300px] text-[17px] text-[#FBEC5D] font-[400] tracking-normal">
            Proficient in enhancing interfaces with design systems and UI
            engineering.
          </div>
          <div className="w-[300px] text-[17px] text-[#FBEC5D] font-[400] tracking-normal">
            Demonstrated success in creating and maintaining products for
            clients worldwide.
          </div>
        </div>
      </div>
    </div>
  );
}
