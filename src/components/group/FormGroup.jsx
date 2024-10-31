import { Button } from '../button/Button';
import { endpoints } from '@/api/endpoints';
import { AlertMessage } from '@/utils/alertMessage';
import { httpErrorCodes } from '@/utils/http';
import { useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { Link } from 'react-router-dom';
import { Container } from '../container/Container';

const FormGroup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productName, setProductName] = useState('');
  const [message, setMessage] = useState({ error: null, success: null });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = {
      sendeName: fullName,
      senderEmail: email,
      description,
      unit,
      quantity,
      productName
    };

    try {
      const response = await apiClient.post(endpoints.postRequests, formData);
      if (response.status === httpErrorCodes.OK) {
        setFullName('');
        setEmail('');
        setDescription('');
        setUnit('');
        setQuantity('');
        setProductName('');
        setMessage({
          error: null,
          success: 'Message Sent, We will get back to you as soon as possible'
        });
      }
    } catch (error) {
      setMessage({ error: 'Internal Server Error', success: null });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container small className="overflow-hidden">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 m-auto hidden h-full w-full md:block"
        id="requestForm"
      >
        <img src="/assets/sourcing.png" className="object-cover object-center" alt="find Image" />
      </div>
      <div className="relative flex w-full">
        <div className="hidden flex-1 overflow-hidden pt-s pl-m md:block">
          <div className="origin-left scale-125 text-3xl font-bold capitalize mb-s text-dark">
            EASY SOURCING
          </div>
          <div>
            <p className="mt-4 mb-6 text-dark">
              An easy way to post your sourcing requests and get quotes.
            </p>
            <p className="mt-4 text-dark">
              One request, multiple quotes
              <br />
              Verified suppliers matching
              <br />
              Quotes comparison and sample request
            </p>
          </div>
          <div className="mt-11">
            <Link
              to="/requests-a-product"
              target="_blank"
              className="bg-white py-2 px-3 rounded-lg shadow-md"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="w-full bg-white p-s">
            <AlertMessage alert={message} />
            <h2 className="text-2xl font-medium mb-2.5 text-dark">Request For A Product</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-xs">
                <label
                  htmlFor="productName"
                  className="relative block border rounded-[3px] border-gray focus-within:border-green"
                >
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={productName}
                    className="border-none bg-transparent peer placeholder-transparent focus:ring-0"
                    placeholder="Production Name or Keywords"
                    required
                    onChange={(e) => setProductName(e.target.value)}
                  />

                  <span className="pointer-events-none absolute top-0 peer-focus:top-0 peer-placeholder-shown:top-1/2 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs transition-all start-2.5 p-0.5 text-dark">
                    Production Name or Keywords
                  </span>
                </label>
              </div>

              <div className="mb-xs flex flex-col gap-3 lg:flex-row">
                <label
                  htmlFor="Name"
                  className="relative block border flex-1 rounded-[3px] border-gray focus-within:border-green"
                >
                  <input
                    type="text"
                    id="Name"
                    name="fullName"
                    className="border-none bg-transparent peer placeholder-transparent focus:ring-0"
                    placeholder="Full Name"
                    value={fullName}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                  />

                  <span className="pointer-events-none absolute top-0 peer-focus:top-0 peer-placeholder-shown:top-1/2 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs transition-all start-2.5 p-0.5 text-dark">
                    Your Full Name
                  </span>
                </label>
                <label
                  htmlFor="email"
                  className="relative block flex-1 border rounded-[3px] border-gray focus-within:border-green"
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-none bg-transparent peer placeholder-transparent focus:ring-0"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <span className="pointer-events-none absolute top-0 peer-focus:top-0 peer-placeholder-shown:top-1/2 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs transition-all start-2.5 p-0.5 text-dark">
                    Your Email
                  </span>
                </label>
              </div>
              {/* textarea */}
              <div className="mb-xs">
                <label
                  htmlFor="OrderNotes"
                  className="relative block border text-sm rounded-[3px] border-gray focus-within:border-green"
                >
                  <textarea
                    id="OrderNotes"
                    className="mt-2 w-full border-0 align-top font-medium peer placeholder:text-dark focus-within:ring-0 sm:text-sm"
                    rows="4"
                    placeholder=""
                    name="description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <span className="pointer-events-none absolute top-0 peer-focus:top-0 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs text-slate-400 transition-all start-2.5 p-0.5 peer-placeholder-shown:top-[15%]">
                    Product Description
                  </span>
                </label>
              </div>
              {/* input and select */}
              <div className="flex items-center mb-xs">
                {/* input */}
                <div className="mr-2xs">
                  <label
                    htmlFor="Purchase Quantity"
                    className="relative block border rounded-[3px] border-gray focus-within:border-green"
                  >
                    <input
                      type="number"
                      id="Purchase Quantity"
                      name="quantity"
                      className="border-none bg-transparent peer w-[169px] placeholder-transparent focus:ring-0"
                      placeholder="Purchase Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />

                    <span className="pointer-events-none absolute top-0 peer-focus:top-0 peer-placeholder-shown:top-1/2 -translate-y-1/2 bg-white text-xs peer-placeholder-shown:text-xs peer-focus:text-xs transition-all start-2.5 p-0.5 text-dark">
                      Purchase Quantity
                    </span>
                  </label>
                </div>
                {/* select */}
                <div className="">
                  <label htmlFor="HeadlineAct" className="block text-u-xs">
                    <select
                      name="unit"
                      id="HeadlineAct"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full bg-slate-100 text-xs bg-light-gray font-montserrat rounded-[3px] border-gray py-2xs text-dark"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="KG">KG</option>
                      <option value="Gram">Gram</option>
                      <option value="Litres">Litres</option>
                      <option value="Bags">Bags</option>
                      <option value="Tonnes">Tonnes</option>
                      <option value="Meters">Meters</option>
                      <option value="Truck Luck">Truck Load</option>
                      <option value="Container Load">Container Load</option>
                      <option value="Rolls">Rolls</option>
                      <option value="Others">Others</option>
                    </select>
                  </label>
                </div>
              </div>
              {/* button */}
              <Button type="submit">
                {isLoading ? 'Please Wait...' : 'Send Your Request Now'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormGroup;
