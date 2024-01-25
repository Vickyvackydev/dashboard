"use client";
import { useMediaQuery } from "@/hooks";
import { ARROW_DOWN, CALENDER, NOTIFICATION, PROFILE, SEARCH } from "@/public";
import Image from "next/image";
import React, { useState } from "react";
import Profilemenu from "./profilemenu";
import Link from "next/link";
import {
  FaAngry,
  FaAngular,
  FaBars,
  FaBell,
  FaBook,
  FaCalendar,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaTradeFederation,
  FaTrademark,
} from "react-icons/fa";
import { useTheme } from "next-themes";

type showStateProps = {
  isRightSideOpen: () => void;
  isSidebarOpen: () => void;
};
const Navbar = ({ isSidebarOpen, isRightSideOpen }: showStateProps) => {
  const [date] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <nav className="bg-backgrd lg:w-[94vw] w-full fixed h-[77px] lg:px-7 px-4 pt-4 z-50 lg:right-[-3px] right-0 border-b-2 dark:border-slate-700 dark:bg-text_black ">
      <div className="flex justify-between items-center">
        <Link href="" className="lg:hidden block">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
        </Link>
        <div>
          <span className="text-text_black font-semibold dark:text-text_green">
            Dashboard
          </span>
        </div>
        <div className="flex  gap-5">
          <div className="flex gap-5">
            <div className="w-[30vw] border-2 rounded-3xl lg:flex hidden py-2 bg-white gap-3 px-5 dark:bg-transparent dark:border-text_green">
              <Image src={SEARCH} width={15} height={15} alt="search icon" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-search_text font-[400] text-sm outline-none w-[30vw]"
              />
            </div>
            <div className="lg:flex hidden gap-3">
              {resolvedTheme === "dark" ? (
                <span className="text-text_green mt-4">
                  <FaCalendar />
                </span>
              ) : (
                <Image
                  src={CALENDER}
                  width={19}
                  height={19}
                  alt="calander icon"
                />
              )}

              <span className="mt-[0.8rem] text-sm font-medium text-text_black dark:text-text_green">{`${date.getDate()} ${date.toLocaleString(
                "default",
                {
                  month: "long",
                }
              )} ${date.getFullYear()}`}</span>
            </div>
          </div>
          <div className="lg:flex hidden gap-6 items-center ">
            {resolvedTheme === "dark" ? (
              <div className="flex justify-center item w-10 h-10 rounded-full border text-white pt-[0.6rem] dark:border-text_green cursor-pointer">
                <span className="dark:text-text_green">
                  <FaBell />
                </span>
              </div>
            ) : (
              <div className="cursor-pointer">
                <Image
                  src={NOTIFICATION}
                  width={40}
                  height={40}
                  alt="notication icon"
                />
              </div>
            )}

            <div className="lg:flex hidden gap-3 border rounded-3xl p-1 items-center">
              <div>
                <Image
                  src={PROFILE}
                  width={35}
                  height={35}
                  alt="profile image"
                />
              </div>
              <div
                className="flex flex-col text-left cursor-pointer"
                onClick={() => setProfileModal((prev) => !prev)}
              >
                <span className="text-sm font-[400]">Justin Bergson</span>
                <span className="text-xs text-email_text">
                  Justin@gmail.com
                </span>
              </div>
              <Image src={ARROW_DOWN} width={10} height={10} alt="arrow_down" />
            </div>
            {profileModal && (
              <div className="absolute right-5 bg-white top-[3rem] px-5 py-2 rounded-xl shadow-md dark:bg-text_green dark:hover:bg-transparent dark:hover:border">
                <span className="hover:text-text_green cursor-pointer">
                  Sign out
                </span>
              </div>
            )}
          </div>
          <div className="lg:hidden flex">
            <div className="mt-1" onClick={() => setModal((prev) => !prev)}>
              <Image src={PROFILE} width={35} height={35} alt="profile image" />
            </div>
          </div>

          <div className="mt-2 flex gap-3">
            <div className="lg:hidden block" onClick={() => isSidebarOpen()}>
              <span className="text-3xl text-text_dark_gray">
                <FaBars />
              </span>
            </div>
            <div className="lg:hidden block" onClick={() => isRightSideOpen()}>
              <span className="text-3xl text-text_green">
                {" "}
                <FaChartLine />
              </span>
            </div>
          </div>
        </div>
        {modal && <Profilemenu open={modal} close={() => setModal(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
