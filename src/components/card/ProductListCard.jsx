import Image from "next/image";
import Link from "next/link";

const ProductListCard = ({image, text, item}) => {
    return item ? (
      <div className="relative w-1/2 border border-t-0 border-l-0 border-light-gray sm:w-1/4">
        <div className="relative block pt-m px-m pb-xs group">
          <div className="h-12 overflow-hidden leading-6 transition-colors delay-150 ease-in-out text-u-base z-2 text-wrap text-dark group-hover:text-green">
            {text}
          </div>
          <div className="-mt-6 text-right">
            <div className="inline-block overflow-hidden w-30 h-30">
              <Link href="/product">
                <div className="relative w-full overflow-hidden text-center pt-full">
                  <Image
                    src={image}
                    className="absolute right-0 bottom-0 object-cover object-left-bottom transition-transform delay-150 ease-in-out group-hover:scale-105 cursor-pointer"
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="w-1/3 px-2xs mb-s group md:w-[16.6%]">
        <a href="#" className="block h-full w-full group-hover:text-green">
          <div className="relative mx-auto max-w-180 mb-2xs">
            <div className="relative w-full overflow-hidden rounded-md text-center pt-full">
              <Image
                src={image}
                className="absolute top-0 right-0 bottom-0 left-0 rounded-md object-cover object-center transition-transform delay-150 ease-in-out group-hover:scale-105"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="block text-center text-sm capitalize transition-colors delay-150 ease-in-out group-hover:text-green">
            {text}
          </div>
        </a>
      </div>
    );
};

export default ProductListCard;
