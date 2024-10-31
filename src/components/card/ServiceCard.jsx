import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ children, src, headingText, bodyText }) => {
  return (
    <div className="w-full mt-s px-2xs xs:w-1/2 lg:w-1/4">
      <div className="overflow-hidden rounded-md bg-white shadow-lg">
        <div className="relative h-54">
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden text-right">
            <img src={src} alt="image" fill sizes="100%" className="object-fit" />
          </div>
          <div className="absolute top-0 left-0 h-full w-full background-overlay"></div>
          <Link
            to="#"
            className="relative block h-full w-full duration-300 ease-out py-m pr-10.2 pl-m transition-background"
            style={{ background: 'rgba(0,0,0,.3)' }}
          >
            <h3 className="text-2xl font-medium text-white mb-s leading-[30px]">{headingText}</h3>
            <div className="w-7/12 text-sm text-white">{bodyText}</div>
          </Link>
        </div>
        <div className="flex flex-wrap border px-2xs pb-s border-gray">{children}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
