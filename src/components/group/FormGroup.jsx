import Container from "../container/Container";
import { Button } from "../button/Button";
import Image from "next/image";

const FormGroup = () => {
  return (
    <Container className="overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auto">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669323926239-0747e1382211?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover object-center"
            width={1000}
            height={400}
          />
        </div>
        <div className="flex relative w-full">
          <div className="overflow-hidden pt-s pl-m flex-1">
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
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Product Name
                  </label>
                  <input
                    className="w-full rounded-sm border-gray p-3 text-sm"
                    placeholder="Product Name or Keywords"
                    type="text"
                    id="name"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Product Description
                  </label>

                  <textarea
                    className="w-full rounded-sm border-gray p-3 text-sm"
                    placeholder="Product Description"
                    rows={3}
                    id="message"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="purchase quantity">
                      Purchase Quantity
                    </label>
                    <input
                      className="w-full rounded-sm border-gray text-sm"
                      placeholder="Purchase Quantity"
                      type="text"
                      id="purchase quantity"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="HeadlineAct"
                      className="block text-sm font-medium text-gray"
                    ></label>
                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      className="w-full rounded-sm border-gray bg-light-gray text-dark sm:text-sm"
                    >
                      <option value="">Piece(s)</option>
                      <option value="JM">John Mayer</option>
                      <option value="SRV">Stevie Ray Vaughn</option>
                      <option value="JH">Jimi Hendrix</option>
                      <option value="BBK">B.B King</option>
                      <option value="AK">Albert King</option>
                      <option value="BG">Buddy Guy</option>
                      <option value="EC">Eric Clapton</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <Button variant="outline" type="submit">
                    Send Your Request Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
  )
}

export default FormGroup