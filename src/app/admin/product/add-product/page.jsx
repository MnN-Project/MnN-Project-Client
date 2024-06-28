"use client";
import React, { useState } from "react";
import AdminContainer from "@/components/container/AdminContainer";
import Editor from "@/components/editor/Editor";
import UploadImage from "@/components/file/UploadImage";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import InputCounter from "@/components/ui/InputCounter";
import ProductVariant from "@/components/ui/ProductVariant";

const AddProduct = () => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  return (
    <AdminContainer>
      <main>
        <div>
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
              <a className="flex items-center text-sm" href="#">
                Products
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
              </a>
            </li>
            <li
              className="font-semibold text-sm truncate text-dark"
              aria-current="page"
            >
              Add Product
            </li>
          </ol>
          {/*End Breadcrumb */}

          <div className="sm:pt-s pt-2">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="inline-flex justify-between items-center gap-1">
                  <a
                    className="text-green text-sm font-medium decoration-2"
                    href="#"
                  >
                    Brand link
                  </a>
                </p>
                <h1 className="font-semibold text-dark text-lg">Title</h1>
              </div>
            </div>
            {/* End Header */}

            {/* Products Grid */}
            <div className="mt-s grid grid-cols-1 lg:grid-cols-6 gap-6">
              <div className="lg:col-span-4">
                {/* Products Card */}
                <div className="flex bg-white shadow border border-gray rounded-xl flex-col">
                  {/* Header */}
                  <div className="py-3 px-5 border-b border-gray flex items-center justify-between gap-5">
                    <h2 className="inline-block font-semibold text-dark">
                      Product info
                    </h2>
                  </div>
                  {/* End Header */}

                  {/* Body */}
                  <div className="p-s">
                    <div>
                      <label className="block mb-2 text-dark font-medium text-sm">
                        Thumbnail
                      </label>

                      {/* Logo Upload Group */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center justify-center w-20 h-20 border-2 border-dotted border-dark-gray rounded-full">
                          <svg
                            className="w-6 h-6 text-dark-gray"
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
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </span>

                        <div className="grow">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="inline-flex items-center py-2 px-3 bg-green font-semibold gap-2 text-white border border-transparent text-xs rounded-lg"
                            >
                              <svg
                                className="w-4 h-4 text-white"
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" x2="12" y1="3" y2="15" />
                              </svg>
                              Upload photo
                            </button>
                            <button
                              type="button"
                              className="py-2 px-3 rounded-lg border text-xs border-gray text-danger"
                              disabled
                            >
                              Delete
                            </button>
                          </div>
                          <p className="text-xs text-dark-gray mt-2">
                            Your image should be square, at least 100x100px, and
                            JPG or PNG.
                          </p>
                        </div>
                      </div>
                      {/* End Logo Upload Group */}
                    </div>

                    {/* Input */}
                    <div className={`mt-4`}>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Shirt, t-shirt, etc."
                      />
                    </div>
                    {/* End Input */}

                    {/* Input Grid */}
                    <div className="grid grid-cols-6 lg:grid-cols-2 gap-4 dw1oe h9n6m p4k2b">
                      {/* Input */}
                      <div className={`mt-4`}>
                        <Label htmlFor="sku">SKU</Label>
                        <Input
                          id="sku"
                          type="text"
                          placeholder="eg. 348121032"
                        />
                      </div>
                      {/* End Input */}

                      {/* Input */}
                      <div className={`mt-4`}>
                        <Label htmlFor="weight">Weight</Label>

                        <div className="relative w-full">
                          <Input id="weight" type="text" placeholder="0.0" />
                        </div>

                        <p className="mt-3 text-xs text-dark-gray">
                          Used to calculate shipping rates at checkout and label
                          prices during fulfillment.
                        </p>
                      </div>
                      {/* End Input */}
                    </div>
                    {/* End Input Grid */}

                    {/* Textarea Input */}
                    <div>
                      <Label htmlFor="description">Description</Label>

                      {/* Editor */}
                      <Editor />

                      {/* End Tiptap */}
                    </div>
                    {/* End Textarea Input */}
                  </div>
                  {/* End Body */}
                </div>
                {/* End Products Card */}

                {/* Media Card */}
                <div className="flex mt-4 shadow bg-white rounded-lg border border-gray overflow-hidden flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-5 border-b border-light-gray px-5 py-3 ">
                    <h2 className="inline-block font-semibold">
                      Product Image
                    </h2>
                  </div>
                  {/* End Header */}
                  {/* Body */}
                  <div className="p-5">
                    {/* Drag 'n Drop */}
                    <div>
                      <UploadImage files={files} onupdatefiles={setFiles} />
                    </div>
                    {/* End Drag 'n Drop */}
                    <p className="text-sm text-dark-gray inline-block mt-4">
                      Add up to 3 images to your product.
                    </p>
                  </div>
                  {/* End Body */}
                </div>
                {/* End Media Card */}

                {/* Variants Card */}
                <ProductVariant />
                
                {/* End Variants Card */}
              </div>
              {/* End Col */}

              <div className="lg:col-span-2">
                <div className="lg:top-5 lg:sticky">
                  {/* Product Pricing Card */}
                  <div className="flex flex-col bg-white overflow-hidden rounded-lg border border-gray shadow">
                    {/* Header */}
                    <div className="py-3 px-5 flex items-center justify-between border-b border-gray">
                      <h2 className="inline-block font-semibold">Pricing</h2>
                    </div>
                    {/* End Header */}

                    {/* Body */}
                    <div className="p-5">
                      {/* Input */}
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <div className="relative w-full">
                          <Input
                            id="price"
                            type="text"
                            placeholder="0.00"
                            value="45.00"
                          />
                        </div>
                      </div>
                      {/* End Input */}

                      {/* Switch/Toggle */}
                      <div className="flex mt-4 py-2 px-3 w-full border border-gray rounded-lg item4 justify-between">
                        <p className="inline-block flex-1 text-sm text-dark-gray">
                          Availability
                        </p>
                        <div className="relative inline-block">
                          {/* <input type="checkbox" id="availability" className="relative h-6 w-11 cursor-pointer rounded-full p-px transition-all duration-200 bg-green checked:bg-white checked:text-green checked:border-green focus:checked:border-green" checked/> */}
                          <label
                            htmlFor="availability"
                            class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green p-px"
                          >
                            <input
                              type="checkbox"
                              id="availability"
                              class="peer sr-only"
                            />

                            <span class="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all peer-checked:start-6"></span>
                          </label>
                        </div>
                      </div>
                      {/* End Switch/Toggle */}

                      {/* Links List */}
                      <div className="mt-4">
                        <p>
                          <span className=" inline-flex items-center gap-2 text-sm">
                            <svg
                              className="block w-4 h-4 fill-gold"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <a
                              className="text-green text-sm font-medium"
                              href="#"
                            >
                              Set {`Compare to`} price
                            </a>
                          </span>
                        </p>
                        <p>
                          <span className=" inline-flex items-center gap-2 text-sm">
                            <svg
                              className="block w-4 h-4 fill-gold"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <a
                              className="text-green text-sm font-medium"
                              href="#"
                            >
                              Bulk discount pricing
                            </a>
                          </span>
                        </p>
                      </div>
                      {/* End Links List */}
                    </div>
                    {/* End Body */}
                  </div>
                  {/* End Product Pricing Card */}

                  {/* Organization Card */}
                  <div className="flex mt-5 border border-gray rounded-lg overflow-hidden shadow bg-white flex-col ">
                    {/* Header */}
                    <div className="py-3 px-5 flex justify-between items-center border-b border-gray gap-5">
                      <h2 className="inline-block font-semibold">
                        Organization
                      </h2>
                    </div>
                    {/* End Header */}

                    {/* Body */}
                    <div className="p-5">
                      {/* Input */}
                      <div>
                        <Label htmlFor="vendor">Vendor</Label>
                        <div className="relative w-full">
                          <Input
                            id="vendor"
                            type="text"
                            placeholder="eg. Nike"
                          />
                        </div>
                      </div>
                      {/* End Input */}

                      {/* Input */}
                      <div className="mt-2">
                        <Label htmlFor="category">Category</Label>
                        {/* Select */}
                        <div className="relative">
                          <Select
                            options={[
                              { value: "", label: "choose" },
                              { value: "clothing", label: "Clothing" },
                              { value: "shoes", label: "Shoes" },
                              { value: "electronics", label: "Electronics" },
                              { value: "Others", label: "Others" },
                            ]}
                          />
                        </div>
                        {/* End Select */}
                      </div>
                      {/* End Input */}
                      <div className="mt-2">
                        <Label htmlFor="collections">Collections</Label>

                        {/* Select */}
                        <div className="relative">
                          <Select
                            options={[
                              { value: "", label: "choose" },
                              { value: "Winter", label: "Winter" },
                              { value: "Spring", label: "Spring" },
                              { value: "Summer", label: "Summer" },
                              { value: "Autumn", label: "Autumn" },
                            ]}
                          />
                        </div>
                        {/* End Select */}
                        <p className="text-xs tracking-tighter inline-block text-dark-gray mt-1">
                          Add this product to a collection so it’s easy to find
                          in your store.
                        </p>
                      </div>
                      {/* End Input */}

                      {/* Input */}
                      <div className="mt-2">
                        <Label htmlFor="tags">Tags</Label>
                        <div className="relative w-full">
                          <Input
                            id="tags"
                            type="text"
                            placeholder="Enter Tags"
                          />
                        </div>
                      </div>
                      {/* End Input */}
                    </div>
                    {/* End Body */}
                  </div>
                  {/* End Organization Card */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Products Grid */}
          </div>
        </div>
      </main>
    </AdminContainer>
  );
};

export default AddProduct;
