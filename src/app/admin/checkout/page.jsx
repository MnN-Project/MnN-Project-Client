"use client";
import AdminContainer from "@/components/container/AdminContainer";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";
import Image from "next/image";

const Checkout = ({}) => {
  return (
    <AdminContainer>
      <section className="my-8 sm:my-16 bg-white rounded-lg ring-1 ring-gray">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto p-4 sm:pb-8 max-w-[64rem]">
            <h2 className="font-semibold text-dark text-xl">Payment</h2>

            <div className="sm:mt-8 mt-6 lg:flex lg:gap-8">
              <form action="#" className="w-full lg:max-w-[36rem]">
                <div className="flex items-center justify-between border rounded-lg bg-light-gray p-4 ps-4 border-gray">
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <Radio className="rounded-full" />
                      </div>

                      <div className="ms-4 text-sm">
                        <Label className="font-medium">
                          Visa ending in 7658
                        </Label>
                        <p id="visa-text" className="text-dark-gray text-xs">
                          Expiry 10/2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        type="button"
                        className="cursor-pointer font-medium text-sm"
                      >
                        Delete
                      </button>

                      <div className="w-px h-3 shrink-0 bg-gray"></div>

                      <button
                        type="button"
                        className="cursor-pointer font-medium text-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Image
                      width={88}
                      height={40}
                      className="w-auto h-8 max-w-full block align-middle"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex mt-6 items-center justify-between border rounded-lg bg-light-gray p-4 ps-4 border-gray">
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                      <Radio className="rounded-full" />
                      </div>

                      <div className="ms-4 text-sm">
                        <Label className="font-medium">
                          mastercard ending in 7558
                        </Label>
                        <p id="visa-text" className="text-dark-gray text-xs">
                          Expiry 10/2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        type="button"
                        className="cursor-pointer font-medium text-sm"
                      >
                        Delete
                      </button>

                      <div className="w-px h-3 shrink-0 bg-gray"></div>

                      <button
                        type="button"
                        className="cursor-pointer font-medium text-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Image
                      width={88}
                      height={40}
                      className="w-auto h-8 max-w-full block align-middle"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex mt-6 items-center justify-between border rounded-lg bg-light-gray p-4 ps-4 border-gray">
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                      <Radio className="rounded-full" />
                      </div>

                      <div className="ms-4 text-sm">
                        <Label className="font-medium">
                          Paypal account
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        type="button"
                        className="cursor-pointer font-medium text-sm"
                      >
                        Delete
                      </button>

                      <div className="w-px h-3 shrink-0 bg-gray"></div>

                      <button
                        type="button"
                        className="cursor-pointer font-medium text-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Image
                      width={88}
                      height={40}
                      className="w-auto h-8 max-w-full block align-middle"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center">
                  <div className="w-full h-px bg-gray"></div>
                  <div className="px-5 text-center text-dark-gray">or</div>
                  <div className="w-full h-px bg-gray"></div>
                </div>
                <h3 className="mt-6 text-dark-gray">
                  Add a new payment payment method
                </h3>

                <div className="mt-6 grid gap-4 grid-cols-2">
                  <div className="col-span-1">
                    <Label>Full name (as displayed on card)*</Label>
                    <Input type="text" placeholder="Bonnie Green" />
                  </div>
                  <div className="col-span-1">
                    <Label>Card number*</Label>
                    <Input
                      type="text"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                    />
                  </div>
                  <div className="col-span-1">
                    <Label>Card expiration*</Label>
                    <Input type="text" placeholder="12/23" />
                  </div>
                  <div className="col-span-1">
                    <Label className="flex items-center gap-1 relative">
                      CVV*
                      <button className="peer">
                        <svg
                          className="shrink-0 w-4 h-4 text-dark-gray"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className="absolute hidden peer-hover:block bg-dark text-white py-2 px-3 rounded-lg"
                        style={{
                          inset: "auto auto 0px 0px",
                          margin: "0px",
                          transform: "translate(-78px, -24px) ",
                        }}
                      >
                        The last 3 digits on back of card
                      </div>
                    </Label>

                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="***"
                        className="text-sm"
                      />
                      <div className="absolute top-0 bottom-0 flex items-center pe-3.5 end-0">
                        <Image
                          width={22}
                          height={16}
                          className="max-w-full h-4 block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/cvv-image-light.svg"
                          alt="cvv location image"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-light-green transition-colors duration-200 hover:bg-green text-white py-2 px-3 rounded-lg mt-6 border border-transparent"
                >
                  Pay now
                </button>
              </form>

              <div className="grow lg:mt-0 sm:mt-8 mt-6">
                <div className="rounded-lg border border-gray bg-light-gray p-6">
                  <div>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-dark-gray font-medium">
                        Original price
                      </dt>
                      <dd className="font-medium text-dark">$6,592.00</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 mt-2">
                      <dt className="text-dark-gray font-medium">Savings</dt>
                      <dd className="font-medium text-green">-$299.00</dd>
                    </dl>

                    <dl className="mt-2 flex items-center justify-between gap-4">
                      <dt className="text-dark-gray font-medium">
                        Store Pickup
                      </dt>
                      <dd className="font-medium text-dark">$99</dd>
                    </dl>

                    <dl className="mt-2 flex items-center justify-between gap-4">
                      <dt className="text-dark-gray font-medium">Tax</dt>
                      <dd className="font-medium text-dark">$799</dd>
                    </dl>
                  </div>

                  <dl className="mt-2 flex items-center justify-between gap-4">
                    <dt className="text-dark-gray font-medium">Total</dt>
                    <dd className="font-medium text-dark">$7,191.00</dd>
                  </dl>
                </div>
                <div className=" mt-6 rounded-lg border border-gray bg-light-gray p-6">
                  <div className="gap-4 sm:flex">
                    <div className="flex items-center justify-center h-12 w-12 shrink-0 sm:mb-0 mb-4 rounded-lg bg-gray">
                      <svg
                        className="block shrink-0 w-6 h-6 text-dark-gray"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-dark">
                        Free shipping
                      </h4>
                      <p className="mb-2 text-sm text-dark-gray">
                        You have 3 months to try free shipping and exclusive
                        Genius offers.
                      </p>
                      <a
                        href="#"
                        className="text-sm font-medium inline-flex text-green hover:underline hover:underline-offset-2"
                      >
                        Try MNN PRO 3 months free
                        <svg
                          className="ms-2 w-5 h-5 block shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" mt-6 rounded-lg border border-gray bg-light-gray p-6">
                  <div className="gap-4 sm:flex">
                    <div className="flex items-center justify-center h-12 w-12 shrink-0 sm:mb-0 mb-4 rounded-lg bg-gray">
                      <svg
                        className="block shrink-0 w-6 h-6 text-dark-gray"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-dark">
                        - 10% Extra
                      </h4>
                      <p className="mb-2 text-sm text-dark-gray">
                        You get 10% extra when purchasing this product, for
                        orders of at least $100!
                      </p>
                      <a
                        href="#"
                        className="text-sm font-medium inline-flex text-green hover:underline hover:underline-offset-2"
                      >
                        Save the promo code in your account
                        <svg
                          className="ms-2 w-5 h-5 block shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminContainer>
  );
};

export default Checkout;
