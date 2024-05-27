import Image from "next/image";
import {cn} from "@/libs/utils";
import {FaArrowRightLong} from "react-icons/fa6";

const HeroTabLinks = ({firstChild, src, bodyText, headingText}) => {
    return (
        <li className={cn(`basis-1/4 group transition-all ease-in-out delay-200`, {"basis-2/4": firstChild,})}>
            <div className="relative h-full overflow-hidden bg-light-gray">
                <div className={cn(`absolute w-[100px] h-[80px] bottom-0 right-0 translate-y-0`, {
                    "group-hover:translate-y-full transition-transform duration-200 ease-linear w-[150px]":
                    firstChild,
                })}>
                    <Image src={src} fill priority={true} className="object-fit" sizes="100%" alt=""/>
                </div>
                {firstChild && (
                    <span
                        className="absolute h-full uppercase transition-transform duration-200 ease-linear top-s left-s z-2 group-hover:-translate-y-full">
            {headingText}
          </span>
                )}
                <a href="#" className="absolute top-0 left-0 z-40 h-full w-full">
                    <div
                        className={cn(`py-xs px-s text-sm z-10 ${firstChild && "hidden"}`, {
                            "group-hover:block transition-all ease-in-out delay-200":
                            firstChild,
                        })}
                    >
                        <div className="mb-1.3"></div>
                        <div className="font-medium"> {bodyText}</div>
                    </div>
                    <div
                        className={cn(
                            "hidden absolute bottom-2xs left-[20px] transition-all ease-linear duration-200 group-hover:block"
                        )}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </li>
    );
};

export default HeroTabLinks;
