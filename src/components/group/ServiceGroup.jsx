import Link from "next/link";
import Image from "next/image";
import Container from "../container/Container";
import bua from "../../../public/assets/Bua.png";
import {Button} from "../button/Button";

const ServiceGroup = () => {
    return (
        <Container small className="flex flex-col bg-white">
            <div className="flex w-full justify-start pb-3.7">
                <div className="relative flex h-10 w-24 items-center justify-center overflow-hidden pr-s">
                    <Image
                        src={bua}
                        className="inline-block object-center object-fit"
                        alt="logo"
                        priority={true}
                        fill
                        sizes="100%"
                    />
                </div>
                <div className="flex-auto">
                    <a href="#" className="text-sm font-bold text-dark md:text-md">
                        Dangote Group of Companies
                    </a>
                    <div className="flex text-sm">
                        <p className="pr-s">
                            Member Since <span className="text-green">2023</span>
                        </p>
                        <span className="hidden font-medium text-green xs:flex">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6 stroke-white pr-1.3 fill-green">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                            />
                          </svg>
                          Verified Seller
                        </span>
                    </div>
                </div>
                <div className="hidden items-end md:flex">
                    <Button size="sm" className="">
                        View More
                    </Button>
                </div>
            </div>
            {/* more content */}
            <div className="flex w-full flex-col gap-s md:h-54 md:flex-row">
                <div className="relative h-32 w-full overflow-hidden rounded-md group md:h-auto md:basis-3/5">
                    <Image
                        src="https://images.unsplash.com/photo-1546627223-50c21f27a669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="100%"
                        className="object-cover object-left-bottom transition-transform duration-200 ease-linear group-hover:scale-105"
                    />
                    <Link
                        href="#"
                        className="absolute inset-0 h-full w-full text-white bg-overlay"
                    >
                        <div
                            className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 flex-col items-center overflow-hidden p-m max-f-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-12 w-12 pb-2xs"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                            <span>Virtual 360 View Of The Factory</span>
                        </div>
                    </Link>
                </div>
                {/* first */}
                <div className="flex h-32 w-full gap-s md:h-auto md:basis-2/5">
                    <div className="relative basis-1/2 overflow-hidden rounded-md group">
                        <Image
                            src="https://images.unsplash.com/photo-1610891015188-5369212db097?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjdG9yeSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
                            alt=""
                            fill
                            sizes="100%"
                            className="absolute top-0 left-0 h-full w-full object-cover object-left-bottom transition-transform duration-200 ease-linear group-hover:scale-105"
                        />
                        <Link
                            href="#"
                            className="absolute inset-0 h-full w-full text-white bg-overlay"
                        ></Link>
                    </div>
                    <div className="relative h-full w-full basis-1/2 overflow-hidden rounded-md group">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1714510332305-a7f0eae24adf?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            fill
                            sizes="100%"
                            className="h-full w-full object-cover object-left-bottom transition-transform duration-200 ease-linear group-hover:scale-105"
                        />
                        <Link
                            href="#"
                            className="absolute inset-0 h-full w-full text-white bg-overlay"
                        ></Link>
                    </div>
                </div>
                {/* second */}
            </div>
        </Container>
    );
};

export default ServiceGroup;
