import Container from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import {Button} from "../button/Button";

const EventGroup = () => {
    return (
        <Container small className="flex-col rounded-md mb-s">
            <div className="relative w-full overflow-hidden text-center">
                <Button
                    size="sm"
                    className="absolute top-1/2 right-0 hidden -translate-y-1/2"
                >
                    View More
                </Button>
                <div className="mx-auto block w-full">
                    {" "}
                    {/** w-96 */}
                    <Link href="#" className="text-2xl font-bold">
                        Trade Shows
                    </Link>
                    <p className="text-sm capitalize text-dark">
                        Event and Shown Outlined for the Year
                    </p>
                </div>
            </div>

            <div className="flex w-full mt-s">
                <div className="relative hidden flex-1 overflow-hidden rounded-md md:block">
                    <Link href="#">
                        <div className="absolute inset-0 w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlc3RpdmFsfGVufDB8fDB8fHww"
                                className="object-cover"
                                fill
                                sizes="100%"
                                alt="festival"
                            />
                            <div className="absolute bottom-0 h-full w-full bg-overlay"></div>
                            <div className="absolute bottom-5 left-5 flex flex-col font-semibold text-white w-120">
                                <span className="">MNN 2024</span>
                                <span className="">Duration: June 7 - 15, 2024</span>
                                <span className="">Location: Nigeria</span>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Image Location */}
                <div className="relative hidden w-[40px] md:block lg:w-15"></div>
                {/* Hover Circle */}
                <div className="flex-1">
                    <ul className="flex flex-col justify-between overflow-hidden min-h-120">
                        <li className="inline-block h-full w-full overflow-hidden pb-3.7">
                            <div className="relative flex items-center">
                                <div className="relative h-32 w-1/3 overflow-hidden max-w-[185px]">
                                    <Link href="#">
                                        <div className="h-full w-full block relative overflow-hidden rounded-md text-center mr-2xs">
                                            <Image
                                                src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                fill
                                                sizes="100%"
                                                alt="image"
                                                className="object-cover"
                                            />
                                        </div>
                                    </Link>
                                </div>
                                {/* center */}
                                <div className="flex-auto pl-s group">
                                      <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-colors duration-200 ease-in-out text-md mb-1.3 group-hover:text-green">
                                        Manufacturing Festival
                                      </span>
                                      <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                                        Duration: June 17 - 22, 2024
                                      </span>
                                      <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                                        Location: Nigeria
                                      </span>
                                </div>
                                {/* end */}
                            </div>
                        </li>
                        <li className="inline-block h-full w-full overflow-hidden pb-3.7">
                            <div className="relative flex items-center">
                                <div className="relative h-32 w-1/3 overflow-hidden max-w-[185px]">
                                    <Link href="#">
                                        <div className="h-full w-full block relative overflow-hidden rounded-md text-center mr-2xs">
                                            <Image
                                                src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                fill
                                                sizes="100%"
                                                alt="image"
                                                className="object-cover"
                                            />
                                        </div>
                                    </Link>
                                </div>
                                {/* center */}
                                <div className="flex-auto pl-s group">
                                      <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-colors duration-200 ease-in-out text-md mb-1.3 group-hover:text-green">
                                        Manufacturing Festival
                                      </span>
                                      <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                                        Duration: June 17 - 22, 2024
                                      </span>
                                      <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                                        Location: Nigeria
                                      </span>
                                </div>
                                {/* end */}
                            </div>
                        </li>
                        <li className="inline-block h-full w-full overflow-hidden">
                            <div className="relative flex items-center">
                                <div className="relative h-32 w-1/3 block overflow-hidden max-w-[185px]">
                                    <Link href="#">
                                        <div className="h-full w-full block relative overflow-hidden rounded-md text-center mr-2xs">
                                            <Image
                                                src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                fill
                                                sizes="100%"
                                                alt="image"
                                                className="object-cover"
                                            />
                                        </div>
                                    </Link>
                                </div>
                                {/* center */}
                                <div className="flex-auto pl-s group">
                                      <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-colors duration-200 ease-in-out text-md mb-1.3 group-hover:text-green">
                                        Manufacturing Festival
                                      </span>
                                      <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                                        Duration: June 17 - 22, 2024
                                      </span>
                                      <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                                        Location: Nigeria
                                      </span>
                                </div>
                                {/* end */}
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Location */}
            </div>
        </Container>
    );
};

export default EventGroup;
