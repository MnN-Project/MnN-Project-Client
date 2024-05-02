import Image from "next/image";
const ProductListCard = ({ image, text, item }) => {
  return item ? (
    <div className="relative border border-light-gray w-1/2 sm:w-1/4">
      <div className="relative block pt-m px-m pb-xs group">
        <div className="text-u-base leading-6 h-12 overflow-hidden z-2 text-wrap group-hover:text-green text-dark transition-colors ease-in-out delay-150">
          {text}
        </div>
        <div className="text-right -mt-6">
          <div className="w-30 h-30 inline-block overflow-hidden">
            <div className="relative w-full text-center pt-full overflow-hidden ">
              <Image
                src={image}
                className="transition-transform object-cover object-left-bottom ease-in-out delay-150 absolute right-0 bottom-0 group-hover:scale-105"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="px-2xs mb-s w-1/3 md:w-[16.6%] group">
      <a href="#" className="block w-full h-full group-hover:text-green">
        <div className="relative max-w-180 mx-auto mb-2xs">
          <div className="text-center w-full relative rounded-md overflow-hidden pt-full">
            <Image
              src={image}
              className="group-hover:scale-105 object-cover object-center transition-transform delay-150 ease-in-out absolute top-0 left-0 bottom-0 right-0 rounded-md"
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
