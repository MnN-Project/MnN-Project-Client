import Link from "next/link";
import Image from "next/image";
import Container from "../container/Container";
import bua from "../../public/Bua.png";
import { Button } from "../button/Button";
const ServiceGroup = () => {
  return (
    <Container className="bg-white flex flex-col">
      <div className="w-full pb-3.7 flex justify-start">
        <div className="pr-s w-24 h-10 overflow-hidden relative flex justify-center items-center">
          <Image
            src={bua}
            className="object-fit object-center inline-block min-w-full min-h-full"
            alt="logo"
            width={100}
            height={42}
          />
        </div>
        <div className="flex-auto">
          <a href="#" className="text-md font-bold text-dark">
            Dangote Group of Companies
          </a>
          <div className="flex text-sm">
            <p className="pr-s">
              Member Since <span className="text-green">2023</span>{" "}
            </p>
            <span className="flex text-green font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1.3 fill-green stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              Verified Seller
            </span>
          </div>
        </div>
        <div className="flex items-end">
          <Button size="sm">View More</Button>
        </div>
      </div>
      {/* more content */}
      <div className="w-full flex h-54">
        <div className="basis-3/5 mr-s relative overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1546627223-50c21f27a669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
            alt=""
            width={767}
            height={220}
            className="group-hover:scale-105 object-cover object-center rounded-md transition-transform ease-linear duration-200"
          />
          <Link
            href="#"
            className="absolute inset-0 bg-overlay text-white w-full h-full"
          >
            <div className="absolute p-m w-full left-0 top-1/2 -translate-y-1/2 max-f-full overflow-hidden flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 pb-2xs"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>Virtual 360 View Of The Factory</span>
            </div>
          </Link>
        </div>
        {/* first */}
        <div className="basis-2/5 flex gap-s">
          <div className="flex-1 relative rounded-md group overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1610891015188-5369212db097?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjdG9yeSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
              alt=""
              width={235}
              height={220}
              className="group-hover:scale-105 object-cover object-center rounded-md transition-transform ease-linear duration-200"
            />
            <Link
              href="#"
              className="absolute inset-0 bg-overlay text-white w-full h-full"
            ></Link>
          </div>
          <div className="flex-1 relative rounded-md group overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1543304376-1ae7c2be5e59?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={235}
              height={220}
              className="group-hover:scale-105 object-cover object-center rounded-md transition-transform ease-linear duration-200"
            />
            <Link
              href="#"
              className="absolute inset-0 bg-overlay text-white w-full h-full"
            ></Link>
          </div>
        </div>
        {/* second */}
      </div>
    </Container>
  );
};

export default ServiceGroup;