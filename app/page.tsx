"use client";

import React, { useRef, useState } from "react";
import Certifications from "./components/Certifications";
import Filled from "./components/Filled";
import Footer from "./components/Footer";
import Headings from "./components/Headings";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useIntersection } from "./hooks/useIntersection";

const sections = [
  { id: "section1", component: Hero },
  { id: "section2", component: Headings },
  { id: "section3", component: Filled },
  { id: "section4", component: Projects },
  { id: "section5", component: Certifications },
];

export default function Home() {
  const sectionRefs = sections.reduce((acc, section) => {
    acc[section.id] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as { [key: string]: React.RefObject<HTMLDivElement> });

  const intersectionStates = sections.reduce((acc, section) => {
    acc[section.id] = useIntersection(sectionRefs[section.id], "-50px");
    return acc;
  }, {} as { [key: string]: boolean });

  const handleClick = (section: keyof typeof sectionRefs) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current!.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-w-screen min-h-screen bg-[#f9f9f9]">
      <div className="flex flex-col items-center justify-start w-[100%] h-[100%] relative">
        <div className="absolute top-[400px] right-[120px] z-80">
          <div className="flex flex-col fixed gap-8 ">
            {sections.map((section, index) => {
              const isIntersecting = intersectionStates[section.id];
              return (
                <div
                  key={index}
                  onClick={() =>
                    handleClick(section.id as keyof typeof sectionRefs)
                  }
                  className={`w-[20px] h-[20px] border-[1px] cursor-pointer z-100 ${
                    isIntersecting
                      ? "rounded-[2px] border-[red] transform rotate-[45deg]"
                      : "rounded-[50%] border-[#5D3FD3]"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
        {sections.map((section, index) => {
          const Component = section.component;
          const isIntersecting = intersectionStates[section.id];

          return (
            <div className="w-[100%]" key={index}>
              <div
                style={{
                  height: "0px",
                  backgroundColor: isIntersecting ? "lightblue" : "lightcoral",
                  transition: "background-color 0.3s",
                }}
              ></div>
              <div
                ref={sectionRefs[section.id]}
                className="w-[100%] z-70"
                id={`referenceDiv${section.id}`}
              >
                <Component />
              </div>
            </div>
          );
        })}
        <div className="w-[100%]" id="footerId">
          <Footer />
        </div>
      </div>
    </main>
  );
}
