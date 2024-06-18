"use client";
import {TfiMenuAlt} from "react-icons/tfi";
import NavbarLink from "./NavbarLink";
import {cn} from "@/libs/utils";

const Navbar = ({sticky}) => {
    return (
        <div className={cn(`relative px-s -mx-2xs border-t border-gray text-sm`, {hidden: sticky,})}>
            <div className="mx-auto flex items-center justify-between max-w-8xl">
                <div className="flex items-center">
          <span className="mr-0 h-auto flex-auto flex-shrink-0 flex-grow-0">
            <div className="-ml-2xs">
              <div className="relative group">
                <div
                    className="relative z-50 whitespace-nowrap py-2xs pl-xs pr-s group-hover:active group-hover:hover-active">
                  <a className="z-20 whitespace-nowrap transition-colors duration-150 ease-out group group-hover:text-green"
                     href="#">
                    <TfiMenuAlt
                        className="inline-block whitespace-nowrap align-middle text-base mr-[3px] -mt-0.5 group-hover:text-green"/>
                    All Categories
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="inline-block h-4 w-4 transition-transform duration-200 ease-linear ml-1.3 group-hover:rotate-180">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </a>
                </div>
                  {/* content */}
                  <div
                      className="absolute top-full left-0 z-50 hidden rounded-md rounded-tl-none bg-white w-[550px] p-3.7 shadow-category group-hover:inline-block">
                  <div className="flex flex-wrap text-sm -mx-1.3">
                    <div className="basis-1/2">
                      <ul className="px-1.3">
                        <li>
                          <a href="#" className="flex items-center font-medium py-1.3 hover:text-green">
                            Agriculture & Food
                          </a>
                        </li>
                      </ul>
                    </div>
                      {/* first category */}
                      <div className="basis-1/2">
                      <ul className="px-1.3">
                        <li>
                          <a href="#" className="flex items-center font-medium py-1.3 hover:text-green">
                            Agriculture & Food
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                  {/* end content */}
              </div>
            </div>
          </span>
                    <span className="mt-px h-auto flex-auto flex-shrink-0 mr-5.5 -ml-1.3 text-gray">|</span>
                    <span className="w-full min-w-0 flex-auto business-item custom-business last:-mr-px">
            <div className="flex">
              <div className="flex flex-[0_0_auto]">
                <NavbarLink href="/why-choose-us"  text="Why Choose Us"/>

                <NavbarLink href="/verified-sellers"
                    text="Verified Sellers"
                    className="sxl:block hidden"
                />
                <NavbarLink href="/top-rated-products"
                    text="Top rated Products"
                    className="sxl:block hidden"
                />
              </div>
            </div>
          </span>
                </div>
                {/* Left */}
                <div className="hidden text-sm -mr-[3px] lg:flex">
                    <NavbarLink href="/sellers-guide" text="Supplier Guide"/>
                    <NavbarLink href="/buyers-guide" text="Buyers Guide"/>
                    <span className="inline-block h-auto flex-auto flex-shrink-0 mr-5.5 -ml-1.3 mt-2xs text-gray">|</span>
                    <NavbarLink href="/help" text="Help"/>
                    <NavbarLink href="/contact-us" text="Contact Us"/>
                    <NavbarLink href="/complaint" text="Drop Complaint"/>
                </div>
                {/* right */}
            </div>
        </div>
    );
};

export default Navbar;
