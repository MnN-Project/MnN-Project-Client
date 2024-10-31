import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { Link } from 'react-router-dom';
import { Container } from '@/components/container/Container';
import { useCompany } from '../CompanyPageLayout/companyPageLayout';

const CompanyPage = () => {
  const companyDetails = useCompany();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCompanyProducts = async () => {
      const response = await apiClient.get(`${endpoints.getCompanyPosts}/${companyDetails._id}`);
      setProducts(response.data);
    };
    if (companyDetails._id) fetchCompanyProducts();
  }, [companyDetails]);

  return (
    <section className="">
      <Container>
        {/* TOP SELLING PRODUCTS */}
        <div className="w-full mb-10">
          <h1 className="text-lg font-semibold capitalize my-5 text-center">
            Top Selling Products{' '}
          </h1>

          <div className=" flex flex-col lg:flex-row gap-4 items-start">
            {/* LEFT */}
            {products.length !== 0 && (
              <div className="left flex-1 bg-white rounded-lg p-4 hover:shadow">
                {products.slice(0, 1).map((product) => (
                  <div className="flex flex-col" key={product._id}>
                    <div className="flex items-center justify-center mb-6">
                      <img
                        src={product?.images[0]?.url || '/assets/noImage.png'}
                        width={250}
                        height={250}
                        alt="Product Image"
                        className="w-full h-[350px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-center">
                      <p className="text-md font-light mb-3">{product.title}</p>
                      <h1 className="text-md font-semibold text-dark-gray mb-3">
                        {product.currency} {product.price} / {product.unit}, (MOQ){' '}
                        {product.min_order} {product.unit}
                      </h1>
                      <div className="my-6">
                        <Link
                          href={`/company/inquiry/${product.companyId._id}/${product.slug}`}
                          className="rounded-lg px-3 py-2 text-sm ring-1 mb-8 ring-gray hover:ring-2"
                          target="_blank"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* RIGHT */}
            <div className="right flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.slice(1, 6).map((product) => (
                <Link href={`/product/${product.slug}`} key={product._id}>
                  <div className="bg-white p-4 rounded-lg hover:shadow-xl">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-center">
                        <img
                          src={`${product?.images[0]?.url || '/assets/noImage.png'}`}
                          width={100}
                          height={100}
                          alt="photo"
                          className="w-full h-[200px] object-cover"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm font-light mb-3">{product.title}</p>
                        <h1 className="text-sm font-semibold text-dark-gray mb-3">
                          {product.currency} {product.price} / {product.unit}, (MOQ){' '}
                          {product.min_order} {product.unit}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyPage;
