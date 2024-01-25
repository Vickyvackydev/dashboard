"use client";
import { progressDetails } from "@/constants";
import React, { useState } from "react";

const Platforms = () => {
  const getColor = (progress: number) => {
    if (progress === 70) {
      return "bg-[#6160DC]";
    } else if (progress === 20) {
      return "bg-[#54C5EB]";
    } else if (progress === 50) {
      return "bg-[#FFB74A]";
    } else if (progress === 40) {
      return "bg-[#ED544E]";
    }
  };

  return (
    <main className="mt-4 bg-white lg:max-w-[435px] max-w-[300px] rounded-3xl h-[380px] py-4 px-4 overflow-x-scroll lg:ml-0 ml-2 dark:bg-slate-950 ">
      <div className="flex justify-between">
        <span className="font-semibold text-text_black dark:text-white">
          Top Platform
        </span>
        <span className="text-text_green font-medium">See all</span>
      </div>
      <div className="flex flex-col gap-9 max-h-[300px] overflow-y-scroll">
        {progressDetails.map((details) => (
          <div key={details.id}>
            <div className="flex gap-3 flex-col mt-4">
              <span className="font-semibold text-text_black dark:text-white">
                {details.label}
              </span>
              <div className="w-full h-[10px] rounded-xl bg-[#F5F5F5] dark:bg-text_black">
                <div
                  className={`h-full rounded-xl  transition-all duration-75 ease-out ${getColor(
                    details.percent
                  )}`}
                  style={{
                    width: details.percent,
                  }}
                ></div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-[400] text-sm text-neutral">
                    {" "}
                    {details.amount}
                  </span>
                  <span className="font-[400] text-xs text-neutral">{`+${details.percent}%`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Platforms;
