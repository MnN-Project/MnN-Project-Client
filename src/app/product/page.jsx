"use client";
import Header from "@/components/header/Header";
import React, { useState } from "react";
import Image from "next/image";
import List from "@/assets/svg/list.svg";
import Gallery from "@/assets/svg/gallery.svg";
import Spaghetti from "@/assets/spaghetti.png";
import Heart from "@/assets/svg/heart.svg";
import { cn } from "@/libs/utils";
import Footer from "@/components/footer/Footer";
import Pagination from "@/components/pagination/Pagination";

const Category = () => {
  return (
    <section className="z-10 bg-white">
      <Header />
      <div className="relative mx-auto block h-full bg-white container-wrapper lg:mx-[70px]">
        <Breadcrumb />
        <div className="w-full md:flex md:gap-2">
          <LeftSection />
          {/* aside left */}
          <ProductSection>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ProductSection>
          {/* Main Product content */}
          <RightSection />
          {/* aside right */}
        </div>
      </div>
      <Footer />
    </section>
  );
};

const Breadcrumb = () => {
  return (
    <nav className="inline-block pt-[10px] mb-[10px]" aria-label="Breadcrumb">
      <ol className="inline-flex w-full items-center text-xs space-x-1 rtl:space-x-reverse text-dark-gray md:space-x-2">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-xs text-gray-700 hover:text-blue-600"
          >
            <svg
              className="h-3 w-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </a>
        </li>
        <li className="hidden sm:block">
          <div className="flex items-center">
            <svg
              className="mx-1 h-3 w-3 rtl:rotate-180 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="text-xs text-gray-700 ms-1 hover:text-blue-600"
            >
              Nigeria Products Directory
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="mx-1 h-3 w-3 rtl:rotate-180 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="text-xs text-gray-500 ms-1 text-nowrap md:ms-2">
              Manufacturing & Processing Machinery
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

const LeftSection = () => {
  return (
    <aside className="z-10 hidden h-full bg-white w-[190px] md:block">
      <div className="mb-2xs">
        <dl className="mb-2xs">
          <dt className="pt-[6px]">
            <h3 className="font-bold text-dark">Category</h3>
          </dt>
          <dd className="text-dark text-2xs">
            <a href="#" className="block font-light py-1.3 px-2xs text-wrap">
              Manufacturing & Processing Machinery
            </a>
            <a href="#" className="block px-2xs py-1.3">
              Agricultural Machinery
            </a>
            <span className="pl-s">Feed Processing Machinery</span>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold">Processing Object</h3>
          </dt>
          <dd className="text-dark text-2xs">
            <a href="#" className="block font-light py-1.3">
              Cereals (6,406)
            </a>
            <a href="#" className="block py-1.3">
              Beans (2,181)
            </a>
            <a href="#" className="block py-1.3">
              Forage Straw (6,098)
            </a>
            <a href="#" className="block py-1.3">
              Animal Derived Feed
            </a>
            <a href="#" className="block py-1.3">
              Additive (141)
            </a>
            <span className="py-1.3">More</span>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Processing Techniques</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3">
              Crushing-before-Mixing (27,898)
            </a>
            <a href="#" className="block py-1.3">
              Mixing-before-crushing (6,227)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Screen Mesh</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3">
              With screen Mesh (25,898)
            </a>
            <a href="#" className="block py-1.3">
              Without screen Mesh (11,475)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Grinding Equipment Type</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3">
              Roll Crusher (6,889)
            </a>
            <a href="#" className="block py-1.3">
              Tooth Claw Mill (6,624)
            </a>
            <a href="#" className="block py-1.3">
              Feed Hammer Mill (25,977)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Pellet Mill Type</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3">
              Screw Granulator (7,716)
            </a>
            <a href="#" className="block py-1.3">
              Flat Die Pelletizer (9,696)
            </a>
            <a href="#" className="block py-1.3">
              Pressing Granulator (2,687)
            </a>
            <a href="#" className="block py-1.3">
              Ring Die Pelleter (15,365)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Bulk Machine Type</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3 text-wrap">
              Twin Screw Bulking Machine (12,512)
            </a>
            <a href="#" className="block py-1.3 text-wrap">
              Single Screw Bulking Machine (14,431)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Expanding Method</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3 text-wrap">
              Dry Expansion (14,990)
            </a>
            <a href="#" className="block py-1.3 text-wrap">
              Wet Expansion (10,582)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Applicable MAterials Shape</h3>
          </dt>
          <dd className="font-light text-2xs">
            <a href="#" className="block py-1.3 text-wrap">
              Granular (20,282)
            </a>
            <a href="#" className="block py-1.3 text-wrap">
              Short Strip (13,787)
            </a>
            <a href="#" className="block py-1.3 text-wrap">
              Powder (10,582)
            </a>
            <a href="#" className="block py-1.3 text-wrap">
              Pie (43)
            </a>
          </dd>
        </dl>
      </div>
      <div className="mb-2xs text-2xs">
        Min. Order
        <input
          type="text"
          className="inline-block w-[48px] text-2xs ml-2xs py-[3px] px-[5px] h-[20px] rounded-[3px]"
        />
        <button className="block border ml-[5px] px-[9px] h-[26px] rounded-[3px] border-light-dark-gray bg-gray">
          OK
        </button>
      </div>
      <div className="mb-2xs">
        <a href="#" className="">
          <Image
            width={190}
            height={100}
            src="https://pic.made-in-china.com/61f54j00iTQaZGrdmtWu/Top-Selling-Machinery.jpg"
            alt="Top Selling Machinery"
            title="Top Selling Machinery"
          />
        </a>
      </div>
    </aside>
  );
};

const RightSection = () => {
  return (
    <aside className="hidden h-full bg-white w-[190px] text- lg:block lg:pt-0">
      <div className="mb-2xs">
        <h3 className="font-bold py-[7px] text-dark">You May Like</h3>
        <ul className="border border-gray py-[9px]">
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Marya Automatic Pharmaceutical Aseptic Vial
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Full Automatic Flour Mill Machine Advanced Technology
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Bar Molding Center filled Candy Making Moulding Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Knapsack Electric Sprayer, Battery Sprayer (BBS-1610)
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Leafy Vegetable Salad Cutting Washing Drying Machines
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              European Standard Wheat Flour Mill
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Chocolate Enrober Machine with Cooling Tunnel/Automait
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Bagging Machinery Square Bales Solid Waste Fiber Wood
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Broiler Floor Raising Chicken Farming/Farm Feeding Sys
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Ultrafine Particle Size 1.5um-45um Powder Grinding Spi
            </a>
          </li>
        </ul>
      </div>
      {/* top */}
      <div className="mb-2xs">
        <h3 className="font-bold py-[7px] text-dark">Popular Searches</h3>
        <ul className="border border-gray py-[9px] mb-2xs">
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Feed Processing
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Feed Mixer
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Feed Pellet Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Farms Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Animal Feed
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Power Loader
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Feed Pellet Mills
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Flour Mill Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Animal Feed Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Fish Feed Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Biomass Pellet Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Wheat Flour
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Saw Dust Pellet Machine
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Fish Meal Plant
            </a>
          </li>
          <li className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
            <a href="#" className="block break-words max-h-[31px] text-[11px]">
              Fish Feed Meal
            </a>
          </li>
        </ul>
        <div className="mb-2xs">
          <a href="#" className="">
            <Image
              width={190}
              height={100}
              src="https://www.micstatic.com/mic-search/img/rfq_right_side.jpg?_v=1715328973821"
              alt="Top Selling Machinery"
              title="Top Selling Machinery"
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

const ProductSection = ({ children }) => {
  const [toggleProduct, setToggleProduct] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { toggleProduct })
  );

  function handleGallery() {
    return setToggleProduct(false);
  }

  function handleList() {
    return setToggleProduct(true);
  }

  return (
    <main className="flex h-full flex-1 flex-col lg:p-4">
      <div className="z-30 flex items-center justify-between list-tab h-[36px]">
        <ul className="border border-b-white bg-white border-dark-gray -mb-[2px]">
          <li className="relative mr-[3px]">
            <a className="block text-xs font-bold px-s h-[34px] leading-[31px]">
              Product List
            </a>
          </li>
        </ul>
        <span className="inline mr-2xs">
          <a href="#" className="text-green text-2xs">
            View Related{" "}
            <strong className="hidden text-xs sm:inline">
              Feed Processing Machinery{" "}
            </strong>
            suppliers {`>`}
          </a>
        </span>
      </div>
      {/* Product List */}
      <div className="z-10 inline-flex border text-xs total-tip py-[5px] px-2xs border-dark-gray text-dark-gray">
        Total{" "}
        <span className="ml-1 inline-block font-bold text-green"> 45,977</span>{" "}
        <h1 className="mx-1 inline-block font-bold text-green">
          {" "}
          Feed Processing Machinery
        </h1>{" "}
        <span className="hidden sm:inline-block">
          category from about 4,597 manufacturers & suppliers
        </span>
      </div>
      {/* Total Products */}
      <div className="border border-t-0 border-b-0 top refine search-guide border-dark-gray">
        <div className="relative overflow-hidden pt-[15px] pr-[55px]">
          <div className="flex flex-wrap">
            <a
              href="#"
              className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
            >
              Ring Die
            </a>
            <a
              href="#"
              className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
            >
              Feed Pellet Making Machine
            </a>
            <a
              href="#"
              className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
            >
              Animal Feed Pellet Machine
            </a>
            {showMore && (
              <>
                <a
                  href="#"
                  className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                >
                  Cutter Machine
                </a>
                <a
                  href="#"
                  className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                >
                  Feed Pellet Production Line
                </a>
                <a
                  href="#"
                  className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                >
                  Feed Processing Machine
                </a>
              </>
            )}
          </div>
          <button
            className="absolute inline text-xs top-[18px] right-[10px]"
            onClick={toggleMore}
          >
            {showMore ? "Less" : "More"}
          </button>
        </div>
      </div>
      {/* Multi List Search */}
      <div className="relative border border-b-0 top-refine border-dark-gray">
        <div className="flex items-center justify-start py-1 h-[35px] px-2xs -mb-[1px]">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs w-[130px] mr-2xs">
            Member Type:
          </div>
          <div className="flex items-center text-xs">
            <div className="relative cursor-pointer mr-s">
              <a href="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Diamond</span>
                <span className="ml-1 hidden sm:block">Member</span>
              </a>
            </div>
            {/* Diamond Member */}
            <div className="relative cursor-pointer mr-s">
              <a href="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Gold </span>
                <span className="ml-1 hidden sm:block">Member</span>
              </a>
            </div>
            {/* Gold Member */}
            <div className="relative cursor-pointer mr-s">
              <a href="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Audited</span>
                <span className="ml-1 hidden sm:block">Supplier</span>
              </a>
            </div>
            {/* Audited Supplier */}
          </div>
        </div>
      </div>
      {/* Member Type */}
      <div className="relative border top-refine2 border-dark-gray h-[55px]">
        <div className="flex h-full items-center justify-between text-xs px-2xs">
          <div className="flex">
            <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px] mr-2xs">
              Trading Type:
            </div>
            <div className="">
              <a href="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Secure Trading Services</span>
              </a>
            </div>
          </div>
          <div className="flex items-center py-[2px]">
            <span className="mr-1">View:</span>
            <button className="mr-1 h-[17px] w-[17px]" onClick={handleList}>
              <List
                className={cn(`w-[17px] h-[17px]`, {
                  "stroke-green": toggleProduct,
                })}
              />
            </button>
            <button className="ml-1 h-[17px] w-[17px]" onClick={handleGallery}>
              <Gallery
                className={cn(`w-[17px] h-[17px]`, {
                  "stroke-green": !toggleProduct,
                })}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Trading Type */}
      <div
        className={cn(
          `w-full h-full relative ${
            toggleProduct
              ? "flex-col flex-nowrap mt-1"
              : "search-list flex flex-wrap mt-1"
          }`
        )}
      >
        {childrenWithProps}
      </div>
      {/* Product Item*/}
      <Pagination />
      {/* Pagination */}
      <div className="px-2xs text-xs">
        <span>{`Haven't`} found what you are looking for</span>
        <h4 className="font-semibold">Post your request</h4>
        <p>Post request and get quotation quickly</p>
        <form action="" className="mt-4 w-full flex flex-col sm:flex-row">
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden rounded-md border sm:border-r-0 w-full sm:rounded-r-none border-dark-gray px-3 pt-3 shadow-sm sm:max-w-[233px]"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="peer text-xs h-8 w-full border-none bg-transparent p-0 placeholder:text-xs placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Sourcing Request
            </span>
          </label>
          <button
            type="submit"
            className="group w-full sm:max-w-[233px] mt-4 sm:mt-0 relative inline-block focus:outline-none"
          >
            <span className="relative bg-green hover:bg-light-green w-full sm:rounded-l-none rounded-md inline-block border-2 border-green px-3 py-3 text-xs font-semibold uppercase text-white group-active:text-opacity-75">
              Post Sourcing Request
            </span>
          </button>
        </form>
      </div>
      {/* Sourcing Request */}
    </main>
  );
};

const ProductItem = ({ toggleProduct }) => {
  return (
    <div
      className={cn(
        `${
          toggleProduct
            ? "w-full flex px-2xs pt-1.3 pb-2 xs:bg-green/5 bg-white"
            : "basis-1/2 xs:basis-1/3 md:basis-1/3 xl:basis-1/4 p-3 hover:border-gray"
        }  border-white border transition-colors duration-200`
      )}
    >
      <div
        className={cn(
          `relative ${toggleProduct ? "flex w-full" : "h-[298px]"} rounded-md `
        )}
      >
        <div
          className={cn(
            `relative bg-white ${
              toggleProduct ? "h-full xl:w-1/3" : "h-1/2 w-full"
            }`
          )}
        >
          <a
            href="#"
            className={cn(
              `w-full min-w-[7.813rem] h-[7.813rem] relative xl:h-full block`
            )}
          >
            <Image
              src={Spaghetti}
              fill
              sizes="100%"
              className="aspect-square"
              alt=""
            />
          </a>
          <a
            href="#"
            className="absolute top-0 right-0 mt-2 mr-2 flex h-7 w-7 items-center justify-center rounded-full group bg-gray"
          >
            <Heart className="h-4 w-7 fill-white stroke-1 transition-all group-hover:fill-dark-gray" />
          </a>
          {/* favorite */}
        </div>
        {/* image */}
        <div
          className={cn(
            `${toggleProduct ? "w-full block px-2 lg:px-3" : "w-full"}`
          )}
        >
          <h2 className="overflow-hidden text-ellipsis mt-2xs">
            <a
              href="#"
              className={cn(
                `capitalize hover:text-green hover:underline ${
                  toggleProduct
                    ? "font-semibold text-xs"
                    : "text-xs line-clamp-2"
                }`
              )}
            >
              180-250kg/H Pet Animal Food Mill Extruder Machine Floating Fish
              Feed Pelletizer Granulator
            </a>
          </h2>
          <div className="text-xs mt-[5px]">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-xs text-dark-gray xl:text-sm">Price:</span>{" "}
              <strong>&#8358; 1000 - 1900</strong>
            </p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-xs text-dark-gray lg:text-sm">
                Min Order:
              </span>{" "}
              <strong>1 Set</strong>
            </p>
            {toggleProduct && (
              <p className="hidden overflow-hidden text-ellipsis text-xs capitalize mt-1.3 mb-3.7 sm:block">
                Dangote Nig. Ltd Mini Multifunctional Animal Feed Corn Wheat
                Grain Grinder Crusher Machinery
              </p>
            )}
          </div>
          {!toggleProduct && (
            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center rounded-md text-xs text-white transition-colors bg-green h-[26px] w-[126px] hover:bg-light-green lg:mt-5"
            >
              <span className="mr-1 text-lg">&#9993;</span> Contact Now
            </a>
          )}
          {/* Button */}
        </div>
        {/* product description */}
        {toggleProduct && (
          <div className="hidden w-2/5 sm:block">
            <h2 className="text-xs font-semibold mt-3.5">Dangote Group</h2>
            <span className="block text-xs mt-2xs"> Lagos, Nigeria</span>
            <span className="block text-xs mt-2xs">ISO 9001 </span>
            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center rounded-md text-xs text-white transition-colors bg-green h-[26px] w-[126px] hover:bg-light-green lg:mt-5"
            >
              <span className="mr-1 text-lg">&#9993;</span> Contact Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
