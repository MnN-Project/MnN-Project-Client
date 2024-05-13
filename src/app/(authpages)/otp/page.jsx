"use client";
import Link from "next/link";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import * as Yup from 'yup'
import * as Yup from "yup";

const styles = {
  backgroundImage: `url('../../../assets/otpSideImage.png')`,
};

const VerifyOtp = () => {
  const validateOTP = Yup.object({
    firstOTP: Yup.number().required(),
    secondOTP: Yup.number().required(),
    thirdOTP: Yup.number().required(),
    fourthOTP: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      firstOTP: "",
      secondOTP: "",
      thirdOTP: "",
      fourthOTP: "",
    },
    validationSchema: validateOTP,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputsRef = useRef([]);
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const form = document.getElementById("otp-form");
    const inputs = [...form.querySelectorAll("input[type=text]")];
    const submit = form.querySelector("button[type=submit]");

    const handleKeyDown = (e) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "Tab" &&
        !e.metaKey
      ) {
        e.preventDefault();
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        const index = inputs.indexOf(e.target);
        if (e.key === "Backspace" && index > 0 && inputs[index].value === "") {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        } else if (
          e.key === "Delete" &&
          index < inputs.length - 1 &&
          inputs[index].value === ""
        ) {
          inputs[index + 1].value = "";
          inputs[index + 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const { target } = e;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          submit.focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text");
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split("");
      inputs.forEach((input, index) => (input.value = digits[index]));
      submit.focus();
    };

    inputs.forEach((input, index) => {
      input.addEventListener("input", handleInput);
      input.addEventListener("keydown", handleKeyDown);
      input.addEventListener("focus", handleFocus);
      input.addEventListener("paste", handlePaste);
      inputsRef.current[index] = input;
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keydown", handleKeyDown);
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("paste", handlePaste);
      });
    };
  }, []);

  const handlePattern = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputsRef.current.map((input) => input.value).join("");
    console.log("OTP submitted:", otp);
    setSubmitted(false); //set to true after submit
  };

  return (
    <section className="bg-light-gray">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100dvh] lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-dark"
        >
          <Image
            className="w-8 h-8 mr-2 inline-block"
            width={32}
            height={32}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Made In Nigeria
        </a>
        <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
            <p className="text-[15px] text-dark-gray">
              Enter the 4-digit verification code that was sent to your email
              johndoe@gmail.com.
            </p>
          </header>
          <form id="otp-form" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-3">
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-dark bg-light-gray border border-gray hover:border-gray appearance-none rounded p-4 outline-none focus:bg-white focus:border-green focus:ring-2 focus:ring-green"
                pattern="[0-9]*"
                onChange={handlePattern}
                maxLength="1"
              />
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-dark bg-light-gray border border-gray hover:border-gray appearance-none rounded p-4 outline-none focus:bg-white focus:border-green focus:ring-2 focus:ring-green"
                pattern="[0-9]*"
                onChange={handlePattern}
                maxLength="1"
              />
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-dark bg-light-gray border border-gray hover:border-gray appearance-none rounded p-4 outline-none focus:bg-white focus:border-green focus:ring-2 focus:ring-green"
                pattern="[0-9]*"
                onChange={handlePattern}
                maxLength="1"
              />
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-dark bg-light-gray border border-gray hover:border-gray appearance-none rounded p-4 outline-none focus:bg-white focus:border-green focus:ring-2 focus:ring-green"
                pattern="[0-9]*"
                onChange={handlePattern}
                maxLength="1"
              />
            </div>
            <div className="max-w-[260px] mx-auto mt-4">
              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-light-green/10 hover:bg-green focus:outline-none focus:ring focus:ring-green focus-visible:outline-none focus-visible:ring focus-visible:ring-green transition-colors duration-150"
              >
                Verify Account
              </button>
            </div>
          </form>
          <div className="text-sm text-slate-500 mt-4">
            {`Didn't`} receive code?{" "}
            <a
              className="font-medium text-green hover:text-light-green"
              href="#"
            >
              Resend otp?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
