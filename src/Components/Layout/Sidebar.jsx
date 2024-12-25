import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { HiOutlineHome } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import DropdownMenu from "../ReusableComponents/DropdownMenu";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavLinksTop = [
    { href: "/repositories", icon: <HiOutlineHome />, label: "Repositories" },
    {
      href: "/aicodereview",
      icon: <IoCodeSlashOutline />,
      label: "AI Code Review",
    },
    {
      href: "/cloudsecurity",
      icon: <IoIosCloudOutline />,
      label: "Cloud Security",
    },
    { href: "/howtouse", icon: <LuBookText />, label: "How to Use" },
    { href: "/settings", icon: <IoSettingsOutline />, label: "Settings" },
  ];

  const NavLinksBottom = [
    { href: "/support", icon: <FiPhone />, label: "Support" },
    { href: "/", icon: <MdLogout />, label: "Logout" },
  ];

  return (
    <>
      <div
        className={`${isOpen ? "bg-black opacity-20 inset-0 fixed z-50" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      <div
        className={`${
          isOpen ? "z-50 fixed w-full" : ""
        } lg:w-[242px] lg:h-[960px] bg-[#FFFFFF] border-solid border-b lg:border-r-[1px] border-br1`}
      >
        <div>
          <div className="lg:w-[242px] lg:h-[960px] flex flex-col lg:justify-between">
            <div className="flex flex-col gap-5 lg:mx-auto lg:my-6 w-full">
              <div className="flex justify-between items-center mx-4 py-4">
                <div className="lg:w-[210px] flex items-center gap-[11px] text-lg">
                  <img src="/logo.png" alt="logo" />
                  <h2 className="text-[24px] text-c1 leading-7">CodeAnt AI</h2>
                </div>
                <div
                  className="cursor-pointer lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MdOutlineMenu
                    className={`${isOpen ? "hidden" : ""} w-6 h-6 text-c1`}
                  />
                  <IoMdClose
                    className={`${isOpen ? "" : "hidden"} w-6 h-6 text-c1`}
                  />
                </div>
              </div>

              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } lg:flex w-[100%] max-w-[90%] mx-auto `}
              >
                <DropdownMenu />
              </div>

              <div
                className={`${
                  isOpen ? "block" : "hidden"
                }  lg:flex lg:flex-col w-[100%] max-w-[90%] mx-auto`}
              >
                {NavLinksTop.map((navlink, index) => (
                  <NavLink key={index} {...navlink} />
                ))}
              </div>
            </div>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              }  lg:flex flex-col w-[100%] max-w-[90%] mx-auto`}
            >
              {NavLinksBottom.map((navlink, index) => (
                <NavLink key={index} {...navlink} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
