import React, { useEffect, useState } from 'react';
import { Container } from '@/components/container/Container';
import { AlertMessage } from '@/utils/alertMessage';
import { apiClient } from '@/api/apiClients';
import { httpErrorCodes } from '@/utils/http';
import { endpoints } from '@/api/endpoints';
import { Link, useParams } from 'react-router-dom';

const ProductInquiry = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState({ error: null, success: null });
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    title: '',
    companyId: {
      name: '',
      id: ''
    },
    images: []
  });

  const { productSlug } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await apiClient.get(`${endpoints.getProductBySlug}/${productSlug}`);
      setProduct(response.data.data);
    };
    fetchProduct();
  }, [productSlug]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = {
      senderName,
      senderEmail,
      company: product?.companyId._id,
      description,
      unit,
      quantity,
      product: product?._id
    };

    try {
      const response = await apiClient.post(endpoints.placeOrder, formData);
      if (response.status === httpErrorCodes.OK) {
        setSenderName('');
        setSenderEmail('');
        setDescription('');
        setUnit('');
        setQuantity('');
        setProduct('');
        setMessage({
          error: null,
          success: 'Request Sent, We will get back to you as soon as possible'
        });
      }
    } catch (error) {
      setMessage({ error: 'Internal Server Error', success: null });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Container className="max-w-[1184px] mx-auto p-4 flex flex-col gap-4 lg:flex-row items-center justify-center">
        <div className="py-6 px-4 w-[100%] md:w-[80%] ">
          <AlertMessage alert={message} />
          <form method="POST" onSubmit={handleSubmit} className="w-full">
            <header className="bg-light-gray">
              <div className="p-4 flex flex-col lg:flex-row  items-center justify-between gap-4">
                <div className="left flex items-center">
                  <img
                    src={product?.images?.[0]?.url || '/assets/noImage.png'}
                    width={30}
                    height={30}
                    alt="image"
                    className=" w-20 h-20 object-cover mr-2"
                  />
                  <Link
                    to={`/product/${product.slug}`}
                    className="text-sm text-blue hover:text-danger capitalize"
                  >
                    {product?.title}
                  </Link>
                </div>

                <div className="">
                  <input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full md:w-auto outline-none focus:outline-none  text-sm"
                  />
                  <select
                    name="unit"
                    id=""
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full md:w-auto outline-none focus:outline-none text-sm"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="KG">KG</option>
                    <option value="Gram">Gram</option>
                    <option value="Litres">Litres</option>
                    <option value="Bags">Bags</option>
                    <option value="Pieces">Pieces</option>
                    <option value="Tonnes">Tonnes</option>
                    <option value="Meters">Meters</option>
                    <option value="Truck Luck">Truck Load</option>
                    <option value="Container Load">Container Load</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </header>

            <div className=" w-full flex flex-col gap-4">
              <p className="text-sm mt-3">
                Content<span className="text-danger">*</span>
              </p>
              <textarea
                name="description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-40"
                placeholder="Please enter clear details so your supplier will understand better"
              ></textarea>
            </div>
            <div className=" flex flex-col lg:flex-row items-center gap-4">
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm mt-3">
                  Email Address<span className="text-danger">*</span>
                </p>
                <input
                  type="text"
                  name="senderEmail"
                  className="w-60 text-sm"
                  value={senderEmail}
                  required
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col gap-4">
                <p className="text-sm mt-3">
                  Your Name<span className="text-danger">*</span>
                </p>
                <input
                  type="text"
                  name="senderName"
                  className="w-60 text-sm"
                  value={senderName}
                  required
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-light-green text-white border-none hover:bg-green transition-all duration-500 ease-in-out py-2 px-4 my-5 text-sm w-60 "
            >
              {isLoading ? 'Please Wait...' : 'Send Inquiry Now'}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ProductInquiry;
