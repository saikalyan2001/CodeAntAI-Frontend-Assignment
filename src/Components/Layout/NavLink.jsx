import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const NavLink = ({ href, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href}>
      <div
        className={`flex items-center gap-4 lg:w-[210px] font-semibold ${
          isActive ? "bg-bg2 text-white" : "text-c2"
        } cursor-pointer  py-[10px] px-[14px] rounded-md`}
      >
        <p className="text-xl"> {icon}</p>
        <p className="leading-7"> {label}</p>
      </div>
    </Link>
  );
};

export default NavLink;
