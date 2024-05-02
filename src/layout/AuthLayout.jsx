// import React from 'react'
import Link from "next/link";

const styles = {
  backgroundImage: `url('../../../assets/otpSideImage.png')`,
};

function AuthLayout({ title, titleLink, children }) {
  return (
    <div>
      {/* <div className=" font-montserrat lg:px-48 md:py-6 p-10 bg-white md:bg-none  lg:h-screen"> */}
      <div
        className=" font-montserrat bg-white  px-5 lg:px-28 py-6 min-h-screen  lg:h-screen"
        style={{
          paddingTop: "2rem",
          "@media (max-width: 768px)": {
            paddingTop: "6rem",
          },
        }}
      >
        <div className=" flex justify-center md:block mt-[25px] ">
          <p className=" bg-green  text-white text-sm md:mb-2 w-fit px-3 py-2 mb-4 font-bold mt-20 ">
            MADE IN NIGERIALOGO
          </p>
        </div>
        <div className=" md:mx-16 ">
          <p className=" text-right text-base mb-2 text-black hidden md:block">
            {title}{" "}
            <Link href={"#"} className=" text-green hover:text-[#308868ed] ">
              {titleLink}
            </Link>
          </p>

          <div className="  min-h-[75vh] bg-white  shadow md:grid grid-cols-2">
            <div
              className="py-6 bg-cover bg-center px-7 font-bold text-xl hidden md:block "
              style={styles}
            >
              <p className="text-green   ">Register With Us</p>
              <p className="text-dark-gray w-[50%] mb-14 text-base">
                Your One Stop Website
              </p>
              <p className="w-[50%] text-base mb-2">
                Enjoy Our Unlimited Offers
              </p>

              <div className="w-fit px-3 md:px-0 md:w-[320px] md:h-[140px] grid place-content-center bg-[#0c6a478a]">
                <ul className="p-3 text-[8px] md:text-sm text-white list-disc tracking-wide font-medium">
                  <li>Unlimited Posting </li>
                  <li className="py-1">Featured products</li>
                  <li>Available on Search Engine</li>
                </ul>
              </div>
            </div>
            <div className=" font-normal text-sm  ">{children}</div>
          </div>
        </div>
        <div className="text-center text-sm font-semibold my-4 hidden md:block">
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
