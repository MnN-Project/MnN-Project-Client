import React, {useState, useEffect} from "react";
import {cn} from "@/libs/utils";

const slides = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "shop",
        href: "#",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "beach",
        href: "#",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        title: "boat",
        href: "#",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        title: "house",
        href: "#",
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "house",
        href: "#",
    },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const ImageSlide = ({className}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setCurrentIndex((pv) => {
                if (pv === slides.length - 1) {
                    return 0;
                }
                return pv + 1;
            });
        }, AUTO_DELAY);
        return () => clearInterval(intervalRef);
    }, []);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className={className}>
          <span className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer lg:left-s" onClick={goToPrevious}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 stroke-white">
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </span>
            {/* arrow left */}
            <span className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer lg:right-s" onClick={goToNext}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 stroke-white">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
             </span>
            {/* arrow right */}
            <div className="absolute left-1/2 flex -translate-x-1/2 justify-center text-white bottom-[10%]">
                {slides.map((_, slideIndex) => (
                    <span key={slideIndex}
                          className={cn(
                              `mx-0.5 h-3 w-3 bg-white cursor-pointer rounded-full border border-white z-50`,
                              {
                                  "bg-green": currentIndex === slideIndex,
                              }
                          )}
                          onClick={() => goToSlide(slideIndex)}
                    ></span>
                ))}
            </div>
            {/* Dots */}
            <a href={`${slides[currentIndex].href}`} className="z-0">
                <div className="h-full w-full rounded-md bg-cover bg-center" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
            </a>
            {/* Images */}
        </div>
    );
};

export default ImageSlide;
