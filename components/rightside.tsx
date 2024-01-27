import React from "react";
import TradeBox from "./tradeBox";
import { tradeDetails } from "@/constants";
import Platforms from "./platforms";
import { Transition } from "@headlessui/react";

const Rightside = ({ rightside }: { rightside: boolean }) => {
  return (
    <Transition
      className={`flex-none h-full w-60 lg:w-fit fixed lg:static z-[100] lg:z-0 lg:bg-transparent bg-backgrd dark:bg-text_black lg:mr-5 top-0 shadow-md lg:shadow-none left-0`}
      as={"div"}
      show={rightside}
      enter="transition-all ease-in duration-500"
      enterFrom="transform -translate-x-full"
      enterTo="transform -translate-x-0"
      leave="transition-all ease-out duration-900"
      leaveFrom="transform -translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <main className="pr-4 relative pt-2 lg:max-h-full max-h-[700px] lg:overflow-hidden   overflow-y-scroll">
        <div>
          <TradeBox tradeDetails={tradeDetails} />
        </div>
        <div>
          <Platforms />
        </div>
      </main>
    </Transition>
  );
};

export default Rightside;
