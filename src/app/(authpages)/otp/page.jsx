import Image from "next/image";
// import background from "../../../assets/images/otpSideImage.png";
import bg from "../../../assets/otpSideImage.png";
import Link from "next/link";

const styles = {
  backgroundImage: `url(${bg})`,
};

const VerifyOtp = () => {
  return (
    <div className=" md:px-48 md:py-10 p-8 bg-white md:bg-none min-h-screen ">
      <div className = 'flex justify-center md:block'>
    <p className=" bg-green text-white text-sm md:mb-2 w-fit px-3 py-2 mb-4 ">
        MADE IN NIGERIALOGO
      </p>

      </div>
      <div className="  md:mx-16 ">
        <p className=" text-right text-base mb-2 text-black hidden md:block">
          Already a member? Sign in
        </p>
     
        <div className="  py-6 bg-white  md:shadow md:grid grid-cols-2">
          <div
            className=" bg-cover bg-center px-5 font-bold text-xl hidden md:block "
            style={styles}
          >
            <p className="text-green   ">Register With Us</p>
            <p className="text-dark-gray w-[50%] mb-14 text-base">
              Your One Stop Website
            </p>
            <p className="w-[50%] text-base mb-2">Enjoy Our Unlimited Offers</p>
            <div
              className="bg-[08AB70] pl-14 text-white text-base font-normal leading-10 py-9 w-[80%] "
              style={{ backgroundColor: "#08ab6f51" }}
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
            <p>info@madeinnigeria.com</p>
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
              </div>
              <p>Did not receive email? Check Spam</p>
              <Link href={"#"}>Resend Confirmation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
