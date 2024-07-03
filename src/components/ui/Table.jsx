/* eslint-disable react/display-name */
import React, { useRef, useState, useEffect, forwardRef } from "react";
import Label from "./Label";
import Radio from "./Radio";
import Badge from "./Badge";
import Image from "next/image";
import { cn } from "@/libs/utils";

export const TableHeader = ({ children }) => {
  return (
    <thead>
      <tr className="border-t border-gray">{children}</tr>
    </thead>
  );
};

export const TableSortButton = ({ className, index, label }) => {
  const [toggle, setToggle] = useState(null);
  const toggleRef = useRef(null);

  const handleToggle = () => {
    setToggle(toggle === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setToggle(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <button
        type="button"
        className={cn(
          `py-2.5 px-5 flex items-center text-dark-gray text-xs font-medium text-start w-full gap-1`,
          className
        )}
        onClick={handleToggle}
      >
        {label && (
          <>
            {label}
            <svg
              className="block w-4 h-4 shrink-0 text-dark-gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 15 5 5 5-5"></path>
              <path d="m7 9 5-5 5 5"></path>
            </svg>
          </>
        )}
      </button>

      {/* Dropdown */}
      {label && (
        <div
          ref={toggleRef}
          className={`absolute w-40 ${
            toggle === index ? "block opacity-100" : "hidden opacity-0"
          } rounded-lg top-[120%] transition-[opacity,margin] duration shadow z-10 bg-white`}
        >
          <div className="p-1">
            <button
              type="button"
              className="w-full flex items-center gap-3 px-2 hover:bg-light-gray rounded-md py-1.5 text-[13px] font-medium text-dark-gray"
            >
              <svg
                className="block shrink-0 w-4 h-4 text-dark-gray"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
              Sort ascending
            </button>
            <button
              type="button"
              className="w-full flex items-center gap-3 px-2 hover:bg-light-gray rounded-md py-1.5 text-[13px] font-medium text-dark-gray"
            >
              <svg
                className="block shrink-0 w-4 h-4 text-dark-gray"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
              Sort descending
            </button>
            <button
              type="button"
              className="w-full flex items-center gap-3 px-2 hover:bg-light-gray rounded-md py-1.5 text-[13px] font-medium text-dark-gray"
            >
              <svg
                className="block shrink-0 w-4 h-4 text-dark-gray"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Move left
            </button>
            <button
              type="button"
              className="w-full flex items-center gap-3 px-2 hover:bg-light-gray rounded-md py-1.5 text-[13px] font-medium text-dark-gray"
            >
              <svg
                className="block shrink-0 w-4 h-4 text-dark-gray"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              Move right
            </button>

            <div className="my-1 border border-light-gray"></div>

            <button
              type="button"
              className="w-full flex items-center gap-3 px-2 hover:bg-light-gray rounded-md py-1.5 text-[13px] font-medium text-dark-gray"
            >
              <svg
                className="block shrink-0 w-4 h-4 text-dark-gray"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
              Hide in view
            </button>
          </div>
        </div>
      )}
      {/* End Dropdown */}
    </div>
  );
};

export const TableColumn = ({ className, ...props }) => {
  return <th scope="col" className={className} {...props} />;
};

export const TableBody = ({ className, ...props }) => {
  return <tbody className={cn("divide-y divide-gray", className)} {...props} />;
};

export const TableRows = ({ ...props }) => {
  return <tr {...props} />;
};

export const TableCell = ({ className, ...props }) => {
  return (
    <td className={cn("py-4 px-3 whitespace-nowrap", className)} {...props} />
  );
};

export const RenderCell = ({ item, columnKey, className, ...props }) => {
  switch (columnKey) {
    case "text":
      return (
        <span
          className={cn("text-sm font-medium text-dark-gray", className)}
          {...props}
        >
          {item}
        </span>
      );
      break;
    case "badge":
      return (
        <Badge
          className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            className
          )}
          {...props}
        >
          {item}
        </Badge>
      );
      break;
    case "image":
      return (
        <Image
          src={item}
          className="rounded-md w-8 h-8"
          width={32}
          height={32}
          alt="product Image"
        />
      );
      break;
    case "description":
      return (
        <div className="flex-1 block">
          <span
            className={cn("text-sm text-dark-gray truncate pr-4", className)}
            {...props}
          >
            {item}
          </span>
        </div>
      );
      break;
    default:
      <span
        className={cn("text-sm font-medium text-dark-gray", className)}
        {...props}
      >
        {item}
      </span>;
      break;
  }
};

export const SearchFilters = ({ className }) => {
  const [filter, setFilter] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="grid gap-y-2 md:grid-cols-2 md:gap-5 md:gap-y-0">
      <div>
        {/* Search Input */}
        <div className="relative">
          <div className="absolute pointer-events-none start-0 top-0 bottom-0 z-20 flex items-center ps-3.5">
            <svg
              className="block w-4 h-4 text-dark-gray shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            type="text"
            className="ps-10 pr-3 w-full border-transparent py-1.5 border bg-light-gray rounded-lg text-sm placeholder:text-sm block  text-dark-gray placeholder:text-dark-gray focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            placeholder="Search discounts"
          />
        </div>
        {/* End Search Input */}
      </div>
      {/* End Col */}

      <div className="flex flex-wrap items-center md:justify-end gap-2">
        {/* Export Button */}
        <button
          type="button"
          className="inline-flex gap-1.5 border border-gray rounded-lg items-center px-2.5 py-2 cursor-pointer text-xs text-dark-gray shadow hover:bg-light-gray"
        >
          Export
          <svg
            className="block w-4 h-4 shrink-0 text-dark-gray"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </button>
        {/* End Export Button */}

        {/* Filter Dropdown */}
        <div className="relative inline-flex">
          {/* Filter Button */}
          <button
            onClick={handleFilter}
            type="button"
            className="inline-flex gap-1.5 border border-gray rounded-lg items-center px-2.5 py-2 cursor-pointer text-xs text-dark-gray shadow hover:bg-light-gray"
          >
            <svg
              className="block w-4 h-4 shrink-0 text-dark-gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="21" x2="14" y1="4" y2="4"></line>
              <line x1="10" x2="3" y1="4" y2="4"></line>
              <line x1="21" x2="12" y1="12" y2="12"></line>
              <line x1="8" x2="3" y1="12" y2="12"></line>
              <line x1="21" x2="16" y1="20" y2="20"></line>
              <line x1="12" x2="3" y1="20" y2="20"></line>
              <line x1="14" x2="14" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="10" y2="14"></line>
              <line x1="16" x2="16" y1="18" y2="22"></line>
            </svg>
            Filter
            <span className="rounded-full bg-dark text-white w-4 h-4">7</span>
          </button>
          {/* End Filter Button */}

          {/* Dropdown */}
          <div
            ref={filterRef}
            className={` ${
              filter ? "opacity-100 block" : "opacity-0 hidden"
            }  z-30 w-44 rounded-lg bg-white transition-[opacity,margin] duration shadow`}
            style={{
              position: "absolute",
              inset: "-20px -20px auto auto",
              margin: "0px",
              transform: "translate(-21px, 66px)",
            }}
          >
            <div className="p-1">
              <div className="flex items-center cursor-pointer gap-3 py-1.5 px-2">
                <Radio id="name" />
                <Label
                  htmlFor="name"
                  className="flex item-center mb-0 text-[13px] font-medium"
                >
                  Name
                </Label>
              </div>
              <div className="flex items-center cursor-pointer gap-3 py-1.5 px-2">
                <Radio id="product" />
                <Label
                  htmlFor="product"
                  className="flex item-center mb-0 text-[13px] font-medium"
                >
                  Product
                </Label>
              </div>
              <div className="flex items-center cursor-pointer gap-3 py-1.5 px-2">
                <Radio id="orders" />
                <Label
                  htmlFor="orders"
                  className="flex item-center mb-0 text-[13px] font-medium"
                >
                  Orders
                </Label>
              </div>
            </div>
          </div>
          {/* End Dropdown */}
        </div>
        {/* End Filter Dropdown */}
      </div>
      {/* End Col */}
    </div>
  );
};

export const Pagination = () => {
  return (
    <div className="mt-4 justify-between flex flex-wrap items-center">
      <p className="text-sm text-dark-gray space-x-1">
        <span className="font-medium">27</span>
        <span className="text-xs font-medium text-dark-gray">results</span>
      </p>

      {/* Pagination */}
      <nav className="flex justify-end items-center gap-1">
        <button
          type="button"
          className="py-2 px-3 rounded-lg inline-flex min-w-9 items-center justify-center hover:bg-light-gray text-dark"
        >
          <svg
            className="shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-1">
          <span className="flex items-center min-w-9 py-2 px-3 rounded-lg hover:bg-light-gray text-sm text-dark">
            1
          </span>
          <span className="flex min-w-9 items-center py-2 px-1.5 text-dark text-sm">
            of
          </span>
          <span className="flex items-center min-w-9 py-2 px-3 rounded-lg bg-light-gray text-sm text-dark">
            3
          </span>
        </div>
        <button
          type="button"
          className="py-2 px-3 rounded-lg inline-flex min-w-9 items-center justify-center hover:bg-light-gray text-dark"
        >
          <span aria-hidden="true" className="sr-only">
            Next
          </span>
          <svg
            className="shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
      {/* End Pagination */}
    </div>
  );
};

export const Action = ({ index, data }) => {
  const [action, setAction] = useState(null);
  const actionsRef = useRef(null);

  const handleAction = () => {
    setAction(action === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (actionsRef.current && !actionsRef.current.contains(event.target)) {
        setAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="cursor-pointer inline-flex h-6 w-6 items-center justify-center gap-2 border border-gray rounded-md"
        onClick={() => handleAction()}
      >
        <svg
          className="block shrink-0 w-4 h-4 text-dark-gray"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>

      {action === index && (
        <div
          ref={actionsRef}
          className={`transition-[opacity,margin] duration z-[9999] block w-24 rounded-lg absolute right-0  bg-white shadow ${
            index === data.length - 1 || index === data.length - 2
              ? "bottom-full mb-2"
              : "mt-2 top-full"
          } `}
        >
          <div className="p-1">
            <button
              type="button"
              className="py-1.5 px-2 flex items-center w-full font-medium rounded-md hover:bg-light-gray text-dark text-xs"
            >
              Edit
            </button>
            <button
              type="button"
              className="py-1.5 px-2 flex items-center w-full font-medium rounded-md hover:bg-light-gray text-dark text-xs"
            >
              Duplicate
            </button>
            <div className="my-1 w-full border border-gray h-px"></div>
            <button
              type="button"
              className="py-1.5 px-2 flex items-center w-full font-medium rounded-md hover:bg-light-gray text-dark text-xs"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const TableContainer = ({ children }) => {
  return (
    <div className="mt-4 overflow-x-auto &amp::-webkit-scrollbar-track:bg-gray &amp::-webkit-scrollbar-thumb:bg-light-gray z-10">
      <div className="min-w-full inline-block align-middle">
        {/* Table */}
        <table className="min-w-full divide-y divide-gray">{children}</table>
        {/* End Table */}
      </div>
    </div>
  );
};

const Table = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col p-5 rounded-lg border border-gray bg-white shadow">
        {/* Table Section */}
        {children}
        {/* End Table Section */}
      </div> 
    </section>
  );
};

export default Table;
