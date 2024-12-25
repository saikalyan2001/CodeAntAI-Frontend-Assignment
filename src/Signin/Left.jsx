import React from "react";
import { IoArrowUpSharp } from "react-icons/io5";

const Left = () => {
  return (
    <div className="hidden xl:block w-[720px] border border-solid border-br1 p-40 relative bg-bg1 bg-[url('/Subtract.png')] bg-left-bottom bg-no-repeat">
      <div className="w-fit p-4 rounded-3xl  whitespace-nowrap flex flex-col gap-4 border shadow-2xl shadow-sd ">
        <p className="flex gap-2 items-center font-bold text-[18px] text-c9 leading-7 border-b border-br5  -mx-4 px-4  pb-4">
          <span className="">
            <img src="/logo.png" alt="logo" />
          </span>
          AI to Detect & Autofix Bad Code
        </p>
        <div className="flex gap-10 py-4">
          <p className="text-c5 text-sm flex flex-col items-center">
            <span className="text-lg text-c9 font-bold leading-7">30+</span>
            Language Support
          </p>
          <p className="text-c5 text-sm flex flex-col items-center">
            <span className="text-lg text-c9 font-bold leading-7">10K+</span>
            Developers
          </p>
          <p className="text-c5 text-sm flex flex-col items-center">
            <span className="text-lg text-c9 font-bold leading-7">100K+</span>
            Hours Saved
          </p>
        </div>
      </div>

      <div
        className="rounded-3xl flex flex-col  gap-4 border w-[230px] py-4 px-6 bg-bg1 
      absolute right-[130px] top-[328px] shadow-2xl shadow-sd"
      >
        <div className="flex justify-between items-center">
          <div className="relative w-[56px] h-[56px] rounded-full p-4">
            <div className="absolute inset-0 bg-[#9D90FA] opacity-25 rounded-full"></div>
            <img
              src="/images/Vector.png"
              alt="vector"
              className="relative z-10"
            />
          </div>

          <div>
            <p className="text-sm text-c7 font-bold leadin-2 flex items-center">
              <span>
                <IoArrowUpSharp />
              </span>{" "}
              14%
            </p>
            <p className="text-xs text-c5 leading-4">This week</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-c5 font-bold leading-4 flex flex-col gap-3">
            Issues Fixed <span className="text-[32px] text-c4">500K+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Left;
