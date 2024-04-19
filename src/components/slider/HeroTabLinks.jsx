import Image from "next/image";
import { cn } from "@/libs/utils";
const HeroTabLinks = ({ firstChild, src, bodyText, headingText }) => {
  return (
    <li
      className={cn(
        `h-[123px] basis-1/4 group transition-all ease-in-out delay-200`,
        {
          "basis-2/4": firstChild,
        }
      )}
    >
      <div className="bg-light-gray h-full relative overflow-hidden">
        <div className={cn(`absolute w-[100px] h-[80px] bottom-0 right-0 translate-y-0`, {
            "group-hover:translate-y-full transition-transform duration-200 ease-linear w-[150px]":
              firstChild,
          })}>
        <Image
          src={src}
          width={150}
          height={80}
          style={{ width: "150", height: "80" }}
          alt=""
        />
        </div>
        {firstChild && (
          <span className="absolute top-s left-s h-full transition-transform ease-linear duration-200 uppercase z-2 group-hover:-translate-y-full">
            {headingText}
          </span>
        )}
        <a href="#" className="absolute top-0 left-0 w-full h-full z-40">
          <div className={cn(`py-xs px-s text-sm z-10 ${firstChild && 'hidden'}`,
              {
                "group-hover:block transition-all ease-in-out delay-200": firstChild,
              }
            )}
          >
            <div className="mb-1.3"></div>
            <div className="font-medium"> {bodyText}</div>
          </div>
          <div className={cn("hidden absolute bottom-2xs left-s", "transition-all ease-linear duration-200 group-hover:block")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
