import Image from "next/image";
import React from "react";
import { FaChartLine } from "react-icons/fa";

type tradeDetailsArrayProps = {
  label: string;
  amount: string;
  status_img: string;
  percentage: string;
  rise_icon: string;
  trade_icon: string;
};

type tradeDetailsProps = {
  tradeDetails: tradeDetailsArrayProps[];
};
const TradeBox = ({ tradeDetails }: tradeDetailsProps) => {
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:ml-1 ml-3 lg:mt-0 mt-5">
      <div className="lg:hidden flex gap-2 text-text_green">
        <span className="">Analytics</span>
        <span className="mt-1">
          <FaChartLine />
        </span>
        <span className="mt-1 ml-2 text-xs font-medium text-text_black dark:text-text_green">{`${new Date().getDate()} ${new Date().toLocaleString(
          "default",
          {
            month: "long",
          }
        )} ${new Date().getFullYear()}`}</span>
      </div>

      {tradeDetails.map((details, i) => (
        <div
          key={i}
          className="w-[210px] h-[179px] bg-white rounded-2xl p-3 flex flex-col gap-3 dark:bg-slate-950"
        >
          <div className="flex justify-between ">
            <Image src={details.trade_icon} width={30} height={30} alt="icon" />
            <Image
              src={details.status_img}
              width={100}
              height={100}
              alt="icon"
            />
          </div>
          <div className="flex flex-col mt-3">
            <span className="text-[#898989]">{details.label}</span>
            <span className="text-lg font-semibold">{details.amount}</span>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <div
                className={`${
                  details.percentage === "15,5%"
                    ? "bg-rgb_red text-text_error"
                    : "bg-rgb_green text-text_green"
                } rounded-3xl flex p-1`}
              >
                <Image
                  src={details.rise_icon}
                  width={10}
                  height={10}
                  alt="icon"
                />
                <span className="text-xs">{details.percentage}</span>
              </div>
              <span className="text-xs text-[#606060]">vs. previous month</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default TradeBox;
