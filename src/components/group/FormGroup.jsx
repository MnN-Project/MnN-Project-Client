import Container from "../container/Container";
import {Button} from "../button/Button";
import Image from "next/image";

const FormGroup = () => {
    return (
        <Container small className="overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 m-auto hidden h-full w-full md:block">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1669323926239-0747e1382211?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="relative flex w-full">
                <div className="hidden flex-1 overflow-hidden pt-s pl-m md:block">
                    <div className="origin-left scale-125 text-3xl font-bold capitalize mb-s">
                        EASY SOURCING
                    </div>
                    <div>
                        <p className="mt-4 mb-6">
                            An easy way to post your sourcing requests and get quotes.
                        </p>
                        <p className="mt-4">
                            One request, multiple quotes
                            <br/>
                            Verified suppliers matching
                            <br/>
                            Quotes comparison and sample request
                        </p>
                    </div>
                    <div className="mt-11">
                        <a href="https://sourcing.made-in-china.com/" target="_blank">
                            Learn More{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="inline-block h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="w-full bg-white p-s">
                        <h2 className="text-2xl font-medium mb-2.5 text-green">
                            Request For Quotation?
                        </h2>
                        <form className="">
                            <div className="mb-xs">
                                <label
                                    htmlFor="Username"
                                    className="relative block border rounded-[3px] border-gray focus-within:border-green"
                                >
                                    <input
                                        type="text"
                                        id="Username"
                                        className="border-none bg-transparent peer placeholder-transparent focus:ring-0"
                                        placeholder="Production Name or Keywords"
                                    />

                                    <span
                                        className="pointer-events-none absolute top-0 peer-focus:top-0 peer-placeholder-shown:top-1/2 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs transition-all start-2.5 p-0.5 text-dark">
                    Production Name or Keywords
                  </span>
                                </label>
                            </div>
                            {/* textarea */}
                            <div className="mb-xs">
                                <label
                                    htmlFor="OrderNotes"
                                    className="relative block border text-sm rounded-[3px] border-gray focus-within:border-green"
                                >
                  <textarea
                      id="OrderNotes"
                      className="mt-2 w-full border-0 align-top font-medium peer placeholder:text-dark focus-within:ring-0 sm:text-sm"
                      rows="4"
                      placeholder=""
                  ></textarea>
                                    <span
                                        className="pointer-events-none absolute top-0 peer-focus:top-0 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs text-slate-400 transition-all start-2.5 p-0.5 peer-placeholder-shown:top-[15%]">
                    Product Description
                  </span>
                                </label>
                            </div>
                            {/* input and select */}
                            <div className="flex items-center mb-xs">
                                {/* input */}
                                <div className="mr-2xs">
                                    <label
                                        htmlFor="Purchase Quantity"
                                        className="relative block border rounded-[3px] border-gray focus-within:border-green"
                                    >
                                        <input
                                            type="text"
                                            id="Purchase Quantity"
                                            className="border-none bg-transparent peer w-[169px] placeholder-transparent focus:ring-0"
                                            placeholder="Purchase Quantity"
                                        />

                                        <span
                                            className="pointer-events-none absolute top-0 peer-focus:top-0 peer-placeholder-shown:top-1/2 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs transition-all start-2.5 p-0.5 text-dark">
                      Purchase Quantity
                    </span>
                                    </label>
                                </div>
                                {/* select */}
                                <div className="">
                                    <label htmlFor="HeadlineAct" className="block text-u-xs">
                                        <select
                                            name="HeadlineAct"
                                            id="HeadlineAct"
                                            className="w-full bg-slate-100 text-xs bg-light-gray font-montserrat rounded-[3px] border-gray py-2xs text-dark"
                                        >
                                            <option value="">Pieces</option>
                                            <option value="JM">John Mayer</option>
                                            <option value="SRV">Stevie Ray Vaughn</option>
                                            <option value="JH">Hendrix</option>
                                            <option value="BBK">B.B King</option>
                                            <option value="AK">Albert King</option>
                                            <option value="BG">Buddy Guy</option>
                                            <option value="EC">Eric Clapton</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            {/* button */}
                            <Button type="submit">Send Your Request Now</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FormGroup;
