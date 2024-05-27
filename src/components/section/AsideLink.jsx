import Image from "next/image";

const AsideLink = ({image, mainTitle, subTitle, id,}) => {
    return (
        <li className="inline-block h-16 overflow-hidden py-3.7" id={id}>
            <a href="#" className="flex transition-colors delay-150">
                <div className="text-center h-[60px] w-[60px] relative block mr-2xs">
                    <Image
                        src={image}
                        fill
                        alt="image"
                        sizes="100%"
                        className="object-cover object-center align-middle"
                    />
                </div>
                <div className="pt-1.3 max-w-38 group">
                    <span
                        className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm transition-colors duration-200 ease-in-out group-hover:text-green">
                      {mainTitle}
                    </span>
                    <span className="block overflow-hidden whitespace-nowrap text-xs transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                      {subTitle}+ Products
                    </span>
                </div>
            </a>
        </li>
    );
};

export default AsideLink;