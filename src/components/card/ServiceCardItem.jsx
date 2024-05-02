import Image from "next/image";
import Link from "next/link";

const ServiceCardItem = ({ image, text }) => {
  return (
    <div className="flex-1">
      <div className="pt-s px-1.3 pb-2xs">
        <Link href="#" className="w-full h-full block">
          <div className="rounded-full w-11 h-11 md:w-20 md:h-20 mx-auto overflow-hidden relative mb-2xs">
            <div className="relative">
              <Image
                src={image}
                alt="image"
                width={256}
                height={170}
                className="absolute inset-0"
              />
            </div>
          </div>
          <p className="text-sm xs:text-[13.5px] text-wrap text-center transition-colors ease-in-out duration-200 hover:text-green">
            {text}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardItem;
