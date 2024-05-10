import React, { useEffect, useState } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { FiArrowRight, FiBarChart2, FiHome, FiPieChart } from "react-icons/fi";
import { cn } from "@/libs/utils";
import { FaRegUser } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import Link from "next/link";

const Dropdown = ({ sticky, className }) => {
  return (
    <div className={`${className || ""} text-sm xl:ml-10.5 ml-s`}>
      <div className="wrapper">
        <div className="relative space-x-2 xl:space-x-3.5 flex text-center">
          <NavHoverLink
            buttonText="Post Requests"
            className="text-green hidden sm:block"
          >
            <TbTargetArrow className="relative text-[23px] inline-block no-underline text-green" />
          </NavHoverLink>
          {/* link 1 */}
          {!sticky && (
            <>
             
                <NavHoverLink destination="/login"
                   buttonText="Sign in/ Join"
                  className="group-hover:text-light-green hidden lg:block"
                >
                  <FaRegUser className="relative text-[23px] inline-block no-underline group-hover:text-green" />
                </NavHoverLink>
    
              <Tooltip className="min-w-[385px]"></Tooltip>
              {/* link 3 */}
              <NavHoverLink
                buttonText="Messages"
                className="group-hover:text-green hidden lg:block"
              >
                <BsEnvelope className="relative text-[23px] inline-block no-underline group-hover:text-green" />
                <Tooltip className="min-w-[385px] group-hover:block">
                  Tell us what you need and try the easy way to get quotes!
                </Tooltip>
              </NavHoverLink>
              {/* link 4 */}

              <NavHoverLink
                buttonText="Inquiry Basket"
                className="group-hover:text-green hidden lg:block"
              >
                <BsCart2 className="relative text-[23px] inline-block no-underline group-hover:text-green" />
              </NavHoverLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const NavHoverLink = ({ children, buttonText, className, destination }) => {
  return (
    <a
      href={destination ? destination : "#"}
      className={cn(
        `inline-flex ${className} flex-col group transition-colors duration-150 ease-out items-center no-underline`
      )}
    >
      {children}
      <div
        className={`text-xs xl:text-sm font-medium text-nowrap group-hover:text-green`}
      >
        {buttonText}
      </div>
    </a>
  );
};

const Tooltip = ({ children, className }) => {
  return (
    <div className={cn(`pt-2xs absolute ${className} hidden z-40 right-0 top-full`)}>
      <span className="right-[34.1333px] top-1 border-t-0 border-b-white absolute border-6 border-transparent"></span>
      <div className="inline-block w-full p-xs rounded-[5px] shadow-lg bg-white text-sm ">
        <div className="w-full text-nowrap">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
