import React, { useState } from "react";
import { cn } from "@/libs/utils";
import Label from "./Label"; // Ensure you have these components
import Input from "./Input"; // Ensure you have these components
import InputCounter from "./InputCounter"; // Ensure you have these components

const VariantsCard = () => {
  const [variants, setVariants] = useState([
    { size: "", color: "", price: "", quantity: 0 }
  ]);

  const handleAddVariant = () => {
    setVariants([...variants, { size: "", color: "", price: "", quantity: 0 }]);
  };

  const handleDeleteVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newVariants = variants.map((variant, i) => 
      i === index ? { ...variant, [field]: value } : variant
    );
    setVariants(newVariants);
  };

  return (
    <div className="flex border border-gray rounded-lg shadow bg-white mt-4 overflow-hidden flex-col">
      {/* Header */}
      <div className="py-3 px-5 flex items-center justify-between border-b border-gray gap-5">
        <h2 className="inline-block font-semibold">Variants</h2>
      </div>
      {/* End Header */}

      {/* Body */}
      <div className="py-3 px-5">
        {/* Heading */}
        <div className="hidden sm:grid sm:grid-cols-12">
          <div className="col-span-2">
            <span className="text-xs uppercase text-dark-gray">Size</span>
          </div>

          <div className="col-span-2">
            <span className="text-xs uppercase text-dark-gray">Color</span>
          </div>

          <div className="col-span-3">
            <span className="text-xs uppercase text-dark-gray">Price</span>
          </div>

          <div className="col-span-2">
            <span className="text-xs uppercase text-dark-gray">Quantity</span>
          </div>

          <div className="col-span-2">
            <span className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect(0px, 0px, 0px, 0px) whitespace-nowrap border-0">
              Actions
            </span>
          </div>
        </div>
        {/* End Heading */}

        {/* List */}
        <div className="mt-2">
          {variants.map((variant, index) => (
            <div key={index} className="mb-3">
              <div className="grid items-center grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-5">
                <div className="col-span-1 sm:col-span-2">
                  <Label
                    htmlFor={`size-${index}`}
                    className={`sm:hidden uppercase text-dark-gray mb-1.5`}
                  >
                    Size
                  </Label>
                  <Input
                    id={`size-${index}`}
                    type="text"
                    value={variant.size}
                    onChange={(e) => handleChange(index, "size", e.target.value)}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <Label
                    htmlFor={`color-${index}`}
                    className={`sm:hidden uppercase text-dark-gray mb-1.5`}
                  >
                    Color
                  </Label>
                  <Input
                    id={`color-${index}`}
                    type="text"
                    value={variant.color}
                    onChange={(e) => handleChange(index, "color", e.target.value)}
                  />
                </div>

                <div className="col-span-1 sm:col-span-3">
                  <Label
                    htmlFor={`price-${index}`}
                    className={`sm:hidden uppercase text-dark-gray mb-1.5`}
                  >
                    Price
                  </Label>
                  <div className="relative w-full">
                    <Input
                      id={`price-${index}`}
                      type="text"
                      value={variant.price}
                      onChange={(e) => handleChange(index, "price", e.target.value)}
                      sublabel="ngn"
                    />
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-4">
                  <Label
                    htmlFor={`quantity-${index}`}
                    className={`sm:hidden uppercase text-dark-gray mb-1.5`}
                  >
                    Quantity
                  </Label>
                  <div className="py-1.5 px-3 border border-gray rounded-lg">
                    <InputCounter
                      id={`quantity-${index}`}
                      initialValue={variant.quantity}
                      onChange={(e) => handleChange(index, "quantity", parseInt(e.target.value, 10))}
                    />
                  </div>
                </div>

                <div className="sm:col-span-1 text-start sm:text-end">
                  <button
                    type="button"
                    className="sm:text-end sm:p-1 text-dark-gray font-medium rounded-full border border-transparent bg-light-gray inline-flex items-center justify-center gap-1.5"
                    onClick={() => handleDeleteVariant(index)}
                  >
                    <svg
                      className="hidden sm:block shrink-0 w-4 h-4"
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
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="block sm:hidden font-medium py-1 px-3 text-sm">
                      Delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End List */}
      </div>
      {/* End Body */}

      {/* Footer */}
      <div className="py-3 px-5 flex items-center justify-between">
        {/* Add Variant */}
        <button
          type="button"
          className="py-1.5 px-2 rounded-full border border-dashed border-dark-gray inline-flex items-center gap-1 text-xs font-bold text-dark-gray"
          onClick={handleAddVariant}
        >
          <svg
            className="block w-3 h-3 shrink-0"
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add variant
        </button>
        {/* End Add Variant */}
      </div>
      {/* End Footer */}
    </div>
  );
};

export default VariantsCard;
