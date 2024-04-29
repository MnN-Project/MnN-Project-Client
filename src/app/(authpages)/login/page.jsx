"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import img3 from "@/public/images/img3.jpg";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .trim()
      .required("Please enter your email address*"),
    password: Yup.string().trim().required("Please enter password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      //  handleSubmit(values);
    },
  });

  return (
    <main className="w-full pt-7 md:pt-8 pb-5">
      <div className="w-[85%] mx-auto mb-5">
        <button className="px-3 md:px-6 mb-5 md:mb-0 py-2 md:py-3 text-[12px] md:text-sm font-bold tracking-wide text-white bg-green">
          MADE IN NIGERIALOGO
        </button>
      </div>

      <div className="w-[85%] md:w-[70%] mx-auto mt-1 mb-2 flex gap-1 justify-end text-sm md:text-base font-normal font-montserrat text-dark">
        <p>New User?</p>
        <Link
          href="/register"
          className="text-green hover:text-[#308868ed] font-medium cursor-pointer transition-all ease-linear duration-150"
        >
          Sign Up
        </Link>
        <p>Now</p>
      </div>

      <div className="w-[85%] md:w-full mx-auto md:mx-0 md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:w-[70%] md:h-[550px] block md:flex bg-white">
          <div className="md:basis-[50%] rounded-sm shadow-md">
            <div className="w-full h-[200px] md:h-full relative">
              <div>
                <Image
                  src={img3}
                  alt="laptop bg"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-full h-full flex flex-col md:items-center md:justify-center">
                <div className="z-20 pl-4 md:pl-0 pt-4 md:pt-0">
                  <div className="md:w-fit rounded-sm">
                    <h2 className="text-green text-sm md:text-2xl font-bold font-montserrat">
                      Top Deals!
                    </h2>
                    <h2 className="text-dark-gray text-sm md:text-lg font-bold font-montserrat">
                      This Coming Week...
                    </h2>
                    <h3 className="mt-2 md:mt-5 mb-4 md:mb-0 text-sm md:text-md font-bold font-montserrat">
                      Enjoy Our{" "}
                      <span className="text-green">Unlimited Offers</span>
                    </h3>
                  </div>

                  <div className="w-full mt-3 flex justify-end absolute md:relative bottom-0 right-0 md:bottom-auto md:right-auto">
                    <div className="w-fit px-3 md:px-0 md:w-[320px] md:h-[140px] grid place-content-center bg-[#0c6a478a]">
                      {/* bg-[#00000057] */}
                      <ul className="p-3 text-[8px] md:text-sm text-white list-disc tracking-wide font-medium">
                        <li>Unlimited Posting </li>
                        <li className="py-1">Featured products</li>
                        <li>Available on Search Engine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:basis-[50%] mt-8 md:mt-0 pb-10 md:pb-0 flex flex-col justify-center items-center bg-white rounded-sm shadow-md">
            <form className="w-[85%] md:w-[70%] flex flex-col items-center justify-center">
              <h1 className="text-base md:text-lg md:mb-5 text-[#000000] font-bold">
                Sign in here
              </h1>

              <div className="w-full mt-6 relative">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-[13px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-[13px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-[#ff0000] text-[13px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>

              <div className="w-full mt-6 relative">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-[#ff0000] text-[13px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              <div className="w-full mt-3 md:mt-5 mb-6 text-right">
                <Link href="/forgot-password" >
                  <p className="text-dark-gray text-base font-normal font-montserrat">
                    Forgot Password?
                  </p>
                </Link>
              </div>

              <button
                type="submit"
                className="block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 bg-green text-white px-4 text-[12px] md:text-sm font-bold border-green rounded-full shadow-sm tracking-wide hover:bg-[#298060] cursor-pointer transition-all ease-linear duration-300"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="px-10 md:px-0 flex items-center gap-1 md:gap-2 justify-center">
          <Link
            href="/about-us"
            className="text-dark text-[12px] md:text-sm font-normal font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
          >
            About Us
          </Link>
          <div className="text-pinkish-gray">|</div>
          <Link
            href="/faq"
            className="text-dark text-[12px] md:text-sm font-normal font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
          >
            FAQ
          </Link>
          <div className="text-pinkish-gray">|</div>
          <Link
            href="/help"
            className="text-dark text-[12px] md:text-sm font-normal font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
          >
            Help
          </Link>
          <div className="text-pinkish-gray">|</div>
          <Link
            href="/complaint"
            className="text-dark text-[12px] md:text-sm font-normal font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
          >
            Complaint
          </Link>
          <div className="text-pinkish-gray">|</div>
          <Link
            href="/contact"
            className="text-dark text-[12px] md:text-sm font-normal font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
