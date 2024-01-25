"use client";
import { ARROW_DOWN } from "@/public";
import Image from "next/image";
import React, { useState } from "react";
import TableComponent from "./Table/tableComponent";
import BarChart from "./barchar";
import { barChartData, barChartData_2 } from "@/constants";
import { useTheme } from "next-themes";
import { FaArrowDown } from "react-icons/fa";

const moment = ["weekly", "daily", "monthly"];
const Hero = () => {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(
    "monthly"
  );
  const [drop_down, setDrop_down] = useState(false);
  const { resolvedTheme } = useTheme();
  const [userData, setUserData] = useState({
    labels:
      selectedSeason === "weekly"
        ? barChartData.map((data) => data.week)
        : selectedSeason === "daily"
        ? barChartData.map((data) => data.day)
        : selectedSeason === "monthly"
        ? barChartData.map((data) => data.month)
        : barChartData.map((data) => data.month),
    datasets: [
      {
        label: "Chart Data",
        data: barChartData_2.map((data) => data.price_range),
        backgroundColor: "rgba(52, 202, 165, 0.1)",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: 10,
        hoverBackgroundColor: [
          "rgba(52, 202, 165, 0.7)", // Starting color (semi-transparent)
          "rgba(52, 202, 165, 0.3)", // Ending color (semi-transparent)
        ],
      },
    ],
  });

  const handleSelected = (season: string) => {
    setSelectedSeason(season);
  };
  return (
    <section>
      <div className="lg:max-w-[806px] max-w-[400px]  lg:h-[390px] h-fit lg:px-6 px-2 bg-white rounded-2xl py-3 border border-border_color relative dark:bg-slate-950 dark:border-none ">
        <div className="flex justify-between">
          <span className="mt-1 text-text_black font-semibold lg:text-lg text-sm dark:text-white">
            Sales Trends
          </span>
          <div className="flex gap-3">
            <span className="mt-1 text-text_gray font-medium lg:text-lg text-sm  dark:text-text_green">
              Sort by:
            </span>
            <div
              className="border rounded-3xl flex gap-4 lg:px-3 px-2 py-1 items-center cursor-pointer dark:border-text_green"
              onClick={() => setDrop_down((prev) => !prev)}
            >
              <span className="text-sm">{selectedSeason}</span>
              {resolvedTheme === "dark" ? (
                <span className="text-white">
                  <FaArrowDown />
                </span>
              ) : (
                <Image
                  src={ARROW_DOWN}
                  width={10}
                  height={10}
                  alt="arrow_down"
                />
              )}
            </div>
            {drop_down && (
              <div className="absolute flex flex-col gap-1 top-10 right-7 bg-white shadow-md rounded-lg px-1 py-1 dark:bg-text_gray">
                {moment.map((momt) => (
                  <span
                    key={momt}
                    className="hover:bg-rgb_green px-4 text-text_black rounded-lg cursor-pointer dark:text-white"
                    onClick={() => {
                      handleSelected(momt);
                      setDrop_down(false);
                    }}
                  >
                    {momt}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <BarChart chartData={userData} />
      </div>
      <div className="lg:max-w-full max-w-[340px] overflow-x-scroll">
        <TableComponent />
      </div>
    </section>
  );
};

export default Hero;
