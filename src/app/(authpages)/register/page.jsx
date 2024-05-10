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
    <>
    <section className="bg-gray-50 h-dvh">
  <div className="lg:py-4 lg:gap-20 lg:grid lg:grid-cols-12 px-4 max-w-[1280px] mx-auto py-6">
      <div className="xl:mb-0 xl:col-span-6 lg:flex flex-col justify-between mr-auto hidden lg:col-span-5">
          <div>
              <a href="/" className="lg:mb-10 text-slate-900 font-semibold text-2xl inline-flex items-center">
                  <img className="h-8 w-8 mr-2 block max-w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                  Made In Nigeria    
              </a>
              <div className="flex">
                  <svg className="fill-green shrink-0 w-5 h-5 mr-2 block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <div>
                      <h3 className="text-slate-900 font-bold leading-4 mb-2">Get started quickly</h3>
                      <p className="text-slate-600 mb-2 font-light">Integrate with Business Oriented platform.</p>
                  </div>
              </div>
              <div className="flex pt-8">
                  <svg className="fill-green shrink-0 w-5 h-5 block mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <div>
                      <h3 className="text-slate-900 font-bold leading-4 mb-2">Support any business model</h3>
                      <p className="text-slate-600 mb-2 font-light">Place your business that you don't want to share with the world in private.</p>
                  </div>
              </div>
              <div className="flex pt-8">
                  <svg className="fill-green shrink-0 w-5 h-5 block mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <div>
                      <h3 className="text-slate-900 font-bold leading-4 mb-2">Join millions of businesses</h3>
                      <p className="text-slate-600 mb-2 font-light">Made in Nigeria is trusted by ambitious startups and enterprises of every size.</p>
                  </div>
              </div>
          </div>
          <nav>
              <ul className="flex space-x-6">
                  <li>
                      <a href="/about-us" className="text-sm text-slate-700 hover:underline">About</a>
                  </li>
                  <li>
                      <a href="#" className="text-sm text-slate-700 hover:underline">Term &amp; Conditions</a>
                  </li>
                  <li>
                      <a href="/faq" className="text-sm text-slate-700 hover:underline">FAQ</a>
                  </li>
                  <li>
                      <a href="/help" className="text-sm text-slate-700 hover:underline">Help</a>
                  </li>
                  <li>
                      <a href="/complaint" className="text-sm text-slate-700 hover:underline">Complaint</a>
                  </li>
                  <li>
                      <a href="/contact" className="text-sm text-slate-700 hover:underline">Contact</a>
                  </li>
              </ul>
          </nav>
      </div>
      <div className="text-center mb-6 md:hidden">
          <a href="/" className="inline-flex items-center text-2xl font-semibold text-center">
              <img className="mr-2 block max-w-full h-8 w-8" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              Made in Nigeria
          </a>
              </div>
              {/* left */}
      <div className="lg:col-span-7 xl:col-span-6 md:mt-0 sm:max-w-lg w-full mx-auto">
          <div className="p-6 bg-white rounded-md border border-gray">
              <h1 className="text-sm lg:text-xl -leading-[6px] text-dark font-bold">
                  Create your Free Account
              </h1>
              <div className="mt-4 sm:flex items-center space-y-4 sm:space-x-4 sm:space-y-0">
                  <a href="#" className="font-medium text-sm px-5 py-2 border border-gray rounded-lg inline-flex items-center justify-center w-full">
                      <svg className="w-5 h-5 mr-2 block" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs>
                      </svg>                            
                      Sign up with Google
                  </a>
                  <a href="#" className="font-medium text-sm px-5 py-2 border border-gray rounded-lg inline-flex items-center justify-center w-full">
                      <svg className="w-5 h-5 mr-2 block" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_13183_29163)"><path d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z" fill="currentColor"></path></g><defs><clipPath id="clip0_13183_29163"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs>
                      </svg>                            
                      Sign up with Apple
                  </a>
              </div>
              <div className="mt-4 flex items-center">
                  <div className="w-full h-0.5 bg-gray"></div>
                  <div className="text-center px-5">or</div>
                  <div className="w-full h-0.5 bg-gray"></div>
              </div>
              <form className="mt-4" action="#">
                  <div>
                      <label htmlFor="email" className="mb-2 font-medium text-sm block">Your email</label>
                              <input type="email" name="email" id="email" className="bg-light-gray sm:text-sm p-[10px] border border-gray rounded-lg w-full block focus-within:border-green focus:ring-green" placeholder="name@company.com" required="" />
                              <span className="text-sm text-danger font-light hidden">please enter email</span>
                  </div>
                  <div className="mt-4 lg:mt-2">
                      <label htmlFor="password" className="mb-2 font-medium text-sm block">Password</label>
                              <input type="password" name="password" id="password" placeholder="*******" className="bg-light-gray sm:text-sm p-[10px] border border-gray rounded-lg w-full block focus-within:border-green focus:ring-green" required="" />
                              <span className="text-sm text-danger font-light hidden">please enter password</span>
                  </div>
                  <div className="mt-4 lg:mt-2">
                      <label htmlFor="password" className="mb-2 font-medium text-sm block">Confirm Password</label>
                              <input type="password" name="password" id="password" placeholder="*******" className="bg-light-gray sm:text-sm p-[10px] border border-gray rounded-lg w-full block focus-within:border-green focus:ring-green" required="" />
                              <span className="text-sm text-danger font-light hidden">please enter password</span>
                  </div>
                  <div className="flex flex-start mt-4 lg:mt-6">
                      <div className="items-center h-5 flex">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="focus:ring-3 focus:ring-green rounded-sm w-4 h-4 border text-green" required="" />
                      </div>
                      <div className="ml-3 text-sm text-dark-gray">
                        <label htmlFor="terms" className="font-light">By signing up, you are creating a MNN account, and you agree to MNN <a className="text-green font-medium" href="#">Terms of Use</a> and <a className="text-green font-medium" href="#">Privacy Policy</a>.</label>
                      </div>
                  </div>
                  <button type="submit" className="mt-4 lg:mt-6 py-[10px] px-5 text-white rounded-lg bg-green hover:bg-light-green focus:ring-green w-full">Create an account</button>
                  <p className="mt-4 text-dark-gray text-sm">
                      Already have an account? <a href="/login" className="font-medium text-green">Sign in here</a>
                  </p>
              </form>
          </div>
              </div>              
              {/* right */}
  </div>
</section>
    
    {/* <main class="w-screen h-screen pt-5 md:pt-8 pb-5 grid place-content-center md:block">
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
    </main> */}
    </>
  );
};

export default Login;
