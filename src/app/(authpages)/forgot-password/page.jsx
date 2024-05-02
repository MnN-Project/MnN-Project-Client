"use client";
import Link from "next/link";
import { useState } from "react";

const styles = {
  backgroundImage: `url('../../../assets/forgotPwd.png')`,
};

const ForgotPassword = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setData(input);

    if (!/^\S+@\S+\.\S+$/.test(input)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!error) {
      console.log(data);
    } else {
      console.log("there is an error");
    }
  };
  return (
    <div className="bg-white min-h-screen font-montserrat  px-5 lg:px-28 py-6">
      <div className="flex justify-center md:block">
        <p className=" bg-green text-white text-sm md:mb-2 w-fit px-3 py-2 mb-4 font-bold  ">
          MADE IN NIGERIALOGO
        </p>
      </div>

      <p className=" text-right text-sm font-normal mt-9 mb-4  ">
        Need Help? Contact Us
      </p>
      <div className="md:grid grid-cols-2  ">
        <div
          className="py-6 bg-cover bg-center px-7 font-bold text-xl hidden md:block "
          style={styles}
        >
          <div></div>
        </div>
        <div className="shadow md:mx-10 pb-12 ">
          <p className="px-2 py-4 text-sm font-bold bg-light-green bg-opacity-[17%] ">
            Reset Your Password
          </p>
          <div className="text-center">
            <p className="text-sm my-10 mt-16 px-1 ">
              Enter the address associated with your account
            </p>
            <div>
              <input
                className=" w-[90%] lg:w-[60%] rounded border-green outline-green border-2 px-3 py-3 placeholder:text-[#6D6868] placeholder:text-base "
                placeholder="Your Email"
                onChange={handleChange}
                type="email"
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
      <div className="text-center text-sm font-semibold mt-16 hidden md:block">
        <Link href={"#"} className=" hover:text-[#1F7CD1]">
          About Us
        </Link>
        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">
          FAQ
        </Link>

        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">
          Help
        </Link>

        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">
          Complaint
        </Link>

        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
