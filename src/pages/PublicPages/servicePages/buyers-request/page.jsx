import React from 'react';
import Container from '@/components/container/Container';
import Header from '@/components/header/Header';

const BuyersRequest = () => {
  return (
    <section className="z-10">
      <Header />
      <Container className="">
        <section className="h-full mt-s">
          <div className="max-w-5xl mx-auto">
            <h2 className="capitalize text-green text-center font-semibold text-lg">
              Post your request
            </h2>
            <p className="capitalize text-sm text-center">Let sellers contact you</p>
          </div>
          <form action="#" className="mt-2 max-w-4xl mx-auto">
            <div className="mt-2">
              <div className="form wrapper space-y-2 sm:p-8 md:space-y-4">
                <h2 className="text-sm hidden sm:block">
                  Drop more information as much as possible so you can get the precise product that
                  you are looking for
                </h2>
                <div className="bg-white p-4 lg:p-8 rounded-md border border-gray">
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="product"
                          id="product"
                          className="block w-full rounded-lg border border-dark-gray placeholder:text-dark text-dark p-2 focus:ring-green focus:border-green text-sm"
                          placeholder="Product"
                          required=""
                        />
                        <span className="text-sm font-light text-danger"></span>
                      </div>
                      <div>
                        <label
                          htmlFor="Category"
                          className="block text-sm font-medium text-gray-900 sr-only"
                        >
                          {' '}
                          Category{' '}
                        </label>
                        <select
                          name=""
                          id=""
                          className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                        >
                          <option value="">Select Category</option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            className="block w-full rounded-lg border border-dark-gray placeholder:text-dark text-dark p-2 focus:ring-green focus:border-green text-sm"
                            placeholder="Quantity"
                            required=""
                          />
                          <span className="text-sm font-light text-danger"></span>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="trade_terms"
                            id="trade_terms"
                            className="block w-full rounded-lg border border-dark-gray placeholder:text-dark text-dark p-2 focus:ring-green focus:border-green text-sm"
                            placeholder="Trade Terms & FOB"
                            required=""
                          />
                          <span className="text-sm font-light text-danger"></span>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="max_budget"
                            id="max_budget"
                            className="block w-full rounded-lg border border-dark-gray placeholder:text-dark text-dark p-2 focus:ring-green focus:border-green text-sm"
                            placeholder="Max Budget"
                            required=""
                          />
                          <span className="text-sm font-light text-danger"></span>
                        </div>
                      </div>
                      {/*Left*/}
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="Tonnes"
                            className="block text-sm font-medium text-gray-900 sr-only"
                          >
                            {' '}
                            Tonnes{' '}
                          </label>
                          <select
                            name=""
                            id=""
                            className="w-full rounded-lg p-2 border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                          >
                            <option value="">Tonnes</option>
                            <option value="JM">John Mayer</option>
                            <option value="SRV">Stevie Ray Vaughn</option>
                            <option value="JH">Jimi Hendrix</option>
                          </select>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="target_unit_price"
                            id="target_unit_price"
                            className="block w-full rounded-lg border border-dark-gray placeholder:text-dark text-dark p-2 focus:ring-green focus:border-green text-sm"
                            placeholder="Target Unit Price"
                            required=""
                          />
                          <span className="text-sm font-light text-danger"></span>
                        </div>
                        <div>
                          <label
                            htmlFor="Category"
                            className="block text-sm font-medium text-gray-900 sr-only"
                          >
                            {' '}
                            Category{' '}
                          </label>
                          <select
                            name=""
                            id=""
                            className="w-full p-2 rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                          >
                            <option value="">Select Category</option>
                            <option value="JM">John Mayer</option>
                            <option value="SRV">Stevie Ray Vaughn</option>
                            <option value="JH">Jimi Hendrix</option>
                          </select>
                        </div>
                      </div>
                      {/*Right*/}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="OrderNotes"
                          className="block text-sm font-medium text-gray-700 sr-only"
                        >
                          {' '}
                          Order notes
                        </label>
                        <textarea
                          id="OrderNotes"
                          className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm placeholder:text-xs sm:text-sm focus:ring-green focus:border-green"
                          rows="4"
                          placeholder="Describe what you want to buy and attach pictures if available"
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-32 lg:h-64 border-2 border-dark-gray border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-light-gray"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-dark-gray"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-dark-gray">
                              <span className="font-semibold">Click to upload</span> or drag and
                              drop
                            </p>
                            <p className="text-xs text-dark-gray">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="form wrapper space-y-4 sm:px-8 pb-8 md:space-y-4">
                <h2 className="font-semibold text-sm">Shooping and Payment</h2>
                <div className="bg-white p-4 lg:p-8 rounded-md border border-gray">
                  <div className="space-y-4">
                    <div className="sm:flex items-center w-full sm:space-x-4">
                      <p className="hidden sm:block text-nowrap basis-1/3">Shipping Method</p>
                      <div className="basis-2/3">
                        <label
                          htmlFor="Shipping"
                          className="block text-sm font-medium text-gray-900 sr-only"
                        >
                          {' '}
                          Shipping{' '}
                        </label>
                        <select
                          name=""
                          id=""
                          className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                        >
                          <option value="">Shippping Method</option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:flex items-center w-full sm:space-x-4">
                      <p className="hidden sm:block text-nowrap basis-1/3">Destination</p>
                      <div className="basis-2/3">
                        <label
                          htmlFor="Destination"
                          className="block text-sm font-medium text-gray-900 sr-only"
                        >
                          {' '}
                          Destination{' '}
                        </label>
                        <select
                          name=""
                          id=""
                          className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                        >
                          <option value="">Location</option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:flex items-center w-full sm:space-x-4">
                      <p className="hidden sm:block text-nowrap basis-1/3">Time Lead</p>
                      <div className="basis-2/3">
                        <label
                          htmlFor="Time Lead"
                          className="block text-sm font-medium text-gray-900 sr-only"
                        >
                          {' '}
                          Time Lead{' '}
                        </label>
                        <select
                          name=""
                          id=""
                          className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                        >
                          <option value="">Time Lead</option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:flex items-center w-full sm:space-x-4">
                      <p className="hidden sm:block text-nowrap basis-1/3">Means of Payment</p>
                      <div className="basis-2/3">
                        <label
                          htmlFor="Means of Payment"
                          className="block text-sm font-medium text-gray-900 sr-only"
                        >
                          {' '}
                          Means of Payment{' '}
                        </label>
                        <select
                          name=""
                          id=""
                          className="w-full rounded-lg border-gray-300 text-sm text-dark focus:ring-green focus:border-green"
                        >
                          <option value="">Bank Transfer</option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:flex items-center w-full sm:space-x-4">
                      <p className="hidden sm:block basis-1/3"></p>
                      <button
                        type="submit"
                        className="w-full sm:basis-2/3 py-2 flex items-center justify-center text-white bg-green hover:bg-light-green rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </Container>
    </section>
  );
};

export default BuyersRequest;
