import React, {useEffect, useState} from "react";
import {BsFillChatQuoteFill} from "react-icons/bs";
import {FiArrowRight, FiBarChart2, FiHome, FiPieChart} from "react-icons/fi";
import {cn} from "@/libs/utils";
import {FaRegUser} from "react-icons/fa6";
import {BsEnvelope} from "react-icons/bs";
import {BsCart2} from "react-icons/bs";
import {TbTargetArrow} from "react-icons/tb";
import Link from "next/link";

const Dropdown = ({sticky, className}) => {
    return (
        <div className={`${className || ""} text-sm xl:ml-10.5 ml-s`}>
            <div className="wrapper">
                <div className="relative flex text-center space-x-2 xl:space-x-3.5">
                    <NavHoverLink
                        buttonText="Post Requests"
                        className="hidden text-green sm:block"
                    >
                        <TbTargetArrow className="relative inline-block no-underline text-[23px] text-green"/>
                    </NavHoverLink>
                    {/* link 1 */}
                    {!sticky && (
                        <>

                            <NavHoverLink destination="/login"
                                          buttonText="Sign in/ Join"
                                          className="hidden group-hover:text-light-green lg:block"
                            >
                                <FaRegUser
                                    className="relative inline-block no-underline text-[23px] group-hover:text-green"/>
                            </NavHoverLink>

                            <Tooltip className="min-w-[385px]"></Tooltip>
                            {/* link 3 */}
                            <NavHoverLink
                                buttonText="Messages"
                                className="hidden group-hover:text-green lg:block"
                            >
                                <BsEnvelope
                                    className="relative inline-block no-underline text-[23px] group-hover:text-green"/>
                                <Tooltip className="min-w-[385px] group-hover:block">
                                    Tell us what you need and try the easy way to get quotes!
                                </Tooltip>
                            </NavHoverLink>
                            {/* link 4 */}

                            <NavHoverLink
                                buttonText="Inquiry Basket"
                                className="hidden group-hover:text-green lg:block"
                            >
                                <BsCart2
                                    className="relative inline-block no-underline text-[23px] group-hover:text-green"/>
                            </NavHoverLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const NavHoverLink = ({children, buttonText, className, destination}) => {
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

const Tooltip = ({children, className}) => {
    return (
        <div className={cn(`pt-2xs absolute ${className} hidden z-40 right-0 top-full`)}>
            <span
                className="absolute top-1 border-t-0 border-transparent border-b-white right-[34.1333px] border-6"></span>
            <div className="inline-block w-full bg-white text-sm shadow-lg p-xs rounded-[5px]">
                <div className="w-full text-nowrap">{children}</div>
            </div>
        </div>
    );
};

export default Dropdown;
