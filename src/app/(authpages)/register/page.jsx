"use client";

import Link from "next/link";
// import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .trim()
      .required("Please enter your email address*"),
    password: Yup.string().trim().required("Please enter password"),
    confirmPassword: Yup.string()
      .trim()
      .required("Please confirm your password"),
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
    <main class="w-screen h-screen pt-5 md:pt-8 pb-5 grid place-content-center md:block">
      <div class="w-screen">
        <div class="w-full md:w-[85%] mx-auto md:mb-5 flex justify-center md:block">
          <button class="px-3 md:px-6 mb-5 md:mb-0 py-2 md:py-3 text-[12px] md:text-sm font-bold tracking-wide text-white bg-green">
            MADE IN NIGERIALOGO
          </button>
        </div>

        <div class="hidden w-[85%] md:w-[70%] mx-auto mt-1 mb-2 md:flex gap-1 justify-end">
          <p class="text-xs md:text-base font-normal font-montserrat text-dark">
            Already a member?
          </p>
          <Link
            href="/login"
            class="text-xs md:text-base text-green hover:text-[#308868ed] font-medium cursor-pointer transition-all ease-linear duration-150"
          >
            Sign in
          </Link>
        </div>

        <div class="w-[85%] md:w-full mx-auto mt-6 md:mt-0 md:mx-0 md:flex md:flex-col md:items-center md:justify-center md:rounded-sm rounded-lg ">
          <div class="md:w-[70%] md:h-[550px] md:flex shadow-md rounded-lg">
            <div class="hidden md:block md:basis-[50%] rounded-sm bg-[url('/assets/loginBg.jpg')] bg-cover bg-center bg-no-repeat">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <div>
                  <div class="md:w-fit rounded-sm">
                    <h2 class="text-green text-2xl font-bold font-montserrat">
                      Top Deals!
                    </h2>
                    <h2 class="text-[#212121] text-2xl font-bold font-montserrat">
                      This Coming Week...
                    </h2>
                    <h3 class="mt-14 text-lg font-bold text-[#212121] font-montserrat">
                      Enjoy Our Unlimited Offers
                    </h3>
                  </div>

                  <div class="w-full mt-1 flex justify-end">
                    <div class="w-[320px] h-[140px] grid place-content-center bg-[#0c6a478a]">
                      <ul class="px-5 text-md text-white list-disc tracking-wide font-normal">
                        <li>Unlimited Posting </li>
                        <li class="py-1">Featured products</li>
                        <li>Available on Search Engine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 md:mt-0 py-14 md:py-0 w-full md:basis-[50%] md:pb-0 flex flex-col justify-center items-center bg-white rounded-md md:rounded-sm shadow-md">
              <form class="w-[85%] md:w-[65%] flex flex-col items-center justify-center">
                <h1 class="text-base md:text-xl text-[#000000] font-bold">
                  Enter Your Information
                </h1>

                <div class="w-full mt-10 md:mt-16 relative">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    class={
                      formik.errors.email && formik.touched.email
                        ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                        : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#b7b7b7] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#3c3c3c] tracking-wide rounded-full shadow-sm"
                    }
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p class="text-[#ff0000] text-xs md:text-[13px] text-center absolute left-0 right-0 mx-auto">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                <div class="w-full mt-6 md:mt-8 relative">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    class={
                      formik.errors.password && formik.touched.password
                        ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm  focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                        : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#b7b7b7] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#3c3c3c] tracking-wide rounded-full shadow-sm"
                    }
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p class="text-[#ff0000] text-xs md:text-[13px] text-center absolute left-0 right-0 mx-auto">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>

                <div class="w-full mt-6 md:mt-8 relative">
                  <input
                    type="text"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    class={
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                        : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#b7b7b7] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#3c3c3c] tracking-wide rounded-full shadow-sm"
                    }
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <p class="text-[#ff0000] text-xs md:text-[13px] text-center absolute left-0 right-0 mx-auto">
                      {formik.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>

                <div class="mt-3 mb-6 flex gap-2 md:gap-3 items-center">
                  <input
                    id="checkbox-select"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 rounded-sm"
                  />
                  <label
                    htmlFor="checkbox-select"
                    class="my-3 text-[11.5px] md:text-sm font-normal font-montserrat text-gray-900 dark:text-gray-300"
                  >
                    Accept User Agreement and Privacy Policy
                  </label>
                </div>

                <button
                  type="submit"
                  class="block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 bg-green text-white px-4 text-[12px] md:text-base font-semibold border-green rounded-full shadow-sm tracking-wider hover:bg-[#298060] cursor-pointer transition-all ease-linear duration-300"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="hidden md:block mb-3 mt-5">
          <div class="px-10 md:px-0 flex items-center gap-1 md:gap-2 justify-center">
            <Link
              href="/about-us"
              class="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
            >
              About Us
            </Link>
            <div class="text-pinkish-gray">|</div>
            <Link
              href="/faq"
              class="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
            >
              FAQ
            </Link>
            <div class="text-pinkish-gray">|</div>
            <Link
              href="/help"
              class="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
            >
              Help
            </Link>
            <div class="text-pinkish-gray">|</div>
            <Link
              href="/complaint"
              class="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
            >
              Complaint
            </Link>
            <div class="text-pinkish-gray">|</div>
            <Link
              href="/contact"
              class="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
