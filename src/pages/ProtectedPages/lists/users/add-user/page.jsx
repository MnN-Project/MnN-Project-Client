'use client';
import React from 'react';
import AdminContainer from '@/components/container/AdminContainer';
import Label from '@/components/ui/Label';
import UploadGroup from '@/components/ui/UploadGroup';
import Input from '@/components/ui/Input';
import Link from 'next/link';

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
                <svg
                  className="w-4 h-4 mx-1 block text-dark-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </li>
              <li className="flex items-center text-dark-gray">
                <Link className="flex items-center text-sm" href="#">
                  Users
                  <svg
                    className="w-4 h-4 mx-1 text-dark-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </li>
              <li className="font-semibold text-sm truncate text-dark" aria-current="page">
                Add User
              </li>
            </ol>
            {/*End Breadcrumb */}

            {/*Header */}
            <div className="py-3 flex gap-3">
              <svg
                className="shrink-0 block w-10 h-10 text-dark-gray"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>

              <div className="grow">
                <h1 className="text-dark font-semibold text-lg">Create new user</h1>

                <p className="text-sm text-dark-gray">Create a new user account for your system.</p>
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
                        <Label>Avatar</Label>
                      </div>
                      {/*End Col */}

                      <div>
                        {/*Logo Upload Group */}
                        <UploadGroup />
                        {/*End Logo Upload Group */}
                      </div>
                      {/*End Col */}
                    </div>
                    {/*End Grid */}

                    {/*Grid */}
                    <div className="grid mt-5 gap-1.5">
                      <div>
                        <Label htmlFor="name">Name</Label>
                      </div>
                      {/*End Col */}

                      <div>
                        <Input id="name" type="text" placeholder="James Davidson" />
                      </div>
                      {/*End Col */}
                    </div>
                    {/*End Grid */}

                    {/*Grid */}
                    <div className="grid mt-5 gap-1.5">
                      <div>
                        <Label htmlFor="email">Email</Label>
                      </div>
                      {/*End Col */}

                      <div>
                        <Input id="email" type="email" placeholder="@example.com" />
                      </div>
                      {/*End Col */}
                    </div>
                    {/*End Grid */}

                    {/*Grid */}
                    <div className="grid mt-5 gap-1.5">
                      <div>
                        <Label htmlFor="phone_number">Mobile Number</Label>
                      </div>
                      {/*End Col */}

                      <div>
                        <Input id="phone_number" type="text" placeholder="080-582-585" />
                      </div>
                      {/*End Col */}
                    </div>
                    {/*End Grid */}

                    {/*Grid */}
                    <div className="grid mt-5 gap-1.5">
                      <div>
                        <Label htmlFor="address">Address</Label>
                      </div>
                      {/*End Col */}

                      <div>
                        <div className="space-y-2">
                          <Input id="address" type="text" placeholder="Street 1" />
                          <Input id="address" type="text" placeholder="Street 2" />
                        </div>

                        <div className="mt-3 grid gap-3 grid-cols-2">
                          <div>
                            <Input id="city" type="text" placeholder="City" />
                          </div>
                          <div>
                            <Input id="postal_code" type="text" placeholder="Zip/Postal code" />
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
                    <button
                      type="button"
                      className="shadow text-sm font-medium text-start py-2 px-3 border border-gray rounded-lg inline-flex justify-center items-center hover:bg-light-gray"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="text-sm font-medium text-start py-2 px-3 border border-transparent bg-light-green text-white rounded-lg inline-flex justify-center items-center hover:bg-green"
                    >
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
  );
};

export default Page;
