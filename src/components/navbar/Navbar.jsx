"use client";
import { TfiMenuAlt } from "react-icons/tfi";
import NavbarLink from "./NavbarLink";
import { cn } from "@/libs/utils";
import Link from "next/link";

const Navbar = ({ sticky }) => {
  return (
    <div
      className={cn(`relative px-s -mx-2xs border-t border-gray text-sm`, {
        hidden: sticky,
      })}
    >
      <div className="mx-auto flex items-center justify-between max-w-8xl">
        <div
          class="flex sm:hidden items-center w-full text-sm bg-white h-8 overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <Link
            class="shrink-0 relative px-2.5 font-semibold text-green after:content-[''] after:absolute after:block after:bottom-0 after:right-1 after:bg-green leading-8 after:w-7 after:h-[2px] after:rounded-md"
            href="/"
          >
            <h2>All</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Manufacturing &amp; Processing Machinery</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Industrial Equipment &amp; Components</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/Lights-Lighting">
            <h2>Lights &amp; Lighting</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Electrical &amp; Electronics</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Auto, Motorcycle Parts &amp; Accessories</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Consumer Electronics</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Furniture</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Construction &amp; Decoration</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Light Industry &amp; Daily Use</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Apparel &amp; Accessories</h2>
          </Link>
          <Link class="shrink-0 relative px-2.5" href="/">
            <h2>Transportation</h2>
          </Link>
        </div>
        {/* mobile */}
        <div className="flex items-center overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: "none" }}>
          <div className="sm:flex items-center hidden">
            <span className="mr-0 h-auto flex-auto flex-shrink-0 flex-grow-0">
              <div className="-ml-2xs">
                <div className="group relative z-50 whitespace-nowrap py-2xs pl-xs pr-s group-hover:active group-hover:hover-active">
                  <Link
                    className="z-20 whitespace-nowrap transition-colors duration-150 ease-out group group-hover:text-green"
                    href="#"
                  >
                    <TfiMenuAlt className="inline-block whitespace-nowrap align-middle text-base mr-[3px] -mt-0.5 group-hover:text-green" />
                    All Categories
                  </Link>
                </div>
              </div>
            </span>
            <span className="mt-px h-auto flex-auto flex-shrink-0 mr-5.5 -ml-1.3 text-gray">
              |
            </span>
            <span className="w-full min-w-0 flex-auto business-item custom-business last:-mr-px">
              <div className="flex">
                <div className="flex flex-[0_0_auto]">
                  <NavbarLink href="/why-choose-us" text="Why Choose Us" />

                  <NavbarLink
                    href="/verified-sellers"
                    text="Verified Sellers"
                    className="sxl:block hidden"
                  />
                  <NavbarLink
                    href="/top-rated-products"
                    text="Top rated Products"
                    className="sxl:block hidden"
                  />
                </div>
              </div>
            </span>
          </div>
          {/* Left */}
          <div className="hidden text-sm -mr-[3px] sm:flex">
            <NavbarLink href="/sellers-guide" text="Supplier Guide" />
            <NavbarLink href="/buyers-guide" text="Buyers Guide" />
            <span className="inline-block h-auto flex-auto flex-shrink-0 mr-5.5 -ml-1.3 mt-2xs text-gray">
              |
            </span>
            <NavbarLink href="/help" text="Help" />
            <NavbarLink href="/contact-us" text="Contact Us" />
            <NavbarLink href="/complaint" text="Drop Complaint" />
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
