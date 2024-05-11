"use client";
import AuthLayout from "@/layout/AuthLayout";
import { useState } from "react";
import Image from "next/image";

const ResendOTP = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const input = e.target.value;
    setData(input);

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }
  };
  const handleSubmit = () => {
    if (!error) {
      console.log(data);
    } else {
      console.log("Wrong input");
    }
  };

  return (
    <>
      <section className="bg-light-gray">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100dvh] lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-dark"
          >
            <Image
              className="w-8 h-8 mr-2 inline-block"
              width={32}
              height={32}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Made In Nigeria
          </a>
          <div className="w-full bg-white rounded-lg border border-light-gray shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
              <h1 className="text-lg font-bold mb-1 leading-tight tracking-tight text-dark md:text-2xl">
                Resend OTP?
              </h1>
              <p className="text-dark-gray text-sm">
                We’ll send you a One Time Password via this email.
                can’t access your email, you can try{" "}
                <a href="#" className="text-green font-medium">
                  account recovery
                </a>
                .
              </p>
              </div>
              <form className="space-y-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-light-gray border border-gray text-dark sm:text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5"
                    placeholder="Enter your email"
                    required={true}
                  />
                  <span className="text-danger font-light text-sm"></span>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray rounded text-green focus:ring-3 focus:ring-green"
                      required={true}
                    />
                  </div>
                  <div className="ml-3 text-sm w-full">
                    <label
                      htmlFor="terms"
                      className="font-light text-dark-gray"
                    >
                      I agree to MNN {" "}
                      <a
                        className="font-medium ml text-green hover:underline"
                        href="#"
                      >
                        Terms & use{" "}
                      </a>
                      and{" "}
                      <a
                        className="font-medium ml text-green hover:underline"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-block text-white bg-green hover:bg-light-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Send
                </button>
                <a
                  href="/login"
                  className="inline-block ml-3 text-green font-medium text-sm hover:underline text-center"
                >
                  Return to login
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

    {/* <div>
      <AuthLayout title={"Needed Help"} titleLink={"Contact Us"}>
        <div className="">
          <div className=" md:shadow md:mx-10 pb-12 md:mt-10 ">
            <p className="px-2 py-4 text-sm font-bold bg-light-green bg-opacity-[17%] ">
              Resend OTP
            </p>
            <div className="text-center">
              <p className="text-sm my-10 mt-16 px-1 ">
                Enter your email to receive a new OTP
              </p>
              <div>
                <input
                  className=" w-[90%] lg:w-[60%] rounded border-green outline-green border-2 px-3 py-3 placeholder:text-[#6D6868] placeholder:text-base "
                  placeholder="Your Email"
                  onChange={handleChange}
                />
                {error && (
                  <div className="text-[#FF0000] text-sm mt-3">{error}</div>
                )}

                <div>
                  <button
                    onClick={handleSubmit}
                    className="py-3 font-bold rounded text-white bg-green w-[90%] lg:w-[60%] my-5"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </div> */}
    </>
  );
};

export default ResendOTP;
