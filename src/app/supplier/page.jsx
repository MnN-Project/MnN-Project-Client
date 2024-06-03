import React from 'react';
import Image from "next/image";

const Supplier = () => {
    return (
        <section className="bg-light-gray pt-8">
            <div className="mx-auto flex flex-col items-center justify-center px-4 py-8 h-full lg:py-0">
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
                    <div className="p-3 space-y-4 sm:p-8 md:space-y-6">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
                            Become a Seller
                        </h1>
                        <form className="space-y-4" action="#">
                            <div>
                                <input
                                    type="text"
                                    name="company_name"
                                    id="company_name"
                                    className="block w-full rounded-lg border  border-gray text-dark p-2.5 focus:ring-green focus:border-green text-sm placeholder:text-sm"
                                    placeholder="Company Name"
                                    required=""
                                />
                                <span className="text-sm font-light text-danger"></span>
                            </div>
                            {/*company name*/}
                            <div>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    className="block w-full rounded-lg border  border-gray text-dark p-2.5 focus:ring-green focus:border-green text-sm placeholder:text-sm"
                                    required=""
                                />
                                <span className="text-sm font-light text-danger"></span>
                            </div>
                            {/*Address*/}
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    className="block w-full rounded-lg border  border-gray text-dark p-2.5 focus:ring-green focus:border-green text-sm placeholder:text-sm"
                                    required=""
                                />
                                <span className="text-sm font-light text-danger"></span>
                            </div>
                            {/*Phone*/}
                            <div>
                                <input
                                    type="text"
                                    name="attach_logo"
                                    id="attach_logo"
                                    placeholder="Attach Logo"
                                    className="block w-full rounded-lg border  border-gray text-dark p-2.5 focus:ring-green focus:border-green text-sm placeholder:text-sm"
                                    required=""
                                />
                                <span className="text-sm font-light text-danger"></span>
                            </div>
                            {/*Attach Logo*/}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    className="block w-full rounded-lg border  border-gray text-dark p-2.5 focus:ring-green focus:border-green text-sm placeholder:text-sm"
                                    required=""
                                />
                                <span className="text-sm font-light text-danger"></span>
                            </div>
                            {/*Email*/}
                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="block w-full rounded-lg border  border-gray text-dark p-2.5 focus:ring-green focus:border-green text-sm placeholder:text-sm"
                                    placeholder="Message"
                                    rows="4"
                                    id="message"
                                ></textarea>
                            </div>
                            {/*Message*/}
                            <div>
                                <label htmlFor="HeadlineAct" className="block text-xs font-medium text-dark-gray"> Category </label>
                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className="mt-1.5 w-full rounded-lg border border-dark-gray focus:ring-green focus:border-green text-dark text-sm">
                                    <option value="">Select Category</option>
                                    <option value="JM">John Mayer</option>
                                    <option value="SRV">Stevie Ray Vaughn</option>
                                    <option value="JH">Jimi Hendrix</option>
                                </select>
                            </div>
                            {/*Select*/}
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
                                <div className="ml-3 flex w-full justify-between text-xs">
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
                                className="w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Supplier;