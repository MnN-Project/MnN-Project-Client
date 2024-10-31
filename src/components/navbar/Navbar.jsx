'use client';
import { TfiMenuAlt } from 'react-icons/tfi';
import NavbarLink from './NavbarLink';
import { cn } from '@/libs/utils';
import { CompleteCategoryList } from '@/data/categoryData';
import { Link } from 'react-router-dom';

const Navbar = ({ sticky, navBarClass }) => {
  return (
    <div
      className={cn(`relative px-s -mx-2xs border-t border-gray text-sm ${navBarClass} `, {
        hidden: sticky
      })}
    >
      <div className="mx-auto flex items-center justify-between max-w-8xl">
        <div
          className="flex sm:hidden items-center w-full text-sm bg-white h-8 overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          <Link
            className="shrink-0 relative px-2.5 font-semibold text-green after:content-[''] after:absolute after:block after:bottom-0 after:right-1 after:bg-green leading-8 after:w-7 after:h-[2px] after:rounded-md"
            to="/"
          >
            <h2>All</h2>
          </Link>
          {CompleteCategoryList.map((cat) => (
            <Link className="shrink-0 relative px-2.5" to={`/categories/${cat.name}`} key={cat.id}>
              <h2 className="capitalize">{cat.name}</h2>
            </Link>
          ))}
        </div>
        {/* mobile */}
        <div
          className="flex items-center overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="sm:flex items-center hidden">
            <span className="mr-0 h-auto flex-auto flex-shrink-0 flex-grow-0">
              <div className="-ml-2xs">
                <div className="group relative z-50 whitespace-nowrap py-2xs pl-xs pr-s group-hover:active group-hover:hover-active">
                  <Link
                    className="z-20 whitespace-nowrap transition-colors duration-150 ease-out group group-hover:text-green"
                    to="#"
                  >
                    <TfiMenuAlt className="inline-block whitespace-nowrap align-middle text-base mr-[3px] -mt-0.5 group-hover:text-green" />
                    All Categories
                  </Link>
                </div>
              </div>
            </span>
            <span className="mt-px h-auto flex-auto flex-shrink-0 mr-5.5 -ml-1.3 text-gray">|</span>
            <span className="w-full min-w-0 flex-auto business-item custom-business last:-mr-px">
              <div className="flex">
                <div className="flex flex-[0_0_auto]">
                  <NavbarLink to="/why-choose-us" text="Why Choose Us" />

                  <NavbarLink to="#" text="Verified Sellers" className="sxl:block hidden" />
                  <NavbarLink
                    to="/product"
                    text="Top rated Products"
                    className="sxl:block hidden"
                  />
                </div>
              </div>
            </span>
          </div>
          {/* Left */}
          <div className="hidden text-sm -mr-[3px] sm:flex">
            <NavbarLink to="/sellers-guide" text="Supplier Guide" />
            <NavbarLink to="/buyers-guide" text="Buyers Guides" />
            <span className="inline-block h-auto flex-auto flex-shrink-0 mr-5.5 -ml-1.3 mt-2xs text-gray">
              |
            </span>
            <NavbarLink to="/help" text="Help" />
            <NavbarLink to="/contact-us" text="Contact Us" />
            <NavbarLink to="/complaint" text="Drop Complaint" />
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
