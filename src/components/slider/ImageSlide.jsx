import React, { useState, useEffect } from "react";
import { cn } from "@/libs/utils";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "shop",
    href: "#",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "beach",
    href: "#",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1630926906914-f98970d8894c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "boat",
    href: "#",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1655611586746-85ebbfc63f92?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <span
        className="absolute top-1/2 left-0 lg:left-s -translate-y-1/2 cursor-pointer z-10"
        onClick={goToPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </span>
      {/* arrow left */}
      <span
        className="absolute top-1/2 right-0 lg:right-s -translate-y-1/2 cursor-pointer z-10"
        onClick={goToNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      {/* arrow right */}
      <div className="flex justify-center absolute bottom-[10%] text-white left-1/2 -translate-x-1/2">
        {slides.map((_, slideIndex) => (
          <span
            key={slideIndex}
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
        <div
          className="w-full h-full rounded-md bg-center bg-cover"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
      </a>
      {/* Images */}
    </div>
  );
};

export default ImageSlide;
