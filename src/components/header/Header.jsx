"use client";
import React, {useEffect, useState} from "react";
import {cn} from "../../libs/utils";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Navbar from "../navbar/Navbar";


const Header = ({className, ...props}) => {

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 123) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
      <div className="flex z-40 items-center justify-center">
        <header
          className={cn(`pt-5 w-full bg-white container-wrapper ${className}`, {
            "fixed top-0  z-40 shadow-md transition-all duration-200 ease-linear":
              sticky,
          })}
          {...props}
        >
          <div className="flex flex-col items-start lg:flex-row">
            <div
              className={cn(
                `flex justify-center w-full lg:w-1/4 mb-3.7 lg:mb-0 lg:justify-start`
              )}
            >
              <Logo text="made in nigeria" />
            </div>
            <Navigation sticky={sticky} />
          </div>

          <Navbar sticky={sticky} />
        </header>
      </div>
    );
};

export default Header;
