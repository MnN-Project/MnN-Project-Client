// import React from 'react'
import Link from "next/link";

const styles = {
  backgroundImage: `url('../../../assets/otpSideImage.png')`,
};

function AuthLayout({ title, titleLink, children }) {
  return (
    <div>
      {/* <div className="bg-white p-10 font-montserrat md:bg-none md:py-6 lg:h-screen lg:px-48"> */}
      <div
        className="min-h-screen bg-white px-5 py-6 font-montserrat lg:h-screen lg:px-28"
        style={{
          paddingTop: "2rem",
          "@media (max-width: 768px)": {
            paddingTop: "6rem",
          },
        }}
      >
        <div className="flex justify-center mt-[25px] md:block">
          <p className="mt-20 mb-4 w-fit px-3 py-2 text-sm font-bold text-white bg-green md:mb-2">
            MADE IN NIGERIALOGO
          </p>
        </div>
        <div className="md:mx-16">
          <p className="mb-2 hidden text-right text-base text-black md:block">
            {title}{" "}
            <Link href={"#"} className=" text-green hover:text-[#308868ed] ">
              {titleLink}
            </Link>
          </p>

          <div className="grid-cols-2 bg-white shadow min-h-[75vh] md:grid">
            <div
              className="hidden bg-cover bg-center px-7 py-6 text-xl font-bold md:block"
              style={styles}
            >
              <p className="text-green">Register With Us</p>
              <p className="mb-14 text-base text-dark-gray w-[50%]">
                Your One Stop Website
              </p>
              <p className="mb-2 text-base w-[50%]">
                Enjoy Our Unlimited Offers
              </p>

              <div className="w-fit px-3 md:px-0 md:w-[320px] md:h-[140px] grid place-content-center bg-[#0c6a478a]">
                <ul className="list-disc p-3 font-medium tracking-wide text-white text-[8px] md:text-sm">
                  <li>Unlimited Posting </li>
                  <li className="py-1">Featured products</li>
                  <li>Available on Search Engine</li>
                </ul>
              </div>
            </div>
            <div className="text-sm font-normal">{children}</div>
          </div>
        </div>
        <div className="my-4 hidden text-center text-sm font-semibold md:block">
          <Link href={"#"} className=" hover:text-[#308868]">
            About Us
          </Link>
          <span className="mx-4">|</span>
          <Link href={"#"} className=" hover:text-[#308868]">
            FAQ
          </Link>

          <span className="mx-4">|</span>
          <Link href={"#"} className=" hover:text-[#308868]">
            Help
          </Link>

          <span className="mx-4">|</span>
          <Link href={"#"} className=" hover:text-[#308868]">
            Complaint
          </Link>

          <span className="mx-4">|</span>
          <Link href={"#"} className=" hover:text-[#308868]">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
