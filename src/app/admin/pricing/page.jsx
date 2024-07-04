"use client";
import React, { useState } from "react";
import AdminContainer from "@/components/container/AdminContainer";

function PricingTab({
  popular,
  yearly,
  planName,
  price,
  planDescription,
  features,
}) {
  return (
    <div className={`h-full ${popular ? "border-green bg-white border rounded-lg" : "bg-white"}`}>
      <div className="relative flex flex-col h-full p-6 rounded-lg  border border-gray shadow shadow-dark/5">
        {popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-medium py-1.5 px-3 bg-green text-white rounded-full shadow-sm shadow-dark/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-dark  font-semibold mb-1">{planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-dark  font-bold text-lg">$</span>
            <span className="text-dark  font-bold text-xl">
              {yearly ? price.yearly : price.monthly}
            </span>
            <span className="text-dark-gray font-medium">/mo</span>
          </div>
          <div className="text-sm text-dark-gray mb-5">{planDescription}</div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-light-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green focus-visible:outline-none focus-visible:ring focus-visible:ring-green/30 transition-colors duration-150"
            href="#"
          >
            Purchase Plan
          </a>
        </div>
        <div className="text-dark  font-medium mb-3">Includes:</div>
        <ul className="text-dark-gray text-sm space-y-3 grow">
          {features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-green mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const Pricing = () => {
  const [yearly, setYearly] = useState(true);
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <AdminContainer>
      <div>
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-white rounded-lg">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-green rounded-lg shadow-sm shadow-green/10 transform transition-transform duration-150 ease-in-out ${
                  yearly ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-green transition-colors duration-150 ease-in-out ${
                yearly ? "text-white" : "text-dark-gray"
              }`}
              onClick={() => setYearly(true)}
              aria-pressed={isAnnual}
            >
              Yearly{" "}
              <span className={`${yearly ? "text-green" : "text-dark-gray"}`}>
                -20%
              </span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-green transition-colors duration-150 ease-in-out ${
                yearly ? "text-dark-gray" : "text-white"
              }`}
              onClick={() => setYearly(false)}
              aria-pressed={isAnnual}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {/* Pricing tab 1 */}
          <PricingTab
            yearly={yearly}
            planName="Essential"
            price={{ yearly: 29, monthly: 35 }}
            planDescription="There are many variations available."
            features={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
            ]}
          />

          {/* Pricing tab 2 */}
          <PricingTab
            yearly={yearly}
            popular={true}
            planName="Perform"
            price={{ yearly: 49, monthly: 55 }}
            planDescription="There are many variations available."
            features={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Predefined chunks as necessary",
            ]}
          />

          {/* Pricing tab 3 */}
          <PricingTab
            yearly={yearly}
            planName="Enterprise"
            price={{ yearly: 79, monthly: 85 }}
            planDescription="There are many variations available."
            features={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Predefined chunks as necessary",
              "Free from repetition",
            ]}
          />
        </div>
      </div>
    </AdminContainer>
  );
};

export default Pricing;
