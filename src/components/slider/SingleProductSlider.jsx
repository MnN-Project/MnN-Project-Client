"use client";
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Facebook from "@/assets/svg/facebook.svg";
import Twitter from "@/assets/svg/twitter.svg";
import Warning from "@/assets/svg/caution.svg";
import Heart from "@/assets/svg/heart.svg";
import Star from "@/assets/svg/star.svg";
import ArrowLeft from "@/assets/svg/arrow-right.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";

const Images = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "shoe"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjb21tZXJlYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        alt: "airpods"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVjb21tZXJlYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        alt: "Old camera"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1493156624194-053884f699d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        alt: "Camera caterage"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1537173345263-7de56a323095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        alt: "Nixon"
    },
];

const SingleProductSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleNext = () => {
        setImageIndex(index => {
            if (index === Images.length - 1) return 0;
            return index + 1;
        })
    }

    const handlePrev = () => {
        setImageIndex(index => {
            if (index === 0) return Images.length - 1;
            return index - 1;
        })
    }

    return (
        <div className="sm:grid sm:grid-cols-4 sm:gap-4 lg:bg-white lg:p-4">
            <div className="sm:col-span-2">
                <div className="bg-gray h-full min-h-[335px] lg:max-h-[305px] lg:mb-2 w-full block relative">
                    <button onClick={handlePrev}
                            className="p-4 absolute top-1/2 lg:hidden rounded-full bg-dark/20 hover:bg-dark/50 transition-colors ease-linear duration-500 left-2 -translate-y-1/2 z-10">
                        <ArrowLeft className="w-4 h-4 stroke-2 stroke-white rotate-180"/>
                    </button>
                    <div className="flex min-h-[335px] shrink-0 sm:h-full w-full overflow-hidden">
                        {Images.map((item) => (
                            <Link key={item.id} href="#"
                                  className={`min-h-full w-full relative shrink-0 grow-0 block ease-in-out duration-300`}
                                  style={{
                                      translate: `${-100 * imageIndex}%`,
                                      transition: 'translate 300ms ease-in-out'
                                  }}>
                                <Image
                                    src={item.img}
                                    fill
                                    className="object-cover object-center"
                                    sizes="100%"
                                    alt="image"
                                />
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="p-4 absolute top-1/2 rounded-full lg:hidden bg-dark/20 hover:bg-dark/50 transition-colors ease-linear duration-500 right-2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 stroke-2 stroke-white"/>
                    </button>
                </div>
                {/* Single Product Image*/}
                <div className="hidden lg:block mb-2">
                    <div className="scroll flex items-center gap-1 justify-start">
                        {Images.map((item, index) => (
                            <button key={index} onClick={() => setImageIndex(index)} className={`h-12 w-12 block relative bg-gray cursor-pointer ${index === imageIndex && 'ring-2 ring-green'}`}>
                            <Image
                            src={item.img}
                            fill sizes="100%" alt={item.alt}/>
                            </button>
                        ))}
                    </div>
                </div>
                {/*Single Product Navigation*/}
                <div className="hidden lg:block">
                    <h2 className="uppercase text-sm py-2 border-t-2 border-light-gray">share this
                        product</h2>
                    <div className="py-2">
                        <button className="shrink-0">
                            <Facebook/>
                        </button>
                        <button className="shrink-0 ml-2">
                            <Twitter/>
                        </button>
                    </div>
                </div>
                {/*Single Product socials*/}
            </div>
            {/*Product Image*/}
            <div className="mt-2 sm:mt-0 sm:col-span-2">
                <article className="bg-white p-2 relative">
                    <h1 className="text-sm lg:mr-8 lg:text-lg">60CM Height 29.8CM Width Luxury Portrait
                        Wall
                        Clock/Silent
                        Movement</h1>
                    <div className="mt-2 flex space-x-2">
                        <span className="font-semibold lg:text-2xl">&#8358;25,000</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm line-through text-dark-gray">&#8358;32,000</span>
                            <span
                                className="before:content-['-'] text-xs text-green bg-light-green/10 min-h-5 px-0.5">20%</span>
                        </div>
                    </div>
                    <p className="mt-2 text-xs text-danger"><Warning
                        className="w-[14px] h-[14px] inline-block"/> 7 units left</p>
                    <div className="mt-2">
                        <span className="text-xs">+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</span>
                        <button className="text-xs text-blue lg:hidden">See options</button>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="flex space-x-[0.5]">
                            <StarRating/>
                            <StarRating/>
                            <StarRating/>
                            <StarRating/>
                            <StarRating half/>
                        </div>
                        {/*star rating*/}
                        <Link href="#" className="text-blue text-xs ml-1">(42 verified ratings)</Link>
                        {/*link*/}
                        <div
                            className="ml-auto p-2 rounded-full hover:bg-green/10 lg:absolute lg:top-0 lg:right-0">
                            <Heart className="h-5 w-5 stroke-2 stroke-green"/>
                        </div>
                        {/*favourite*/}
                    </div>
                    <button
                        className="hidden lg:block mt-s mb-2 w-full text-sm hover:bg-light-green transition-colors uppercase px-4 py-3 rounded-md bg-green text-white">
                        add to cart
                    </button>
                    {/*Button*/}
                </article>
                {/* Article */}
                <section className="">
                    <h2 className="uppercase text-xs lg:text-sm py-2 border-t-2 border-light-gray">promotions</h2>
                    <div className="bg-white">
                        <div className="text-xs p-2">
                            <PromotionLink href="#" text="Call 07006000000 To Place Your Order"/>
                            <PromotionLink href="#"
                                           text="Need extra money? Loan up to N500,000 on the JumiaPay Android app."/>
                            <PromotionLink href="#"
                                           text=" Enjoy cheaper shipping fees when you select a PickUp Station at checkout."/>
                        </div>
                    </div>
                </section>
                {/* Description */}
            </div>
            {/*Product description*/}
        </div>
    )
};

export const StarRating = ({half}) => {
    return (
        half ? (
            <svg
                width="200"
                height="200"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                className="w-5 h-5"
            >
                <defs>
                    <clipPath id="left-half">
                        <rect x="0" y="0" width="12" height="24"/>
                    </clipPath>
                    <clipPath id="right-half">
                        <rect x="12" y="0" width="12" height="24"/>
                    </clipPath>
                </defs>

                <path
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    className="fill-gold"
                    fill="currentColor"
                    clipPath="url(#left-half)"
                />

                <path
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    className="fill-gray"
                    fill="currentColor"
                    clipPath="url(#right-half)"
                />
            </svg>
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="0.1"
                stroke="currentColor"
                className="w-5 h-5 fill-gold"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
            </svg>
        )
    );
};

export const PromotionLink = ({href, text, small}) => {
    return (
        <Link href={href} className="py-1 flex items-center gap-1">
             <span
                 className={`inline-flex mr-2 bg-light-green ${small ? "h-4 w-4" : "h-6 w-6"} shrink-0 rounded-full items-center justify-center`}>
                 <Star className={`fill-white ${small ? "h-3 w-3" : "h-4 w-4"}`}/>
             </span>
            <span className={`inline-block ${small ? "text-xs " : "text-blue"}`}>{text}</span>
        </Link>
    )
}

export default SingleProductSlider;