"use client";
import { TfiMenuAlt } from "react-icons/tfi";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="relative px-s -mx-s border-t border-gray text-sm">
      <div className="max-w-8xl mx-auto justify-between flex items-center">
        <div className="flex-1 flex items-center">
          <span className="flex-grow-0 flex-shrink-0 flex-auto h-auto mr-0">
            <div className="-ml-2xs">
              <div className="relative">
                <div className="py-2xs pl-xs pr-s whitespace-nowrap group">
                  <a
                    className="transition-colors group duration-150 ease-out whitespace-nowrap group-hover:text-green"
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
                <div className="hidden">
                  <div className="">Category items</div>
                  <div className="">Additional category items</div>
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
                <NavbarLink text="Verified Sellers" />
                <NavbarLink text="Top rated Products" />
              </div>
            </div>
          </span>
        </div>
        {/* Left */}
        <div className="flex pl-2xl -mr-[3px] text-[14px]">
          <NavbarLink text="Supplier Guide" />
          <NavbarLink text="Buyers Guide" />
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
