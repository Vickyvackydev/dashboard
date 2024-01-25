"use client";
import { sideBarLists } from "@/constants";
import { useMediaQuery } from "@/hooks";
import { LIGHT, LOG_OUT, MOON, PUSH, SETTINGS } from "@/public";
import { Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

const lastIcons = [
  {
    id: 1,
    hover_name: "next",
    icon: PUSH,
  },
  {
    id: 2,
    hover_name: "settings",
    icon: SETTINGS,
  },
  {
    id: 3,
    hover_name: "Log out",
    icon: LOG_OUT,
  },
];

const Sidebar = ({
  showSideBar,
}: {
  showSideBar: boolean;
  toggleMode: any;
}) => {
  const [clicked, setClicked] = useState(0);
  const [hover, setHover] = useState<boolean | number>(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const isMobileScreeen = useMediaQuery("(max-width: 600px)");

  useEffect(() => setMounted(true), []);

  return (
    <Transition
      as={"div"}
      className={`bg-lighter_blue h-screen lg:fixed absolute w-[80px] border-r-2 dark:border-text_black left-0
      z-50 dark:bg-text_black`}
      show={showSideBar}
      enter="transition-all ease-in duration-500"
      enterFrom="transform -translate-x-full"
      enterTo="transform -translate-x-0"
      leave="transition-all ease-out duration-500"
      leaveFrom="transform -translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <main>
        <Link href="">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="mt-6 ml-4"
          />
        </Link>
        <div className="lg:max-h-[500px] max-h-[700px] overflow-y-scroll">
          <div className="mt-6">
            {sideBarLists.map((lists) => (
              <div key={lists.id}>
                <div
                  className={`mb-6 ml-6 cursor-pointer ${
                    clicked === lists.id
                      ? "border-r-4 border-border_bg dark:border-text_green rounded"
                      : ""
                  } `}
                  onClick={() => {
                    setClicked(lists.id);
                  }}
                  onMouseEnter={() => setHover(lists.id)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Image
                    src={lists.icon}
                    width={24}
                    height={24}
                    alt="lists icons"
                  />
                </div>
                {hover === lists.id && (
                  <span className="absolute  ml-6 lg:block hidden mb-10 mt-4 bg-white  rounded-xl  dark:text-text_black dark:bg-text_green px-3">
                    {lists.hover_name}
                  </span>
                )}
              </div>
            ))}

            {/* toggle button */}

            <div
              className="bg-white rounded-3xl h-[88px] w-[46px] ml-4 mt-7 flex flex-col gap-5 pl-[0.6rem] pt-2 pb-4 dark:bg-slate-950"
              // onClick={handleToggle}
            >
              <Image
                src={LIGHT}
                width={24}
                height={24}
                alt="light icon"
                className={` ${
                  resolvedTheme === "light" ? "bg-active_mode" : ""
                } rounded-full cursor-pointer`}
                onClick={() => setTheme("light")}
              />
              {resolvedTheme === "dark" ? (
                <span
                  className={` ${
                    resolvedTheme === "dark" ? "bg-active_mode" : ""
                  } rounded-full w-6 h-6 p-1 text-white flex justify-center items-center cursor-pointer`}
                >
                  <FaMoon />
                </span>
              ) : (
                <Image
                  src={MOON}
                  width={24}
                  height={24}
                  alt="moon icon"
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer"
                />
              )}
            </div>

            {/* last icons */}

            <div className="mt-20">
              {lastIcons.map((item) => (
                <div
                  className={`mb-6 ml-6 cursor-pointer ${
                    clicked === item.icon
                      ? "border-r-4 border-border_bg dark:border-text_green rounded"
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => setClicked(item.icon)}
                >
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt="last icons"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Transition>
  );
};

export default Sidebar;
