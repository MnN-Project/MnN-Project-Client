"use client";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

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
        <>
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
                    <div
                        className="w-full rounded-lg border bg-white shadow border-light-gray sm:max-w-md md:mt-0 xl:p-0">
                        <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
                            <div>
                                <h1 className="mb-1 text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
                                    Forgot Your Password?
                                </h1>
                                <p className="text-sm text-dark-gray">
                                    We’ll email you instructions to reset your password. If you
                                    can’t access your email, you can try{" "}
                                    <a href="#" className="font-medium text-green">
                                        account recovery
                                    </a>
                                    .
                                </p>
                            </div>
                            <form className="space-y-4" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-dark"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm"
                                        placeholder="Enter your email"
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
                                        <label
                                            htmlFor="terms"
                                            className="font-light text-dark-gray"
                                        >
                                            I agree to MNN{" "}
                                            <a
                                                className="font-medium ml text-green hover:underline"
                                                href="#"
                                            >
                                                Terms & use{" "}
                                            </a>
                                            and{" "}
                                            <a
                                                className="font-medium ml text-green hover:underline"
                                                href="#"
                                            >
                                                Privacy Policy
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
                                >
                                    Send
                                </button>
                                <a
                                    href="/login"
                                    className="ml-3 inline-block text-center text-sm font-medium text-green hover:underline"
                                >
                                    Return to login
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ForgotPassword;
