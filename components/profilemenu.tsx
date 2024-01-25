"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NOTIFICATION, PROFILE } from "@/public";
import { FaBell } from "react-icons/fa";
import { useTheme } from "next-themes";

type Props = {
  open: any;
  close: () => void;
};
const Profilemenu = ({ open, close }: Props) => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="z-10 flex-col absolute right-0 top-[5rem] bg-white shadow-md w-[50%] p-5 rounded-lg dark:bg-text_black">
      <Menu as="div">
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items static>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src={PROFILE}
                className="rounded-full"
                width={80}
                height={80}
                alt="profile Image"
              />

              <p className="font-semibold">Justin Bergson</p>
            </div>

            <div className="flex flex-col gap-3 pt-10 items-start w-full">
              <Menu.Item>
                <Link href={``} className="text-sm">
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={``} className="text-sm">
                  Profile
                </Link>
              </Menu.Item>
            </div>
            <div className="w-full border-t border-nav-border mt-5 pt-5 flex justify-between">
              <Menu.Item>
                <button type="button" className="text-sm">
                  Sign out
                </button>
              </Menu.Item>
              <div>
                {resolvedTheme === "dark" ? (
                  <div className="flex justify-center item w-10 h-10 rounded-full border text-white pt-[0.6rem] dark:border-text_green">
                    <span className="dark:text-text_green">
                      <FaBell />
                    </span>
                  </div>
                ) : (
                  <div>
                    <Image
                      src={NOTIFICATION}
                      width={40}
                      height={40}
                      alt="notication icon"
                    />
                  </div>
                )}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Profilemenu;
