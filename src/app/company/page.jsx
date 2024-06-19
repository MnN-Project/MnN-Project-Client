"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/container/Container";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const CompanyPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    function NextArrow(props) {
        const {style, onClick} = props;
        return (
            <button
                onClick={onClick}
                style={{...style}}
                type="button"
                className="disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-dark hover:bg-white/20 rounded-md focus:outline-none focus:bg-white/20 pl-4"
            >
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
          <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
          >
            <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </span>
            </button>
        );
    }

    function PrevArrow(props) {
        const {style, onClick} = props;
        return (
            <button
                onClick={onClick}
                style={{...style}}
                type="button"
                className="disabled:pointer-events-none absolute inset-y-0 start-0 flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-md focus:outline-none focus:bg-white/20 z-20 pl-4"
            >
                <span className="sr-only">Previous</span>
                <span className="text-2xl" aria-hidden="true">
            <svg
                className="flex-shrink-0 size-3.5 md:size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                ></path>
            </svg>
        </span>
            </button>
        );
    }

    return (
        <section className="bg-white">
            <Header/>
            <Container>
                <div className="relative mt-s">
                    <div
                        className="slider-container relative overflow-hidden w-full h-[30rem] md:max-h-[calc(100vh-300px)] bg-gray-100 rounded-md dark:bg-neutral-800">
                        <Slider
                            {...settings}
                            className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-1"
                        >
                            {/*Item */}
                            <div>
                                <div
                                    className="h-[30rem] md:max-h-[calc(100vh-300px)] flex flex-col bg-[url('https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                                    <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                                        <span className="block text-dark">Nike React</span>
                                        <span className="block text-dark text-xl md:text-3xl">
                    Rewriting sports playbook for billions of athletes
                  </span>
                                        <div className="mt-5">
                                            <a
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-dark hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                Read Case Studies
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Item */}

                            {/*Item */}
                            <div>
                                <div
                                    className="h-[30rem] md:max-h-[calc(100vh-300px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                                    <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                                        <span className="block text-dark">CoolApps</span>
                                        <span className="block text-dark text-xl md:text-3xl">
                    From mobile apps to gaming consoles
                  </span>
                                        <div className="mt-5">
                                            <a
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                Read Case Studies
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Item */}

                            {/*Item */}
                            <div>
                                <div
                                    className="h-[30rem] md:max-h-[calc(100vh-300px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                                    <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                                        <span className="block text-dark">Grumpy</span>
                                        <span className="block text-dark text-xl md:text-3xl">
                    Bringing Art to everything
                  </span>
                                        <div className="mt-5">
                                            <a
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                Read Case Studies
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Item */}
                        </Slider>
                    </div>
                </div>
                {/*Grid */}
                <div className="mt-5 max-w-6xl mx-auto lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="font-bold text-2xl md:text-3xl text-dark">
                            We tackle the challenges start-ups face
                        </h2>
                        <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
                            Besides working with start-up enterprises as a partner for digitalization, we have built
                            enterprise products for common pain points that we have encountered in various products and
                            projects.
                        </p>
                    </div>
                    {/*End Col*/}
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            {/*Icon Block*/}
                            <div className="flex gap-x-5">
                                <svg className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <rect width="18" height="10" x="3" y="11" rx="2"/>
                                    <circle cx="12" cy="5" r="2"/>
                                    <path d="M12 7v4"/>
                                    <line x1="8" x2="8" y1="16" y2="16"/>
                                    <line x1="16" x2="16" y1="16" y2="16"/>
                                </svg>
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-dark">
                                        Creative minds
                                    </h3>
                                    <p className="mt-1 text-dark-gray">
                                        We choose our teams carefully. Our people are the secret to great work.
                                    </p>
                                </div>
                            </div>
                            {/*End Icon Block*/}

                            {/*Icon Block*/}
                            <div className="flex gap-x-5">
                                <svg className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="M7 10v12"/>
                                    <path
                                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                                </svg>
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-dark">
                                        Simple and affordable
                                    </h3>
                                    <p className="mt-1 text-dark-gray">
                                        From boarding passes to movie tickets, there are pretty much nothing you cannot
                                        store with MNN.
                                    </p>
                                </div>
                            </div>
                            {/*End Icon Block */}

                            {/*Icon Block */}
                            <div className="flex gap-x-5">
                                <svg className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-dark">
                                        Industry-leading documentation
                                    </h3>
                                    <p className="mt-1 text-dark-gray">
                                        Our documentation and extensive Client libraries contain everything a business
                                        needs to build a custom integration.
                                    </p>
                                </div>
                            </div>
                            {/*End Icon Block */}

                            {/*Icon Block */}
                            <div className="flex gap-x-5">
                                <svg className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-dark">
                                        Designing for people
                                    </h3>
                                    <p className="mt-1 text-dark-gray">
                                        We actively pursue the right balance between functionality and aesthetics,
                                        creating delightful experiences.
                                    </p>
                                </div>
                            </div>
                            {/*End Icon Block */}
                        </div>
                    </div>
                    {/*End Col*/}
                </div>
                {/*End Grid*/}

                {/*Contact */}
                <section>
                    <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-10 mx-auto">
                        {/*Title*/}
                        <div className="max-w-3xl mb-10 lg:mb-14">
                            <h2 className="text-dark font-semibold text-2xl md:text-4xl md:leading-tight">Contact
                                us</h2>
                            <p className="mt-1 text-dark-gray">Whatever your goal - we will get you there.</p>
                        </div>
                        {/*End Title*/}

                        {/*Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                            <div className="md:order-2 border-b border-dark-gray pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                                <form>
                                    <div className="space-y-4">
                                        {/*Input*/}
                                        <div className="relative">
                                            <input type="text" id="input-name" className="peer p-4 block w-full bg-light-gray border-transparent rounded-lg text-sm text-dark placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                                                  focus:pt-6
                                                  focus:pb-2
                                                  [&:not(:placeholder-shown)]:pt-6
                                                  [&:not(:placeholder-shown)]:pb-2
                                                  autofill:pt-6
                                                  autofill:pb-2" placeholder="Name" />
                                                <label htmlFor="input-name" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                    peer-focus:text-xs
                                                    peer-focus:-translate-y-1.5
                                                    peer-focus:text-neutral-400
                                                    peer-[:not(:placeholder-shown)]:text-xs
                                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                    peer-[:not(:placeholder-shown)]:text-neutral-400">Name</label>

                                        </div>
                                        {/*End Input*/}

                                        {/*Input*/}
                                        <div className="relative">
                                            <input type="email" id="input-email" className="peer p-4 block w-full bg-light-gray border-transparent rounded-lg text-sm text-dark placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                                                  focus:pt-6
                                                  focus:pb-2
                                                  [&:not(:placeholder-shown)]:pt-6
                                                  [&:not(:placeholder-shown)]:pb-2
                                                  autofill:pt-6
                                                  autofill:pb-2" placeholder="Email" />
                                                <label htmlFor="input-email" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                    peer-focus:text-xs
                                                    peer-focus:-translate-y-1.5
                                                    peer-focus:text-neutral-400
                                                    peer-[:not(:placeholder-shown)]:text-xs
                                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                    peer-[:not(:placeholder-shown)]:text-neutral-400">Email</label>
                                        </div>
                                        {/*End Input*/}

                                        {/*Input*/}
                                        <div className="relative">
                                            <input type="text" id="input-company" className="peer p-4 block w-full bg-light-gray border-transparent rounded-lg text-sm text-dark placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                                              focus:pt-6
                                              focus:pb-2
                                              [&:not(:placeholder-shown)]:pt-6
                                              [&:not(:placeholder-shown)]:pb-2
                                              autofill:pt-6
                                              autofill:pb-2" placeholder="Company" />
                                                <label htmlFor="input-company" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                peer-focus:text-xs
                                                peer-focus:-translate-y-1.5
                                                peer-focus:text-neutral-400
                                                peer-[:not(:placeholder-shown)]:text-xs
                                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                peer-[:not(:placeholder-shown)]:text-neutral-400">Company</label>
                                        </div>
                                        {/*End Input*/}

                                        {/* Input*/}
                                        <div className="relative">
                                            <input type="text" id="input-phone" className="peer p-4 block w-full bg-light-gray border-transparent rounded-lg text-sm text-dark placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                                              focus:pt-6
                                              focus:pb-2
                                              [&:not(:placeholder-shown)]:pt-6
                                              [&:not(:placeholder-shown)]:pb-2
                                              autofill:pt-6
                                              autofill:pb-2" placeholder="Phone" />
                                                <label htmlFor="input-phone" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                peer-focus:text-xs
                                                peer-focus:-translate-y-1.5
                                                peer-focus:text-neutral-400
                                                peer-[:not(:placeholder-shown)]:text-xs
                                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                peer-[:not(:placeholder-shown)]:text-neutral-400">Phone</label>
                                        </div>
                                        {/*End Input */}

                                        {/*Textarea*/}
                                        <div className="relative">
                                          <textarea id="message" className="peer p-4 block w-full bg-light-gray border-transparent rounded-lg text-sm text-dark placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                                          focus:pt-6
                                          focus:pb-2
                                          [&:not(:placeholder-shown)]:pt-6
                                          [&:not(:placeholder-shown)]:pb-2
                                          autofill:pt-6
                                          autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                            <label htmlFor="message" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                            peer-focus:text-xs
                                            peer-focus:-translate-y-1.5
                                            peer-focus:text-neutral-400
                                            peer-[:not(:placeholder-shown)]:text-xs
                                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                            peer-[:not(:placeholder-shown)]:text-neutral-400">Tell us about your product</label>
                                        </div>
                                        {/*End Textarea*/}
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-xs text-neutral-500">
                                            All fields are required
                                        </p>

                                        <p className="mt-5">
                                            <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-green font-medium text-sm text-white rounded-full focus:outline-none"
                                               href="#">
                                                Submit
                                                <svg
                                                    className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"/>
                                                    <path d="m12 5 7 7-7 7"/>
                                                </svg>
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                            {/*End Col*/}

                            <div className="space-y-14">
                                {/*Item*/}
                                <div className="flex gap-x-5">
                                    <svg className="flex-shrink-0 size-6 text-neutral-500"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    <div className="grow">
                                        <h4 className="text-dark font-semibold">Our address:</h4>

                                        <address className="mt-1 text-neutral-400 text-sm not-italic">
                                            300 Bath Street, Tay House<br />
                                            Glasgow G2 4JR, United Kingdom
                                        </address>
                                    </div>
                                </div>
                                {/*End Item */}

                                {/*Item */}
                                <div className="flex gap-x-5">
                                    <svg className="flex-shrink-0 size-6 text-neutral-500"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path
                                            d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>
                                    </svg>
                                    <div className="grow">
                                        <h4 className="text-dark font-semibold">Email us:</h4>

                                        <a className="mt-1 text-neutral-400 text-sm"
                                           href="contacts.html#mailto:example@site.co" target="_blank">
                                            hello@example.so
                                        </a>
                                    </div>
                                </div>
                                {/*End Item*/}

                                {/*Item*/}
                                <div className="flex gap-x-5">
                                    <svg className="flex-shrink-0 size-6 text-neutral-500"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path d="m3 11 18-5v12L3 14v-3z"/>
                                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                                    </svg>
                                    <div className="grow">
                                        <h4 className="text-dark font-semibold">We are hiring</h4>
                                        <p className="mt-1 text-neutral-400">We are thrilled to announce that we are
                                            expanding our team and looking for talented individuals like you to join
                                            us.</p>
                                        <p className="mt-2">
                                            <a className="group inline-flex items-center gap-x-2 font-medium text-sm text-green decoration-2 hover:underline focus:outline-none focus:underline"
                                               href="#">
                                                Job openings
                                                <svg
                                                    className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"/>
                                                    <path d="m12 5 7 7-7 7"/>
                                                </svg>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*End Item*/}
                            </div>
                            {/*End Col*/}
                        </div>
                        {/*End Grid*/}
                    </div>
                </section>
                {/*End Contact*/}
            </Container>
            <Footer />
        </section>
)
;
};

export default CompanyPage;
