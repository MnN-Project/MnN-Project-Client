import Image from "next/image";
const AsideLink = ({
    image,
    mainTitle,
    subTitle,
    id,
  }) => {
    return (
      <li className="h-16 py-3.7 inline-block overflow-hidden" id={id}>
        <a href="#" className="transition-colors delay-150 flex">
          <div className="w-xl h-xl mr-2xs text-center">
            <Image
              src={image}
              width={100}
              height={100}
              alt="image"
              className="object-cover object-center align-middle"
            />
          </div>
          <div className="pt-1.3 max-w-38 group">
            <span className="whitespace-nowrap text-ellipsis overflow-hidden text-sm block group-hover:text-green transition-colors ease-in-out duration-200">
              {mainTitle}
            </span>
            <span className="text-xs whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
              {subTitle}+ Products
            </span>
          </div>
        </a>
      </li>
    );
};
  
export default AsideLink;