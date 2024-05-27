"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .trim()
      .required("Please enter your email address*"),
    password: Yup.string().trim().required("Please enter password"),
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/,
    //   "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character, no spaces"
    // )

    confirmPassword: Yup.string()
      .trim()
      .required("Please confirm your password"),
    // .test("password-match", "Password must match", function (value) {
    //   return this.parent.password === value;
    // }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      //  handleSubmit(values);
    },
  });

  return (
    <main className="w-full pt-7 pb-5 md:pt-8">
      <div className="mx-auto mb-5 w-[85%]">
        <button className="mb-5 px-3 py-2 font-bold tracking-wide text-white text-[12px] bg-green md:mb-0 md:px-6 md:py-3 md:text-sm">
          MADE IN NIGERIALOGO
        </button>
      </div>

      <div className="mx-auto mt-1 mb-2 flex justify-end gap-1 text-sm font-normal w-[85%] font-montserrat text-dark md:w-[70%] md:text-base">
        <p>Already a member?</p>
        <Link
          href="/login"
          className="text-green hover:text-[#308868ed] font-medium cursor-pointer transition-all ease-linear duration-150"
        >
          Sign in
        </Link>
      </div>

      <div className="mx-auto w-[85%] md:mx-0 md:flex md:w-full md:flex-col md:items-center md:justify-center">
        <div className="block bg-white md:w-[70%] md:h-[550px] md:flex">
          <div className="rounded-sm shadow-md md:basis-[50%]">
            <div className="relative w-full h-[200px] md:h-full">
              <div>
                <Image
                  src={``}
                  alt="laptop bg"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex h-full w-full flex-col md:items-center md:justify-center">
                <div className="z-20 pt-4 pl-4 md:pt-0 md:pl-0">
                  <div className="rounded-sm md:w-fit">
                    <h2 className="text-sm font-bold text-green font-montserrat md:text-2xl">
                      Top Deals!
                    </h2>
                    <h2 className="text-sm font-bold text-dark-gray font-montserrat md:text-lg">
                      This Coming Week...
                    </h2>
                    <h3 className="mt-2 mb-4 text-sm font-bold font-montserrat md:mt-5 md:mb-0 md:text-base">
                      Enjoy Our{" "}
                      <span className="text-green">Unlimited Offers</span>
                    </h3>
                  </div>

                  <div className="absolute right-0 bottom-0 mt-3 flex w-full justify-end md:relative md:right-auto md:bottom-auto">
                    <div className="w-fit px-3 md:px-0 md:w-[320px] md:h-[140px] grid place-content-center bg-[#0c6a478a]">
                      {/* bg-[#00000057] */}
                      <ul className="list-disc p-3 font-medium tracking-wide text-white text-[8px] md:text-sm">
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

          <div className="mt-8 flex w-full flex-col items-center justify-center rounded-sm bg-white pb-10 shadow-md md:basis-[50%] md:mt-0 md:pb-0">
            <form className="flex flex-col items-center justify-center w-[85%] md:w-[70%]">
              <h1 className="text-base md:text-lg md:mb-5 text-[#000000] font-bold">
                Enter Your Information
              </h1>

              <div className="relative mt-6 w-full">
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

              <div className="relative mt-6 w-full">
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

              <div className="relative mt-6 w-full">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className="text-[#ff0000] text-[13px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </div>

              <div className="mt-3 mb-6 flex items-center">
                <input
                  id="checkbox-select"
                  type="checkbox"
                  value=""
                  className="mr-2 h-4 w-4 rounded-sm text-green accent-pinkish-gray md:mr-1"
                />
                <label
                  htmlFor="checkbox-select"
                  className="my-3 font-medium text-gray-900 text-[12px] dark:text-gray-300 md:text-sm"
                >
                  Accept User Agreement and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 bg-green text-white px-4 text-[12px] md:text-sm font-bold border-green rounded-full shadow-sm tracking-wide hover:bg-[#298060] cursor-pointer transition-all ease-linear duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="flex items-center justify-center gap-1 px-10 md:gap-2 md:px-0">
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

export default SignUp;

