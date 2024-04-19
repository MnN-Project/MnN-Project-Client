import Container from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button/Button";

const EventGroup = () => {
  return (
    <Container className="flex-col">
      <div className="text-center relative overflow-hidden w-full">
        <Button size="sm" className="absolute right-0 top-1/2 -translate-y-1/2">
          View More
        </Button>
        <div className="block w-96 mx-auto">
          <Link href="#" className="text-2xl font-bold">
            Trade Shows
          </Link>
          <p className="text-sm text-dark capitalize">
            Event and Shown Outlined for the Year
          </p>
        </div>
      </div>

      <div className="mt-s max-h-120 w-full flex">
        <div className="flex-1 relative overflow-hidden">
          <Link href="#">
            <div className="absolute inset-0 w-full">
              <Image
                src="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlc3RpdmFsfGVufDB8fDB8fHww"
                className="object-cover"
                width={600}
                height={400}
                alt="festival"
              />
              <div className="absolute bottom-0 h-full bg-overlay w-full"></div>
              <div className="w-120 font-semibold text-white absolute left-5 bottom-5 flex flex-col">
                <span className="">MNN 2024</span>
                <span className="">Duration: June 7 - 15, 2024</span>
                <span className="">Location: Nigeria</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative w-15"></div>
        <div className="flex-1">
          <ul className="max-h-120 overflow-hidden space-y-2">
            <li className="h-full inline-block overflow-hidden pb-3.7 w-full">
              <div className="flex relative items-center">
                <div className="w-[30%] max-w-[185px] max-h-[123px] relative overflow-hidden">
                  <Link href="#">
                    <div className="w-full h-full mr-2xs text-center">
                      <Image
                        src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={178}
                        height={134}
                        alt="image"
                        className="object-cover object-center align-middle"
                      />
                    </div>
                  </Link>
                </div>
                {/* center */}
                <div className="pl-s flex-auto group">
                  <span className="whitespace-nowrap text-ellipsis overflow-hidden text-md mb-1.3 block group-hover:text-green transition-colors ease-in-out duration-200 font-bold">
                    Manufacturing Festival
                  </span>
                  <span className="text-sm whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
                    Duration: June 17 - 22, 2024
                  </span>
                  <span className="text-sm whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
                    Location: Nigeria
                  </span>
                </div>
                {/* end */}
              </div>
            </li>
            <li className="h-full inline-block overflow-hidden pb-3.7 w-full">
              <div className="flex relative items-center">
                <div className="w-[30%] max-w-[185px] max-h-[123px] relative overflow-hidden">
                  <Link href="#">
                    <div className="w-full h-full mr-2xs text-center">
                      <Image
                        src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={178}
                        height={134}
                        alt="image"
                        className="object-cover object-center align-middle"
                      />
                    </div>
                  </Link>
                </div>
                {/* center */}
                <div className="pl-s flex-auto group">
                  <span className="whitespace-nowrap text-ellipsis overflow-hidden text-md mb-1.3 block group-hover:text-green transition-colors ease-in-out duration-200 font-bold">
                    Manufacturing Festival
                  </span>
                  <span className="text-sm whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
                    Duration: June 17 - 22, 2024
                  </span>
                  <span className="text-sm whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
                    Location: Nigeria
                  </span>
                </div>
                {/* end */}
              </div>
            </li>
            <li className="h-full inline-block overflow-hidden pb-3.7 w-full">
              <div className="flex relative items-center">
                <div className="w-[30%] max-w-[185px] max-h-[123px] relative overflow-hidden">
                  <Link href="#">
                    <div className="w-full h-full mr-2xs text-center">
                      <Image
                        src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={178}
                        height={134}
                        alt="image"
                        className="object-cover object-center align-middle"
                      />
                    </div>
                  </Link>
                </div>
                {/* center */}
                <div className="pl-s flex-auto group">
                  <span className="whitespace-nowrap text-ellipsis overflow-hidden text-md mb-1.3 block group-hover:text-green transition-colors ease-in-out duration-200 font-bold">
                    Manufacturing Festival
                  </span>
                  <span className="text-sm whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
                    Duration: June 17 - 22, 2024
                  </span>
                  <span className="text-sm whitespace-nowrap overflow-hidden block text-dark-gray group-hover:text-green transition-colors ease-in-out duration-200">
                    Location: Nigeria
                  </span>
                </div>
                {/* end */}
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default EventGroup;
