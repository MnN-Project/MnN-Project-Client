import React from "react";
import Image from "next/image";

const ResetPassword = () => {
  return (
    <section className="bg-light-gray">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 h-[100dvh] lg:py-0">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-dark"
        >
          <Image
            className="mr-2 inline-block h-8 w-8"
            width={32}
            height={32}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Made In Nigeria
        </a>
        <div className="w-full rounded-lg border bg-white shadow border-light-gray sm:max-w-md md:mt-0 xl:p-0">
          <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
            <div>
              <h1 className="mb-1 text-lg font-bold leading-tight text-dark md:text-2xl">
                Change Password
              </h1>
            </div>
            <form className="space-y-4" action="#">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm text-dark"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-lg border placeholder:text-sm bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm"
                  placeholder="*******"
                  required={true}
                />
                <span className="text-sm font-light text-danger"></span>
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="mb-2 block text-sm text-dark"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  className="block w-full rounded-lg border text-sm bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm"
                  placeholder="*******"
                  required={true}
                />
                <span className="text-sm font-light text-danger"></span>
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray text-green focus:ring-3 focus:ring-green"
                    required={true}
                  />
                </div>
                <div className="ml-3 w-full text-sm">
                  <label htmlFor="terms" className="font-light text-dark-gray">
                    I agree to MNN{" "}
                    <a
                      className="font-medium ml text-green hover:underline"
                      href="#"
                    >
                      Terms and condition{" "}
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="inline-block w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
