import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleValue = (e) => {
    const val = e.target.innerText;
    setValue(val);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleMenu}
        className="px-4 py-1 border border-br2 rounded-md flex justify-between items-center w-[100%] max-w-[100%]  lg:w-[210px]"
      >
        <p className="text-c1 leading-6 truncate text-[18px] ">
          {" "}
          {value || "saikalyan000012"}
        </p>
        <RiArrowDropDownLine className="text-c1 text-3xl" />
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-[100%] max-w-[100%] lg:w-48 text-c1 bg-white shadow-lg rounded-md overflow-hidden">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={(e) => handleValue(e)}
          >
            KeshavMaharaj001122
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={(e) => handleValue(e)}
          >
            Giridharpanwarji34001
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={(e) => handleValue(e)}
          >
            Krishnaswami000149
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
