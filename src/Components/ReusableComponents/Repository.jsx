import React from "react";
import { GoDatabase } from "react-icons/go";

const Repository = ({ title, visiblility, language, size, time }) => {
  return (
    <div className="py-[16px] lg:py-[24px] border-b border-solid border-br2">
      <div className="px-[16px] lg:px-[24px] flex flex-col gap-[12px] item">
        <div className="flex gap-[8px] items-center">
          <h2 className="text-c1 text-lg lg:text-xl font-medium leading-6">
            {title}
          </h2>
          <button className="bg-bg3 px-[6px] border border-solid border-br3 rounded-full text-sm leading-5 text-center text-c3">
            {visiblility}
          </button>
        </div>
        <div className="flex gap-[40px]">
          <p className="flex items-center gap-2 text-sm leading-6 text-c1">
            {language} <span className="bg-bg2 w-2 h-2 rounded-full"></span>
          </p>
          <p className="flex items-center gap-2 text-sm leading-6 text-c1">
            <span>
              <GoDatabase />
            </span>
            {size}
          </p>
          <p className="leading-6 text-sm text-c1">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Repository;
