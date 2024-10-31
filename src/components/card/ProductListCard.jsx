import { Link } from 'react-router-dom';

const ProductListCard = ({ image, text, item, to, className }) => {
  return item ? (
    <div className="relative w-1/2 border border-t-0 border-l-0 border-gray/30 sm:w-1/4">
      <div className="relative block pt-m px-m pb-xs group">
        <div className="h-12 overflow-hidden leading-6 transition-colors delay-150 ease-in-out text-u-base z-2 text-wrap text-dark group-hover:text-green">
          {text}
        </div>
        <div className="-mt-6 text-right">
          <div className="inline-block overflow-hidden w-30 h-30">
            <Link to={`${to}`}>
              <div className="relative w-full overflow-hidden text-center pt-full">
                <img
                  src={image}
                  className={`absolute right-0 bottom-0 object-cover object-left-bottom transition-transform delay-150 ease-in-out group-hover:scale-105 cursor-pointer ${className}`}
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
      <Link to={`${to}`} className="block h-full w-full group-hover:text-green">
        <div className="relative mx-auto max-w-180 mb-2xs">
          <div className="relative w-full h-40 rounded-md text-center p-6 flex items-center justify-center ">
            <img
              src={image}
              className="absolute m-auto rounded-md object-cover object-center transition-transform delay-150 ease-in-out group-hover:scale-105 w-[100px] h-[100px]"
              width={400}
              height={400}
              alt="Image Photo"
            />
          </div>
        </div>
        <div className="block text-center text-sm capitalize transition-colors delay-150 ease-in-out group-hover:text-green">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default ProductListCard;
