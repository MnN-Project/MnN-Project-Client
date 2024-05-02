import Image from "next/image";
import Link from "next/link";
const ServiceCard = ({ children, src, headingText, bodyText }) => {
  return (
    <div className="mt-s w-full xs:w-1/2 lg:w-1/4 px-2xs">
      <div className="bg-white shadow-lg rounded-md overflow-hidden">
        <div className="relative h-54">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden text-right">
            <Image
              src={src}
              alt="image"
              width={227}
              height={416}
              priority={true}
              className="object-fit"
            />
          </div>
          <div className="absolute left-0 top-0 w-full h-full background-overlay"></div>
          <Link
            href="#"
            className="relative block w-full h-full py-m pr-10.2 pl-m transition-background duration-300 ease-out"
            style={{ background: "rgba(0,0,0,.3)" }}
          >
            <h3 className="text-white mb-s font-medium text-2xl leading-[30px]">
              {headingText}
            </h3>
            <div className="text-white text-sm w-7/12">{bodyText}</div>
          </Link>
        </div>
        <div className="px-2xs pb-s border border-gray flex flex-wrap">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
