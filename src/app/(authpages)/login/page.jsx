"use client";
import Link from "next/link";
import Image from "next/image";
import {useFormik} from "formik";
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
                <div className="w-full rounded-lg border bg-white border-light-gray sm:max-w-md md:mt-0 xl:p-0">
                    <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
                            Welcome back
                        </h1>
                        <form className="space-y-4" action="#">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm"
                                    placeholder="Enter Email"
                                    required=""
                                />
                                <span className="text-sm font-light text-danger"></span>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm"
                                    required=""
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
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 flex w-full justify-between text-sm">
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
                                className="w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
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
