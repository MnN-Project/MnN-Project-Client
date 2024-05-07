"use client";
import { TfiMenuAlt } from "react-icons/tfi";
import NavbarLink from "./NavbarLink";
import { cn } from "@/libs/utils";

const Navbar = ({ sticky }) => {
  return (
    <div
      className={cn(`relative px-s -mx-2xs border-t border-gray text-sm`, {
        hidden: sticky,
      })}
    >
      <div className="max-w-8xl mx-auto justify-between flex items-center">
        <div className="flex items-center">
          <span className="flex-grow-0 flex-shrink-0 flex-auto h-auto mr-0">
            <div className="-ml-2xs">
              <div className="relative group">
                <div className="py-2xs pl-xs z-50 pr-s relative whitespace-nowrap group-hover:active group-hover:hover-active">
                  <a
                    className="transition-colors group duration-150 ease-out whitespace-nowrap group-hover:text-green z-20"
                    href="#"
                  >
                    <TfiMenuAlt className="inline-block align-middle text-base mr-[3px] -mt-0.5 whitespace-nowrap group-hover:text-green" />
                    All Categories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1.3 inline-block transition-transform ease-linear duration-200 group-hover:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </a>
                </div>
                {/* content */}
                <div className="hidden group-hover:inline-block w-[550px] left-0 p-3.7 rounded-md rounded-tl-none absolute top-full z-50 bg-white shadow-category">
                  <div className="flex flex-wrap -mx-1.3 text-sm">
                    <div className="basis-1/2">
                      <ul className="px-1.3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-1.3 font-medium hover:text-green"
                          >
                            Agriculture & Food
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* first category */}
                    <div className="basis-1/2">
                      <ul className="px-1.3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-1.3 font-medium hover:text-green"
                          >
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
          <span className="flex-shrink-0 flex-auto h-auto mr-5.5 -ml-1.3 mt-px text-gray">
            |
          </span>
          <span className="business-item custom-business flex-auto w-full min-w-0 last:-mr-px">
            <div className="flex">
              <div className="flex-[0_0_auto] flex ">
                <NavbarLink text="Why Choose Us" />
                <NavbarLink
                  text="Verified Sellers"
                  className="sxl:block hidden"
                />
                <NavbarLink
                  text="Top rated Products"
                  className="sxl:block hidden"
                />
              </div>
            </div>
          </span>
        </div>
        {/* Left */}
        <div className="hidden -mr-[3px] text-sm lg:flex">
          <NavbarLink text="Supplier" />
          <NavbarLink text="Buyers" />
          <span className="flex-shrink-0 inline-block flex-auto h-auto mr-5.5 -ml-1.3 mt-2xs text-gray">
            |
          </span>
          <NavbarLink text="Help" />
          <NavbarLink text="Contact Us" />
          <NavbarLink text="Drop Complaint" />
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default Navbar;
