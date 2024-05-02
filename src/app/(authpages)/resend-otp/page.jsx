"use client";
import AuthLayout from "@/layout/AuthLayout";
import { useState } from "react";

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
    <div>
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
    </div>
  );
};

export default ResendOTP;
