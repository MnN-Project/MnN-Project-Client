import { Link } from 'react-router-dom';
import { Container } from '../container/Container';
import { Button } from '../button/Button';

const EventGroup = () => {
  return (
    <Container small className="flex-col rounded-md mb-s">
      <div className="relative w-full overflow-hidden text-center">
        <Button size="sm" className="absolute top-1/2 right-0 hidden -translate-y-1/2">
          View More
        </Button>
        <div className="mx-auto block w-full">
          {' '}
          {/** w-96 */}
          <Link to="#" className="text-2xl font-bold">
            Trade Shows
          </Link>
          <p className="text-sm capitalize text-dark">Event and Shown Outlined for the Year</p>
        </div>
      </div>

      <div className="flex w-full mt-s">
        <div className="relative hidden flex-1 overflow-hidden rounded-md md:block">
          <Link to="https://www.agrofood-nigeria.com/" target="_blank">
            <div className="absolute inset-0 w-full">
              <img
                src="/assets/Agrofood.JPG"
                className="object-cover"
                sizes="100%"
                alt="festival"
              />
              <div className="absolute bottom-0 h-full w-full bg-overlay"></div>
              <div className="absolute bottom-5 left-5 flex flex-col font-semibold text-white w-120">
                <span className="capitalize">agrofood Nigeria 2025</span>
                <span className="">Duration: March 25, 2025 - March 27, 2025</span>
                <span className="">Location: Landmark Event Center, Lagos Nigeria</span>
              </div>
            </div>
          </Link>
        </div>
        {/* Image Location */}
        <div className="relative hidden w-[40px] md:block lg:w-15"></div>
        {/* Hover Circle */}
        <div className="flex-1">
          <ul className="flex flex-col justify-between overflow-hidden min-h-120">
            <li className="inline-block h-full w-full overflow-hidden pb-3.7">
              <div className="relative flex items-center">
                <div className="relative h-32 w-1/3 overflow-hidden max-w-[185px]">
                  <Link to="https://www.rmrdc.gov.ng/" target="_blank">
                    <div className="h-full w-full block relative overflow-hidden rounded-md text-center mr-2xs">
                      <img
                        src="/assets/solid.jpg"
                        sizes="100%"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>
                {/* center */}
                <div className="flex-auto pl-s group">
                  <Link to="https://www.rmrdc.gov.ng/" target="_blank">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-colors duration-200 ease-in-out text-md mb-1.3 group-hover:text-green">
                      National Raw Materials <br /> Dealers (NARMDA)
                    </span>
                  </Link>
                  <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                    Date: Thu, 10 Oct 2024
                  </span>
                  <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                    Location: Abuja Nigeria
                  </span>
                </div>
                {/* end */}
              </div>
            </li>
            <li className="inline-block h-full w-full overflow-hidden pb-3.7">
              <div className="relative flex items-center">
                <div className="relative h-32 w-1/3 overflow-hidden max-w-[185px]">
                  <Link to="https://wacee.net/" target="_blank">
                    <div className="h-full w-full block relative overflow-hidden rounded-md text-center mr-2xs">
                      <img
                        src="/assets/clean.png"
                        sizes="100%"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>
                {/* center */}
                <div className="flex-auto pl-s group">
                  <Link to="https://wacee.net/" target="_blank">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-colors duration-200 ease-in-out text-md mb-1.3 group-hover:text-green">
                      West African Clean <br /> Energy & Environment
                      <br /> Trade Fair & Conference
                    </span>
                  </Link>
                  <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                    Duration: 08 - 09 Oct 2024 (Live)
                  </span>
                  <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                    Location: Lagos Nigeria
                  </span>
                </div>
                {/* end */}
              </div>
            </li>
            <li className="inline-block h-full w-full overflow-hidden">
              <div className="relative flex items-center">
                <div className="relative h-32 w-1/3 block overflow-hidden max-w-[185px]">
                  <Link to="https://www.nisecexpo.com/" target="_blank">
                    <div className="h-full w-full block relative overflow-hidden rounded-md text-center mr-2xs">
                      <img
                        src="/assets/expo1.png"
                        sizes="100%"
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>
                {/* center */}
                <div className="flex-auto pl-s group">
                  <Link to="https://www.nisecexpo.com/" target="_blank">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-colors duration-200 ease-in-out text-md mb-1.3 group-hover:text-green">
                      Nigeria Security Expo <br /> (NISECExpo)
                    </span>
                  </Link>
                  <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                    Duration: 15 - 17 Oct 2024
                  </span>
                  <span className="block overflow-hidden whitespace-nowrap text-sm transition-colors duration-200 ease-in-out text-dark-gray group-hover:text-green">
                    Location: Abuja Nigeria
                  </span>
                </div>
                {/* end */}
              </div>
            </li>
          </ul>
        </div>
        {/* Location */}
      </div>
    </Container>
  );
};

export default EventGroup;
