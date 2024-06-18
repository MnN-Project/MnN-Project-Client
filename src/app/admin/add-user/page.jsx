"use client";
import React from 'react';
import AdminContainer from "@/components/container/AdminContainer";

const Page = () => {
    return (
        <AdminContainer>
            <main>
                <div>
                    {/*Create New User Card Form */}
                    <div className="mx-auto max-w-xl">
                        {/*Breadcrumb */}
                        <ol className="py-3 flex items-center whitespace-nowrap sm:hidden">
                            <li className="flex items-center text-dark-gray text-sm">
                                Home
                                <svg className="w-4 h-4 mx-1 block text-dark-gray"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </li>
                            <li className="flex items-center text-dark-gray">
                                <a className="flex items-center text-sm"
                                   href="#">
                                    Users
                                    <svg className="w-4 h-4 mx-1 text-dark-gray"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="font-semibold text-sm truncate text-dark" aria-current="page">
                                Add User
                            </li>
                        </ol>
                        {/*End Breadcrumb */}

                        {/*Header */}
                        <div className="py-3 flex gap-3">
                            <svg className="shrink-0 block w-10 h-10 text-dark-gray" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <circle cx="12" cy="10" r="3"/>
                                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                            </svg>

                            <div className="grow">
                                <h1 className="text-dark font-semibold text-lg">
                                    Create new user
                                </h1>

                                <p className="text-sm text-dark-gray">
                                    Create a new user account for your system.
                                </p>
                            </div>
                        </div>
                        {/*End Header */}

                        {/*Card */}
                        <div className="bg-white border border-gray rounded-xl">
                            <form>
                                <div className="p-2">
                                    <div className="p-4">
                                        {/*Grid */}
                                        <div className="grid gap-1 ud70n fzy0j ccqxv gzrzq fv4ur">
                                            <div>
                                                <label className="inline-block text-sm text-dark-gray">
                                                    Avatar
                                                </label>
                                            </div>
                                            {/*End Col */}

                                            <div>
                                                {/*Logo Upload Group */}
                                                <div className="flex flex-wrap items-center gap-3">
                                                      <span
                                                          className="flex text-dark-gray border-2 border-dotted rounded-full items-center justify-center shrink-0 w-20 h-20">
                                                        <svg className="block w-7 h-7"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="1"
                                                             strokeLinecap="round" strokeLinejoin="round">
                                                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                                          <circle cx="9" cy="9" r="2"/>
                                                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                                                        </svg>
                                                      </span>

                                                    <div className="grow">
                                                        <div className="flex items-center gap-2">
                                                            <button type="button"
                                                                    className="font-semibold inline-flex items-center py-2 px-3 border border-transparent cursor-pointer rounded-lg bg-blue text-white gap-2 text-xs">
                                                                <svg className="shrink-0 w-4 h-4 block"
                                                                     xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="currentColor" strokeWidth="2"
                                                                     strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                                    <polyline points="17 8 12 3 7 8"/>
                                                                    <line x1="12" x2="12" y1="3" y2="15"/>
                                                                </svg>
                                                                Upload photo
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Logo Upload Group */}
                                            </div>
                                            {/*End Col */}
                                        </div>
                                        {/*End Grid */}

                                        {/*Grid */}
                                        <div className="grid mt-5 gap-1.5">
                                            <div>
                                                <label htmlFor="name"
                                                       className="inline-block text-sm text-dark">
                                                    Name
                                                </label>
                                            </div>
                                            {/*End Col */}

                                            <div>
                                                <input id="name" type="text"
                                                       className="py-2 px-3 border placeholder:text-sm border-gray text-dark rounded-lg block w-full"
                                                       placeholder="James Davidson"/>
                                            </div>
                                            {/*End Col */}
                                        </div>
                                        {/*End Grid */}

                                        {/*Grid */}
                                        <div className="grid mt-5 gap-1.5">
                                            <div>
                                                <label htmlFor="email"
                                                       className="inline-block text-sm text-dark">
                                                    Email
                                                </label>
                                            </div>
                                            {/*End Col */}

                                            <div>
                                                <input id="email" type="email"
                                                       className="py-2 px-3 placeholder:text-sm border border-gray text-dark rounded-lg block w-full"
                                                       placeholder="@example.com"/>
                                            </div>
                                            {/*End Col */}
                                        </div>
                                        {/*End Grid */}

                                        {/*Grid */}
                                        <div className="grid mt-5 gap-1.5">
                                            <div>
                                                <label htmlFor="phone_number"
                                                       className="inline-block text-sm text-dark">
                                                    Mobile Number
                                                </label>
                                            </div>
                                            {/*End Col */}

                                            <div>
                                                <input id="phone_number" type="text"
                                                       className="py-2 px-3 border placeholder:text-sm border-gray text-dark rounded-lg block w-full"
                                                       placeholder="080-582-585"/>
                                            </div>
                                            {/*End Col */}
                                        </div>
                                        {/*End Grid */}

                                        {/*Grid */}
                                        <div className="grid mt-5 gap-1.5">
                                            <div>
                                                <label htmlFor="adderss"
                                                       className="inline-block text-sm text-dark">
                                                    Address
                                                </label>
                                            </div>
                                            {/*End Col */}

                                            <div>
                                                <div>
                                                    <input id="address" type="text"
                                                           className="py-2 px-3 border placeholder:text-sm border-gray text-dark rounded-lg block w-full"
                                                           placeholder="Street"/>
                                                    <input type="text"
                                                           className="mt-3 py-2 px-3 border placeholder:text-sm border-gray text-dark rounded-lg block w-full"
                                                           placeholder="Street line 2 (Optional)"/>
                                                </div>

                                                <div className="mt-3 grid gap-3 grid-cols-2">
                                                    <div>
                                                        <input type="text"
                                                               className="py-2 px-3 border placeholder:text-sm border-gray text-dark rounded-lg block w-full"
                                                               placeholder="City"/>
                                                    </div>
                                                    <div>
                                                        <input type="text" className="py-2 px-3 border placeholder:text-sm border-gray text-dark rounded-lg block w-full" placeholder="Zip/Postal code"/>
                                                    </div>
                                                </div>

                                            </div>
                                            {/*End Col */}
                                        </div>
                                        {/*End Grid */}
                                    </div>
                                </div>

                                {/*Footer */}
                                <div className="px-6 pb-6 flex justify-end gap-2 ">
                                    <div className="flex items-center w-full justify-end gap-2">
                                        <button type="button"
                                                className="shadow text-sm font-medium text-start py-2 px-3 border border-gray rounded-lg inline-flex justify-center items-center">
                                            Cancel
                                        </button>

                                        <button type="button"
                                                className="text-sm font-medium text-start py-2 px-3 border border-transparent bg-blue text-white rounded-lg inline-flex justify-center items-center">
                                            Add User
                                        </button>
                                    </div>
                                </div>
                                {/*End Footer */}
                            </form>
                        </div>
                        {/*End Card */}
                    </div>
                    {/*End Create New User Card Form */}
                </div>
            </main>
        </AdminContainer>
    )
};

export default Page;