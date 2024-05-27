"use client";
import Link from "next/link";
import Image from "next/image";
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
        <div className="mx-auto h-full px-4 py-6 max-w-[1280px] lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="mr-auto hidden flex-col justify-between lg:col-span-5 lg:flex xl:col-span-6 xl:mb-0">
            <div className="pt-8">
              <a
                href="/"
                className="inline-flex items-center text-2xl font-semibold text-slate-900 lg:mb-10"
              >
                <Image
                  className="mr-2 block h-8 w-8 max-w-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
                Made In Nigeria
              </a>
              <div className="flex">
                <svg
                  className="mr-2 block h-5 w-5 shrink-0 fill-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h3 className="mb-2 font-bold leading-4 text-slate-900">
                    Get started quickly
                  </h3>
                  <p className="mb-2 font-light text-slate-600">
                    Integrate with Business Oriented platform.
                  </p>
                </div>
              </div>
              <div className="flex pt-8">
                <svg
                  className="mr-2 block h-5 w-5 shrink-0 fill-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h3 className="mb-2 font-bold leading-4 text-slate-900">
                    Support any business model
                  </h3>
                  <p className="mb-2 font-light text-slate-600">
                    Place your business that you {`don't`} want to share with
                    the world in private.
                  </p>
                </div>
              </div>
              <div className="flex pt-8">
                <svg
                  className="mr-2 block h-5 w-5 shrink-0 fill-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h3 className="mb-2 font-bold leading-4 text-slate-900">
                    Join millions of businesses
                  </h3>
                  <p className="mb-2 font-light text-slate-600">
                    Made in Nigeria is trusted by ambitious startups and
                    enterprises of every size.
                  </p>
                </div>
              </div>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="/about-us"
                    className="text-sm text-slate-700 hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-700 hover:underline"
                  >
                    Term &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-sm text-slate-700 hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="text-sm text-slate-700 hover:underline"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="/complaint"
                    className="text-sm text-slate-700 hover:underline"
                  >
                    Complaint
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-slate-700 hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mb-6 text-center md:hidden">
            <a
              href="/"
              className="inline-flex items-center text-center text-2xl font-semibold"
            >
              <Image
                className="mr-2 block h-8 w-8 max-w-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
                width={32}
                height={32}
              />
              Made in Nigeria
            </a>
          </div>
          {/* left */}
          <div className="mx-auto w-full sm:max-w-lg md:mt-0 lg:col-span-7 xl:col-span-6">
            <div className="rounded-md border bg-white p-6 border-gray">
              <h1 className="text-sm font-bold -leading-[6px] text-dark lg:text-xl">
                Create your Free Account
              </h1>
              <div className="mt-4 items-center space-y-4 sm:space-x-4 sm:space-y-0 sm:flex">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg border px-5 py-2 text-sm font-medium border-gray"
                >
                  <svg
                    className="mr-2 block h-5 w-5"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13183_10121)">
                      <path
                        d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                        fill="#3F83F8"
                      ></path>
                      <path
                        d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                        fill="#EA4335"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_13183_10121">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Sign up with Google
                </a>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg border px-5 py-2 text-sm font-medium border-gray"
                >
                  <svg
                    className="mr-2 block h-5 w-5"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13183_29163)">
                      <path
                        d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_13183_29163">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Sign up with Apple
                </a>
              </div>
              <div className="mt-4 flex items-center">
                <div className="w-full h-0.5 bg-gray"></div>
                <div className="px-5 text-center">or</div>
                <div className="w-full h-0.5 bg-gray"></div>
              </div>
              <form className="mt-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border bg-light-gray p-[10px] border-gray focus-within:border-green focus:ring-green sm:text-sm"
                    placeholder="name@company.com"
                    required=""
                  />
                  <span className="hidden text-sm font-light text-danger">
                    please enter email
                  </span>
                </div>
                <div className="mt-4 lg:mt-2">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="block w-full rounded-lg border bg-light-gray p-[10px] border-gray focus-within:border-green focus:ring-green sm:text-sm"
                    required=""
                  />
                  <span className="hidden text-sm font-light text-danger">
                    please enter password
                  </span>
                </div>
                <div className="mt-4 lg:mt-2">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="confirm-password"
                    placeholder="*******"
                    className="block w-full rounded-lg border bg-light-gray p-[10px] border-gray focus-within:border-green focus:ring-green sm:text-sm"
                    required=""
                  />
                  <span className="hidden text-sm font-light text-danger">
                    please enter password
                  </span>
                </div>
                <div className="mt-4 flex flex-start lg:mt-6">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded-sm border text-green focus:ring-3 focus:ring-green"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm text-dark-gray">
                    <label htmlFor="terms" className="font-light">
                      By signing up, you are creating a MNN account, and you
                      agree to MNN{" "}
                      <a className="font-medium text-green" href="#">
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a className="font-medium text-green" href="#">
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg px-5 text-white py-[10px] bg-green hover:bg-light-green focus:ring-green lg:mt-6"
                >
                  Create an account
                </button>
                <p className="mt-4 text-sm text-dark-gray">
                  Already have an account?{" "}
                  <a href="/login" className="font-medium text-green">
                    Sign in here
                  </a>
                </p>
              </form>
            </div>
          </div>
          {/* right */}
        </div>
      </section>
    </>
  );
};

export default Login;
