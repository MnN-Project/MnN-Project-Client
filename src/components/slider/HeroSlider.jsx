"use client";
import HeroTabLinks from "./HeroTabLinks";
import ImageSlide from "./ImageSlide";

const HeroSlider = () => {
    return (
        <div className="flex flex-1 flex-col justify-between min-h-ful lg:basis-3/4">
            <div className="basis-3/4">
                <ImageSlide className={`min-h-44 w-full h-full relative`}/>
            </div>
            {/* Slider */}
            <div className="hidden basis-1/4 mt-2xs md:block">
                <ul className="flex h-full justify-between gap-2xs">
                  
                    <HeroTabLinks
                        firstChild
                        src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        headingText="smart expo"
                        bodyText="Reliable China Suppliers, Recommended at World's Famous Trade Shows."
                    />
                    <HeroTabLinks
                        src="https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZCUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D"
                        bodyText="Secured Trading Service"
                    />
                    <HeroTabLinks
                        src="https://plus.unsplash.com/premium_photo-1669323926579-4b60e62282e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tncm91bmQlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
                        bodyText="Star Suppliers"
                    />
                </ul>
            </div>
        </div>
    );
};

export default HeroSlider;
