import Container from "../container/Container";
import { Button } from "../button/Button";
import Image from "next/image";

const FormGroup = () => {
  return (
    <Container small className="overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auto">
        <Image
          src="https://plus.unsplash.com/premium_photo-1669323926239-0747e1382211?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center"
          width={1000}
          height={400}
        />
      </div>
      <div className="flex relative w-full">
        <div className="overflow-hidden pt-s pl-m flex-1 hidden md:block">
          <div className="mb-s font-bold text-3xl origin-left scale-125 capitalize">
            EASY SOURCING
          </div>
          <div>
            <p className="mt-4 mb-6">
              An easy way to post your sourcing requests and get quotes.
            </p>
            <p className="mt-4">
              One request, multiple quotes
              <br />
              Verified suppliers matching
              <br />
              Quotes comparison and sample request
            </p>
          </div>
          <div className="mt-11">
            <a href="https://sourcing.made-in-china.com/" target="_blank">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="bg-white p-s w-full">
            <h2 className="text-2xl mb-2.5 text-green font-medium">
              Request For Quotation?
            </h2>
            <form className="">
              <div className="mb-xs">
                <label
                  htmlFor="Username"
                  className="relative block rounded-[3px] border border-gray focus-within:border-green"
                >
                  <input
                    type="text"
                    id="Username"
                    className="peer border-none bg-transparent placeholder-transparent focus:ring-0"
                    placeholder="Production Name or Keywords"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-xs">
                    Production Name or Keywords
                  </span>
                </label>
              </div>
              {/* textarea */}
              <div className="mb-xs">
                <label
                  htmlFor="OrderNotes"
                  className="block text-sm relative rounded-[3px] border border-gray focus-within:border-green"
                >
                  <textarea
                    id="OrderNotes"
                    className="mt-2 peer w-full font-medium placeholder:text-dark align-top sm:text-sm border-0 focus-within:ring-0"
                    rows="4"
                    placeholder=""
                  ></textarea>
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-[15%] peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-xs">
                    Product Description
                  </span>
                </label>
              </div>
              {/* input and select */}
              <div className="mb-xs flex items-center">
                {/* input */}
                <div className="mr-2xs">
                  <label
                    htmlFor="Purchase Quantity"
                    className="relative block rounded-[3px] border border-gray focus-within:border-green"
                  >
                    <input
                      type="text"
                      id="Purchase Quantity"
                      className="peer border-none w-[169px] bg-transparent placeholder-transparent focus:ring-0"
                      placeholder="Purchase Quantity"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-xs">
                      Purchase Quantity
                    </span>
                  </label>
                </div>
                {/* select */}
                <div className="">
                  <label htmlFor="HeadlineAct" className="block text-u-xs">
                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      className="w-full bg-light-gray font-montserrat rounded-[3px] bg-slate-100 border-gray py-2xs text-dark text-xs"
                    >
                      <option value="">Pieces</option>
                      <option value="JM">John Mayer</option>
                      <option value="SRV">Stevie Ray Vaughn</option>
                      <option value="JH">Hendrix</option>
                      <option value="BBK">B.B King</option>
                      <option value="AK">Albert King</option>
                      <option value="BG">Buddy Guy</option>
                      <option value="EC">Eric Clapton</option>
                    </select>
                  </label>
                </div>
              </div>
              {/* button */}
              <Button type="submit">Send Your Request Now</Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormGroup;
