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
    <section className="bg-light-gray">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100dvh] lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-dark"
        >
          <img
            className="w-8 h-8 mr-2 inline-block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Made In Nigeria
        </a>
        <div className="w-full bg-white rounded-lg border border-light-gray md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
              Welcome back
            </h1>
            <form className="space-y-4" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-dark"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-light-gray border border-gray text-dark sm:text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
                <span className="text-danger font-light text-sm"></span>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-dark"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*******"
                  className="bg-light-gray border border-gray text-dark sm:text-sm font-bold rounded-lg focus:ring-green focus:border-green block w-full p-2.5"
                  required=""
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
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm flex justify-between w-full">
                  <label htmlFor="terms" className="font-light text-dark-gray">
                    Remember me
                  </label>
                  <a
                    className="font-medium ml text-green hover:underline"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green hover:bg-light-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-dark-gray">
                Already have an account?
                <a
                  href="/register"
                  className="font-medium text-green hover:underline"
                >
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    // <main className="w-screen h-screen md:pt-8 pb-5 grid place-content-center md:block">
    //   <div className="w-screen">
    //     <div className="w-full md:w-[85%] mx-auto mb-5 flex justify-center md:block">
    //       <button className="px-3 md:px-6 mb-5 md:mb-0 py-2 md:py-3 text-[12px] md:text-sm font-bold tracking-wide text-white bg-green">
    //         MADE IN NIGERIALOGO
    //       </button>
    //     </div>

    //     <div className="hidden w-[85%] md:w-[70%] mx-auto mt-1 mb-2 md:flex gap-1 justify-end">
    //       <p className="text-xs md:text-base font-normal font-montserrat text-dark">
    //         New User?
    //       </p>
    //       <Link
    //         href="/register"
    //         className="text-xs md:text-base text-green hover:text-[#308868ed] font-medium cursor-pointer transition-all ease-linear duration-150"
    //       >
    //         Sign Up
    //       </Link>
    //       <p className="text-xs md:text-base font-normal font-montserrat text-dark">
    //         Now
    //       </p>
    //     </div>

    //     <div className="w-[85%] md:w-full mx-auto mt-16 md:mt-0 md:mx-0 md:flex md:flex-col md:items-center md:justify-center md:rounded-sm rounded-lg ">
    //       <div className="md:w-[70%] md:h-[550px] md:flex shadow-md rounded-lg">
    //         <div className="hidden md:block md:basis-[50%] rounded-sm bg-[url('/assets/loginBg.jpg')] bg-cover bg-center bg-no-repeat">
    //           <div className="w-full h-full flex flex-col items-center justify-center">
    //             <div>
    //               <div className="md:w-fit rounded-sm">
    //                 <h2 className="text-green text-2xl font-bold font-montserrat">
    //                   Top Deals!
    //                 </h2>
    //                 <h2 className="text-[#212121] text-2xl font-bold font-montserrat">
    //                   This Coming Week...
    //                 </h2>
    //                 <h3 className="mt-14 text-lg font-bold text-[#212121] font-montserrat">
    //                   Enjoy Our Unlimited Offers
    //                 </h3>
    //               </div>

    //               <div className="w-full mt-1 flex justify-end">
    //                 <div className="w-[320px] h-[140px] grid place-content-center bg-[#0c6a478a]">
    //                   <ul className="px-5 text-md text-white list-disc tracking-wide font-normal">
    //                     <li>Unlimited Posting </li>
    //                     <li className="py-1">Featured products</li>
    //                     <li>Available on Search Engine</li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* </div> */}
    //         </div>

    //         <div className="py-14 md:py-0 w-full md:basis-[50%] md:pb-0 flex flex-col justify-center items-center bg-white rounded-md md:rounded-sm shadow-md">
    //           <form className="w-[85%] md:w-[65%] flex flex-col items-center justify-center">
    //             <h1 className="text-base md:text-xl text-[#000000] font-bold">
    //               Sign in here
    //             </h1>

    //             <div className="w-full mt-10 md:mt-16 relative">
    //               <input
    //                 type="text"
    //                 placeholder="Email"
    //                 name="email"
    //                 value={formik.values.email}
    //                 onChange={formik.handleChange}
    //                 onBlur={formik.handleBlur}
    //                 className={
    //                   formik.errors.email && formik.touched.email
    //                     ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
    //                     : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#b7b7b7] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#3c3c3c] tracking-wide rounded-full shadow-sm"
    //                 }
    //               />
    //               {formik.touched.email && formik.errors.email ? (
    //                 <p className="text-[#ff0000] text-xs md:text-[13px] text-center absolute left-0 right-0 mx-auto">
    //                   {formik.errors.email}
    //                 </p>
    //               ) : null}
    //             </div>

    //             <div className="w-full mt-6 md:mt-8 relative">
    //               <input
    //                 type="text"
    //                 placeholder="Password"
    //                 name="password"
    //                 value={formik.values.password}
    //                 onChange={formik.handleChange}
    //                 onBlur={formik.handleBlur}
    //                 className={
    //                   formik.errors.password && formik.touched.password
    //                     ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
    //                     : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] text-[#1c2125] border-0 outline-none ring-1 ring-inset ring-[#b7b7b7] placeholder:text-gray-400 placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-[#3c3c3c] tracking-wide rounded-full shadow-sm"
    //                 }
    //               />
    //               {formik.touched.password && formik.errors.password ? (
    //                 <p className="text-[#ff0000] text-xs md:text-[13px] text-center absolute left-0 right-0 mx-auto">
    //                   {formik.errors.password}
    //                 </p>
    //               ) : null}
    //             </div>

    //             <div className="w-full mt-4 md:mt-3.5 mb-6 text-right">
    //               <Link
    //                 href="/forgot-password"
    //                 className="text-dark hover:text-[#2c6a53] text-sm md:text-base font-normal font-montserrat transition-all ease-linear duration-150"
    //               >
    //                 Forgot Password?
    //               </Link>
    //             </div>

    //             <button
    //               type="submit"
    //               className="block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 bg-green text-white px-4 text-[12px] md:text-base font-semibold border-green rounded-full shadow-sm tracking-wider hover:bg-[#298060] cursor-pointer transition-all ease-linear duration-300"
    //             >
    //               Sign in
    //             </button>
    //           </form>

    //           <div className="md:hidden w-[85%] md:w-[70%] mx-auto mt-2 md:mb-0 mb-2 flex gap-1 justify-end">
    //             <p className="text-sm md:text-base font-normal font-montserrat text-dark">
    //               New User?
    //             </p>
    //             <Link
    //               href="/register"
    //               className="text-sm md:text-base font-medium tracking-wide text-green hover:text-[#308868ed] cursor-pointer transition-all ease-linear duration-150"
    //             >
    //               Sign Up
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="hidden md:block mb-3 mt-5">
    //       <div className="px-10 md:px-0 flex items-center gap-1 md:gap-2 justify-center">
    //         <Link
    //           href="/about-us"
    //           className="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
    //         >
    //           About Us
    //         </Link>
    //         <div className="text-pinkish-gray">|</div>
    //         <Link
    //           href="/faq"
    //           className="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
    //         >
    //           FAQ
    //         </Link>
    //         <div className="text-pinkish-gray">|</div>
    //         <Link
    //           href="/help"
    //           className="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
    //         >
    //           Help
    //         </Link>
    //         <div className="text-pinkish-gray">|</div>
    //         <Link
    //           href="/complaint"
    //           className="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
    //         >
    //           Complaint
    //         </Link>
    //         <div className="text-pinkish-gray">|</div>
    //         <Link
    //           href="/contact"
    //           className="text-dark text-base font-medium font-montserrat tracking-wide hover:text-[#308868] cursor-pointer transition-all duration-150 ease-linear"
    //         >
    //           Contact
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Login;
