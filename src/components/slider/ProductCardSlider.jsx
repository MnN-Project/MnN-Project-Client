import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import ArrowLeft from "@/assets/svg/arrow-right.svg";

const ProductCardSlider = ({ headingText, images, large }) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
  
    return (
      <section className="mt-s p-2 sm:mt-4 lg:col-span-3 bg-white">
        <h3 className="text-sm lg:text-lg lg:pl-4 pl-2">{headingText}</h3>
        <div className="slider-container">
          <Slider {...settings} className="py-2">
            {images.map((item) => (
              <div key={item.id} className="item aspect-video px-1 text-sm mx-1">
                <article className="w-full h-full">
                  <Link href="#" className="">
                    <div className={`block relative ${large? 'h-[187px]': 'h-[138px]'}`}>
                      <Image
                        className="object-center object-cover rounded-md"
                        src={item.img}
                        alt={item.alt}
                        fill
                        sizes="100%"
                      />
                    </div>
                    <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-xs mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-dark py-2">&#8358; {item.price}</p>
                  </Link>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  function NextArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="p-4 absolute top-1/2 rounded-full hidden sm:block bg-dark/20 hover:bg-dark/50 transition-colors ease-linear duration-500 -right-1 -translate-y-1/2 z-10"
        style={{ ...style }}
      >
        <ArrowRight className="w-4 h-4 stroke-2 stroke-white" />
      </button>
    );
  }
  
  function PrevArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`p-4 absolute top-1/2 hidden sm:block rounded-full bg-dark/20 hover:bg-dark/50 transition-colors ease-linear duration-500 -left-1 -translate-y-1/2 z-10`}
        style={{ ...style }}
      >
        <ArrowLeft className="w-4 h-4 stroke-2 stroke-white rotate-180" />
      </button>
    );
}
  
export default ProductCardSlider;