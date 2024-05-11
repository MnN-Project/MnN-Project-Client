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
          <Image
            className="w-8 h-8 mr-2 inline-block"
            width={32}
            height={32}
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
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-light-gray border border-gray text-dark sm:text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5"
                  placeholder="Enter Email"
                  required=""
                />
                <span className="text-danger font-light text-sm"></span>
              </div>
              <div>
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
                Sign in
              </button>
              <p className="text-sm font-light text-dark-gray">
                Already have an account?{" "}
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
  );
};

export default Login;
