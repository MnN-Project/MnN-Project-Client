import Link from "next/link";

const styles = {
  backgroundImage: `url('../../../assets/otpSideImage.png')`,
};

const VerifyOtp = () => {
  return (
    <div className=" font-montserrat lg:px-48 md:py-6 p-10 bg-white md:bg-none  lg:h-screen">
      <div className="flex justify-center md:block">
        <p className=" bg-green text-white text-sm md:mb-2 w-fit px-3 py-2 mb-4 font-bold  ">
          MADE IN NIGERIALOGO
        </p>
      </div>
      <div className=" md:mx-16 ">
        <p className=" text-right text-base mb-2 text-black hidden md:block">
          Already a member? <Link href={'#'}>Sign in</Link> 
        </p>

        <div className="  min-h-[75vh] bg-white  md:shadow md:grid grid-cols-2">
          <div
            className="py-6 bg-cover bg-center px-7 font-bold text-xl hidden md:block "
            style={styles}
          >
            <p className="text-green   ">Register With Us</p>
            <p className="text-dark-gray w-[50%] mb-14 text-base">
              Your One Stop Website
            </p>
            <p className="w-[50%] text-base mb-2">Enjoy Our Unlimited Offers</p>
            <div
              className="bg-[08AB70] bg-green bg-opacity-[50%] pl-14 text-white text-base font-normal leading-10 py-5 w-[80%] "
             
            >
              <ul>
                <li>Unlimited Posting</li>
                <li>Featured products</li>
                <li>Available on Search Engine</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 font-normal text-sm text-center ">
            <p>Check your inbox for the confirmation email</p>
            <p className="text-[#1F7CD1]">info@madeinnigeria.com</p>
            <div className="text-center mt-10 leading-9">
              <p>Confirm the code sent to your inbox</p>
              <div className="flex justify-center my-4">
                <div className="mr-3">
                  <input
                    type="text"
                    className=" outline-none h-['50px'] w-9 rounded bg-light-green text-center bg-opacity-[17%]   "
                  />
                </div>
                <div className="mr-3">
                  <input
                    type="text"
                    className=" outline-none h-['50px'] w-9 rounded bg-light-green text-center bg-opacity-[17%]   "
                  />
                </div>
                <div className="mr-3">
                  <input
                    type="text"
                    className=" outline-none h-['50px'] w-9 rounded bg-light-green text-center bg-opacity-[17%]   "
                  />
                </div>
                <div className="mr-3">
                  <input
                    type="text"
                    className=" outline-none h-['50px'] w-9 rounded bg-light-green text-center bg-opacity-[17%]   "
                  />
                </div>
                {/* #1F7CD1 */}
              </div>
              <p>Did not receive email? Check Spam</p>
              <Link href={"#"} className="text-[#1F7CD1]">
                Resend Confirmation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-semibold my-4 hidden md:block">
        <Link href={"#"} className=" hover:text-[#1F7CD1]">About Us</Link>
        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">FAQ</Link>

        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">Help</Link>

        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">Complaint</Link>

        <span className="mx-4">|</span>
        <Link href={"#"} className=" hover:text-[#1F7CD1]">Contact</Link>
      </div>
    </div>
  );
};

export default VerifyOtp;
