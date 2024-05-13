import Header from "@/components/header/Header";
import React from "react";
import Container from "@/components/container/Container";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <Header />
      <CategorySection />
    </>
  );
};

const Breadcrumb = () => {
  return (
    <nav className="inline-block pt-[10px] mb-[10px]" aria-label="Breadcrumb">
      <ol className="inline-flex text-xs w-full items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-dark-gray">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
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
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Nigeria Products Directory
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm font-medium text-nowrap text-gray-500 md:ms-2 dark:text-gray-400">
              Manufacturing & Processing Machinery
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

const CategorySection = () => {
  return (
    <section className="bg-white z-10">
      <div className="container-wrapper block h-full relative mx-auto lg:mx-[70px] bg-white">
        <Breadcrumb />
        <div className="md:flex w-full md:gap-2">
          <LeftSection />
          {/* aside left */}
          <main className="lg:p-4 flex-col flex flex-auto h-full">
            <div className="list-tab h-[36px] flex justify-between items-center z-30">
              <ul className="border border-dark-gray border-b-white -mb-[2px] bg-white">
                <li className="relative mr-[3px]">
                  <a className="px-s h-[34px] block text-xs font-bold leading-[31px]">
                    Product List
                  </a>
                </li>
              </ul>
              <span className="mr-2xs inline">
                <a href="#" className="text-green text-2xs">
                  View Related{" "}
                  <strong className="text-xs hidden sm:inline">
                    Feed Processing Machinery{" "}
                  </strong>
                  suppliers {`>`}
                </a>
              </span>
            </div>
            {/* Product List */}
            <div className="total-tip py-[5px] px-2xs border border-dark-gray text-dark-gray text-xs inline-flex z-10">
              Total{" "}
              <span className="text-green font-bold inline-block ml-1">
                {" "}
                45,977
              </span>{" "}
              <h1 className="text-green font-bold inline-block mx-1">
                {" "}
                Feed Processing Machinery
              </h1>{" "}
              <span className="hidden sm:inline-block">category from about 4,597 manufacturers & suppliers</span>
            </div>
            {/* Total Products */}
            <div className="top refine search-guide border border-dark-gray border-b-0 border-t-0">
              <div className="pt-[15px] pr-[55px] overflow-hidden relative">
                <div className="flex flex-wrap">
                  <a
                    href="#"
                    className="capitalize inline-block rounded-[3px] text-xs px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border border-dark-gray"
                  >
                    Ring Die
                  </a>
                  <a
                    href="#"
                    className="capitalize inline-block rounded-[3px] text-xs px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border border-dark-gray"
                  >
                    Feed Pellet Making Machine
                  </a>
                  <a
                    href="#"
                    className="capitalize inline-block rounded-[3px] text-xs px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border border-dark-gray"
                  >
                    Animal Feed Pellet Machine
                  </a>
                  <a
                    href="#"
                    className="capitalize inline-block rounded-[3px] text-xs px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border border-dark-gray"
                  >
                    Cutter Machine
                  </a>
                  <a
                    href="#"
                    className="capitalize inline-block rounded-[3px] text-xs px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border border-dark-gray"
                  >
                    Feed Pellet Production Line
                  </a>
                  <a
                    href="#"
                    className="capitalize inline-block rounded-[3px] text-xs px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border border-dark-gray"
                  >
                    Feed Processing Machine
                  </a>
                </div>
                <a
                  href="#"
                  className="inline text-xs absolute top-[18px] right-[10px]"
                >
                  More
                </a>
              </div>
            </div>
            <div className="member type"></div>
            <div className="trading type"></div>
            <div className="search-list"></div>
            <div className="number per-page"></div>
            <div className="pagination"></div>
          </main>
          {/* Main content */}
          <RightSection />
          {/* aside right */}
        </div>
        <div className="layout fly">
          <div className="related-box"></div>
          <div className="alert-bottom"></div>
        </div>
      </div>
    </section>
  );
};

const LeftSection = () => {
  return (
    <aside className="w-[190px] h-full bg-white hidden md:block z-10">
      <div className="mb-2xs">
        <dl className="mb-2xs">
          <dt className="pt-[6px]">
            <h3 className="font-bold text-dark">Category</h3>
          </dt>
          <dd className="text-dark text-2xs ">
            <a href="#" className="py-1.3 px-2xs font-light text-wrap block">
              Manufacturing & Processing Machinery
            </a>
            <a href="#" className="px-2xs py-1.3 block">
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
            <a href="#" className="py-1.3 font-light block">
              Cereals (6,406)
            </a>
            <a href="#" className="py-1.3 block">
              Beans (2,181)
            </a>
            <a href="#" className="py-1.3 block">
              Forage Straw (6,098)
            </a>
            <a href="#" className="py-1.3 block">
              Animal Derived Feed
            </a>
            <a href="#" className="py-1.3 block">
              Additive (141)
            </a>
            <span className="py-1.3">More</span>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Processing Techniques</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block">
              Crushing-before-Mixing (27,898)
            </a>
            <a href="#" className="py-1.3 block">
              Mixing-before-crushing (6,227)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Screen Mesh</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block">
              With screen Mesh (25,898)
            </a>
            <a href="#" className="py-1.3 block">
              Without screen Mesh (11,475)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Grinding Equipment Type</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block">
              Roll Crusher (6,889)
            </a>
            <a href="#" className="py-1.3 block">
              Tooth Claw Mill (6,624)
            </a>
            <a href="#" className="py-1.3 block">
              Feed Hammer Mill (25,977)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Pellet Mill Type</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block">
              Screw Granulator (7,716)
            </a>
            <a href="#" className="py-1.3 block">
              Flat Die Pelletizer (9,696)
            </a>
            <a href="#" className="py-1.3 block">
              Pressing Granulator (2,687)
            </a>
            <a href="#" className="py-1.3 block">
              Ring Die Pelleter (15,365)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Bulk Machine Type</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block text-wrap">
              Twin Screw Bulking Machine (12,512)
            </a>
            <a href="#" className="py-1.3 block text-wrap">
              Single Screw Bulking Machine (14,431)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Expanding Method</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block text-wrap">
              Dry Expansion (14,990)
            </a>
            <a href="#" className="py-1.3 block text-wrap">
              Wet Expansion (10,582)
            </a>
          </dd>
        </dl>
        <dl className="mb-2xs">
          <dt className="py-[6px]">
            <h3 className="font-bold text-dark">Applicable MAterials Shape</h3>
          </dt>
          <dd className="text-2xs font-light">
            <a href="#" className="py-1.3 block text-wrap">
              Granular (20,282)
            </a>
            <a href="#" className="py-1.3 block text-wrap">
              Short Strip (13,787)
            </a>
            <a href="#" className="py-1.3 block text-wrap">
              Powder (10,582)
            </a>
            <a href="#" className="py-1.3 block text-wrap">
              Pie (43)
            </a>
          </dd>
        </dl>
      </div>
      <div className="mb-2xs text-2xs">
        Min. Order
        <input
          type="text"
          className="w-[48px] text-2xs inline-block ml-2xs py-[3px] px-[5px] h-[20px] rounded-[3px]"
        />
        <button class="block ml-[5px] px-[9px] h-[26px] border rounded-[3px] border-light-dark-gray bg-gray">
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
    <aside className="lg:pt-0 w-[190px] h-full bg-white hidden lg:block">
      <div className="mb-2xs">
        <h3 className="py-[7px] font-bold text-dark">You May Like</h3>
        <ul className="border border-gray py-[9px]">
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Marya Automatic Pharmaceutical Aseptic Vial
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Full Automatic Flour Mill Machine Advanced Technology
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Bar Molding Center filled Candy Making Moulding Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Knapsack Electric Sprayer, Battery Sprayer (BBS-1610)
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Leafy Vegetable Salad Cutting Washing Drying Machines
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              European Standard Wheat Flour Mill
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Chocolate Enrober Machine with Cooling Tunnel/Automait
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Bagging Machinery Square Bales Solid Waste Fiber Wood
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Broiler Floor Raising Chicken Farming/Farm Feeding Sys
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Ultrafine Particle Size 1.5um-45um Powder Grinding Spi
            </a>
          </li>
        </ul>
      </div>
      {/* top */}
      <div className="mb-2xs">
        <h3 className="py-[7px] font-bold text-dark">Popular Searches</h3>
        <ul className="border border-gray py-[9px] mb-2xs">
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Feed Processing
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Feed Mixer
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Feed Pellet Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Farms Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Animal Feed
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Power Loader
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Feed Pellet Mills
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Flour Mill Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Animal Feed Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Fish Feed Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Biomass Pellet Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Wheat Flour
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Saw Dust Pellet Machine
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
              Fish Meal Plant
            </a>
          </li>
          <li className="block py-[5px] px-[9px] overflow-hidden text-ellipsis">
            <a href="#" className="block max-h-[31px] break-words text-[11px]">
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

export default Category;
