"use client";
import React from "react";
import { cn } from "../../libs/utils";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Navbar from "../navbar/Navbar";

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn("pt-5 w-full bg-white container-wrapper", className)}
      {...props}
    >
      <div className="flex items-start">
        <Logo text="made in nigeria" />
        <Navigation />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
