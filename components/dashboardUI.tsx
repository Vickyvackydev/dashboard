"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Rightside from "./rightside";
import Navbar from "./navbar";
import { useMediaQuery } from "@/hooks";
import { useMode } from "../context/themecontext";

const DashboardUI = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState(false);
  const isMobileScreeen = useMediaQuery("(max-width: 640px)");
  const [rightside, setRightSide] = useState(false);
  // const { toggleMode } = useMode();

  useEffect(() => {
    if (isMobileScreeen) {
      setSidebar(false);
      setRightSide(false);
    } else {
      setSidebar(true);
      setRightSide(true);
    }
  }, [isMobileScreeen]);

  // const toggleMode = () => {
  //   const currentMode = mode === "light" ? "dark" : "light";
  //   setMode(currentMode);

  //   localStorage.setItem("mode", currentMode);
  // };
  return (
    <div className="flex h-screen lg:mr-[20rem] mr-0">
      <div className="lg:flex h-screen w-full">
        {isMobileScreeen ? (
          <div
            onClick={() => {
              setSidebar(false);
            }}
            className={`fixed top-0 left-0 bottom-0 w-full bg-gray-800/60 z-50  ${
              sidebar || rightside ? "" : "hidden"
            }`}
          ></div>
        ) : null}
      </div>
      <Sidebar showSideBar={sidebar} />

      <div className="flex flex-col">
        <div>
          <Navbar
            isSidebarOpen={() => setSidebar((prev) => !prev)}
            isRightSideOpen={() => setRightSide((prev) => !prev)}
          />
        </div>
        <div className="flex mt-24">
          <div>{children}</div>
          <Rightside rightside={rightside} />
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
