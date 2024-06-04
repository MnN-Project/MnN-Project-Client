"use client";
import React, { useState } from "react";
import Container from "@/components/container/Container";
import Header from "@/components/header/Header";
import Breadcrumb, { BreadCrumbItem } from "@/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import Warning from "@/assets/svg/caution.svg";
import Building from "@/assets/svg/building.svg";
import ReturnPolicy from "@/assets/svg/return_policy.svg";
import TruckDelivery from "@/assets/svg/truck-delivery.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import ArrowLeft from "@/assets/svg/arrow-right.svg";
import SingleProductSlider from "@/components/slider/SingleProductSlider";
import { PromotionLink } from "@/components/slider/SingleProductSlider";
import ProductCardSlider from "@/components/slider/ProductCardSlider";

import Footer from "@/components/footer/Footer";

const ProductItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    alt: "img",
    title: "Modern 12 Inc Circle clock",
    price: "9,999",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img",
    title: "Nixon Camera",
    price: "25,897",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img",
    title: "Modern Cofee",
    price: 450,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    alt: "img",
    title: "Red Drink Non Alcoholic",
    price: "1,500",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    alt: "img",
    title: "Modern 12 Inc Circle clock",
    price: "4,000",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img",
    title: "Nixon Camera",
    price: "3,000",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img",
    title: "Nixon Camera",
    price: "25,897",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img",
    title: "Modern Cofee",
    price: 450,
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    alt: "img",
    title: "Red Drink Non Alcoholic",
    price: "1,500",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    alt: "img",
    title: "Modern 12 Inc Circle clock",
    price: "4,000",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img",
    title: "Nixon Camera",
    price: "3,000",
  },
];
const SingleProduct = () => {
  return (
    <>
      <Header />
      <Container className="max-w-[1184px] mx-auto">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Home & Office" />
          <BreadCrumbItem small href="#" text="Home & Kitchen" />
          <BreadCrumbItem small href="#" text="Wall Clocks" />
          <BreadCrumbItem href="#" text="Luxury Portrait Wall Clock" />
        </Breadcrumb>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
          {/*gap-4 */}
          <div className=" w-full rounded-lg lg:col-span-3">
            {/*max-h-[568px]*/}
            <SingleProductSlider />
            <Link
              href="#"
              className="hidden lg:block capitalize mt-auto p-4 w-full text-xs text-blue bg-white"
            >
              Report incorrect product information
            </Link>
            {/* report incorrect product information*/}
            <section className="sm:mt-4 lg:col-span-3 lg:bg-white">
              <h2 className="uppercase text-xs py-2 lg:py-4 lg:px-2 lg:text-sm border-b-2 border-light-gray">
                product details
              </h2>
              <div className="bg-white">
                <div className="flex items-center justify-between p-2 lg:hidden">
                  <h2>Description</h2>
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="lg:py-6 lg:mx-4">
                  <ul className="list-inside list-disc block p-2 text-xs sm:text-sm">
                    <li>
                      No need to talk much about this amazing clock. One
                      purchase will convince you to buy more and recommend
                      friends and families to our store to buy.
                    </li>
                    <li>
                      This is a luxury portrait wall clock that is made with the
                      best material in the market and is designed to give your
                      living room, office, hotel etc an impeccable beauty that
                      everyone will admire. Do not have any doubt in buying this
                      clock
                    </li>
                    <li>Non-ticking Movement</li>
                    <li className="hidden lg:block">
                      Precise quartz movements to provide accurate time, silent
                      non-ticking sweep seco,nd han,d ensure a good sleeping and
                      work environment. Perfect wall clock for an office,
                      classroom, bedroom, bathroom and any room in your home.
                    </li>
                    <li className="hidden lg:block">Easy to Read</li>
                    <li className="hidden lg:block">
                      Design with large white numbers and hands contrast to the
                      purple face, highly transparent which makes reading the
                      time easy from any angle. The raised number on the dial
                      makes the wall clock look more three-dimensional
                    </li>
                    <li className="hidden lg:block">Unique design</li>
                    <li className="hidden lg:block">
                      The clock is silent so you do not need to worry about the
                      constant ticking of regular clocks when you need some
                      peace to concentrate on your work or enjoy a full night of
                      undisturbed sleep
                    </li>
                    <li className="hidden lg:block">
                      QUIET WALL CLOCK: Non ticking which provides a peaceful
                      and comfortable good sleeping and working environment for
                      you. Noiseless Quartz movement gurantees accurate time.
                    </li>
                    <li className="hidden lg:block">
                      MATERIAL AND SIZE: White background black number
                      ABS-framed wall clock measures 60cm in and 29.8cm wall
                      clock.
                    </li>
                    <li className="hidden lg:block">
                      BATTERIES AND INSTALL: Requires one AA alkaline battery
                      (not included).Back nail slot offers easy installation.
                      All number use 3D large size numbers, making it easier to
                      read, and highlights increase the layering of the clock.
                    </li>
                    <li className="hidden lg:block">
                      MODERN AND STYLISH APPEARANCE DESIGN: With super slim
                      frame, it is a stylish, classic and smart looking wall
                      clock, add fashion elements to your dining ,living,
                      bedrooms ,kitchen, office and meeting room.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/*Product Details*/}
            <ProductCardSlider
              headingText="You may also Like"
              images={ProductItems}
            />
            <ProductCardSlider
              headingText="Customers who viewed this also viewed"
              images={ProductItems}
            />
            {/* Product Item */}
          </div>
          {/* Aside Section */}
          <Aside />
        </div>
        <div className="w-full">
          <div className="h-[335px] w-full rounded-lg">
            <ProductCardSlider
              large
              headingText="More items from this seller"
              images={ProductItems}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="h-[335px] w-full rounded-lg">
            <ProductCardSlider
              large
              headingText="Recently Viewed"
              images={ProductItems}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

const Aside = () => {
  return (
    <div className="max-h-[568px] rounded-lg sm:mt-s lg:mt-0">
      <h2 className="uppercase text-xs py-2 mb-2 lg:hidden">
        Delivery & Returns
      </h2>
      <section className="bg-white p-2">
        <h3 className="text-sm font-semibold">Choose your destination</h3>
        <div className="mt-2">
          <form action="">
            <div className="my-4">
              <label
                htmlFor="State"
                className="block text-sm font-medium text-gray-900 sr-only"
              >
                {" "}
                State{" "}
              </label>
              <select
                name=""
                id=""
                className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
              >
                <option value="">Lagos</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
              </select>
            </div>
            <div className="my-4">
              <label
                htmlFor="Province"
                className="block text-sm font-medium text-gray-900 sr-only"
              >
                {" "}
                Province{" "}
              </label>
              <select
                name=""
                id=""
                className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
              >
                <option value="">Lekki 1 (Bisgop Durosimi)</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
              </select>
            </div>
          </form>
          <div className="">
            <article className="py-2 flex items-start">
              <div className="mr-2 shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h3 className="uppercase text-xs">pickup station</h3>
                  <button className="text-xs text-blue">Details</button>
                </div>
                <div className="text-xs">
                  <p>Delivery Fees &#8358;250</p>
                  <p>
                    Arriving at pickup station between 06 June & 10 June when
                    you order within next 13hrs 23mins
                  </p>
                </div>
              </div>
            </article>
            <article className="py-2 flex items-start">
              <div className="mr-2 shrink-0">
                <TruckDelivery className="w-6 h-6" />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h3 className="uppercase text-xs">Door delivery</h3>
                  <button className="text-xs text-blue">Details</button>
                </div>
                <div className="text-xs">
                  <p>Delivery Fees &#8358;620</p>
                  <p>
                    Ready for delivery between 06 June & 10 June when you order
                    within next 13hrs 23mins
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/*Select menu*/}
        <article className="py-2 flex items-start">
          <div className="mr-2 shrink-0">
            <ReturnPolicy className="w-6 h-6" />
          </div>
          <div className="w-full">
            <h3 className="uppercase text-xs">pickup station</h3>
            <div className="flex justify-between w-full">
              <p className="text-2xs">
                Free return within 7 days for ALL eligible items
              </p>
              <button className="text-xs text-blue">Details</button>
            </div>
          </div>
        </article>
      </section>
      {/*top section aside*/}
      <div className="hidden lg:block mt-s bg-white p-2 sticky top-20">
        <div className="pb-2 border-b-2 border-light-gray">
          <a href="#" className="flex items-center justify-between">
            <h2 className="uppercase text-sm">seller information</h2>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="pb-2">
          <p className="py-2 text-xs">Kingmax Integrated Service</p>
          <div className=" flex items-end justify-between">
            <p className="text-xs inline-block pr-2">
              <span className="block">80% Seller Score</span>
              <span className="block">4994 followers</span>
            </p>
            <a
              href="#"
              className="uppercase text-xs text-white p-2 bg-green hover:bg-light-green transition-colors rounded-sm"
            >
              follow
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-xs mb-2">
              Seller Performance{" "}
              <Warning className="w-6 h-6 inline-block stroke-gray hover:stroke-danger" />
            </h2>
            <PromotionLink
              href="#"
              text="Order Fulfillment Rate: Excellent"
              small
            />
            <PromotionLink href="#" text="Quality Score: Good" small />
            <PromotionLink href="#" text="Customer Rating: Good" small />
          </div>
        </div>
      </div>
      {/*bottom section aside*/}
      <div className="hidden w-full lg:block mt-s bg-white p-2">
        <div className="flex">
          <div className="h-24 w-24 mr-2 relative shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              fill
              sizes="100%"
              alt="img"
            />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-sm">60CM Height 29.8CM...</h3>
            <span className="font-semibold lg:text-xs">&#8358;25,000.00</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm line-through text-dark-gray">
                &#8358;32,000
              </span>
              <span className="before:content-['-'] text-xs text-green bg-light-green/10 min-h-5 px-0.5">
                20%
              </span>
            </div>
          </div>
        </div>
        <form action="" className="mt-2 block">
          <button className="py-2 px-2 w-full rounded-md text-white uppercase text-xs bg-light-green hover:bg-green transition-colors">
            add to cart
          </button>
        </form>
      </div>
      {/*Add to cart aside*/}
    </div>
  );
};

export default SingleProduct;
