import Image from "next/image";
import Link from "next/link";

const ServiceCardItem = ({image, text}) => {
    return (
        <div className="flex-1">
            <div className="pt-s px-1.3 pb-2xs">
                <Link href="#" className="block h-full w-full">
                    <div className="relative mx-auto h-11 w-11 overflow-hidden rounded-full mb-2xs md:h-20 md:w-20">
                        <div className="relative block w-full h-full">
                            <Image
                                src={image}
                                alt="image"
                                fill
                                sizes="100%"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-center text-sm transition-colors duration-200 ease-in-out text-wrap hover:text-green xs:text-[13.5px]">
                        {text}
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCardItem;
