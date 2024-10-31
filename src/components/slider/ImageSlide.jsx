import { SliderData } from '@/data/sliderData';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;

const ImageSlide = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (SliderData.length > 0) {
      const intervalRef = setInterval(() => {
        setCurrentIndex((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1));
      }, AUTO_DELAY);

      return () => clearInterval(intervalRef);
    }
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === SliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={`${className} relative overflow-hidden bg-dark`}>
      {/* Left Arrow */}
      <span
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer lg:left-s  bg-dark/30"
        onClick={goToPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </span>

      {/* Right Arrow */}
      <span
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer lg:right-s bg-dark/30  "
        onClick={goToNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </span>

      {/* Dots */}

      {/* Image Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)` // Moves the container left by currentIndex * 100%
        }}
      >
        {SliderData.map((item, index) => (
          <Link
            key={index + 1}
            to={`/product/category/${item?.category || '#'}`}
            className="h-40 w-full lg:h-full flex-shrink-0 relative"
          >
            <div
              className="h-40 lg:h-full w-full bg-cover bg-center object-cover relative"
              style={{ backgroundImage: `url(${item?.img || ''})` }}
            >
              <div className="flex flex-col text-white absolute left-3 lg:left-8 top-[25%] gap-1 lg:gap-4 w-[60%] flex-wrap  px-5">
                <h3 className="text-sm lg:text-[40px] font-extrabold">{item.title} </h3>
                <p className="text-2xs lg:text-md">{item.subtitle}</p>
                <div className="text-left">
                  <button className="bg-white hidden lg:block text-dark py-1 px-3 rounded-full hover:bg-transparent ring-1 ring-white hover:text-white text-sm transition-all duration-300 ease-in-out">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
