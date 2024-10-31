'use client';
import HeroTabLinks from './HeroTabLinks';
import ImageSlide from './ImageSlide';

export const HeroSlider = () => {
  return (
    <div className="flex flex-1 flex-col justify-between min-h-ful lg:basis-3/4 ">
      <div className="basis-3/4 ">
        <ImageSlide className={'w-full h-full relative'} />
      </div>
      {/* Slider */}
      <div className="basis-1/4 mt-3 hidden lg:block">
        <ul className="flex h-full justify-between gap-2xs">
          <HeroTabLinks
            firstChild
            src="/assets/solid.jpg"
            headingText="NARMDA EXPO"
            bodyText="National Raw Materials Dealers (NARMDA)"
          />
          <HeroTabLinks src="/assets/sourcing.jpg" bodyText="Secured Trading Service" />
          <HeroTabLinks src="/assets/clean.png" bodyText="West African Clean Energy" />
        </ul>
      </div>
    </div>
  );
};
