import React, { useEffect, useState } from 'react';
import { endpoints } from '@/api/endpoints';
import { useCompany } from '../CompanyPageLayout/companyPageLayout';
import { apiClient } from '@/api/apiClients';
import { Container } from '@/components/container/Container';
import { Link } from 'react-router-dom';

const CompanyPageProducts = () => {
  const [products, setProducts] = useState([]);
  const companyDetails = useCompany();

  useEffect(() => {
    const fetchCompanyProducts = async () => {
      const response = await apiClient.get(`${endpoints.getCompanyPosts}/${companyDetails._id}`);
      setProducts(response.data);
    };
    if (companyDetails._id) fetchCompanyProducts();
  }, [companyDetails]);

  console.log(products);

  return (
    <section className="">
      <Container>
        <div className="w-full mb-10">
          <h1 className="text-xl font-semibold capitalize my-5 text-center">Products </h1>

          <div className=" flex flex-col lg:flex-row gap-4 items-start">
            {/* LEFT */}
            {products.length > 0 ? (
              <div className=" hidden lg:block w-full flex-1 bg-white rounded-lg p-4 lg:sticky top-36">
                <h1 className="font-bold text-md capitalize mb-4">Product Categories</h1>
                <ul className="ps-4 text-xs">
                  {[...new Set(products.map((item) => item.category))].map((category, index) => (
                    <li className="mb-1 py-1" key={index}>
                      <Link to={`/product/category${category}`}>{category}</Link>
                    </li>
                  ))}
                </ul>

                <h1 className="font-bold text-md capitalize mb-4">Others</h1>
                <ul className="ps-4 text-xs">
                  {[...new Set(products.map((item) => item.subCategory))].map(
                    (subcategory, index) => (
                      <li className="mb-1 py-1" key={index}>
                        <Link to={`/product/subcategory/${subcategory}`}>{subcategory}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : null}

            {/* RIGHT */}
            <div className="w-full flex-[3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.slice(0, 18).map((product) => (
                <div className="bg-white p-4 rounded-lg" key={product._id}>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center ">
                      <img
                        src={`${product?.images[0]?.url || '/assets/noImage.png'}`}
                        width={100}
                        height={100}
                        alt="phote"
                        className="w-full h-[50%] md:h-[150px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-center">
                      <p className="">{product?.title}</p>

                      <p>
                        {product?.currency} {product?.price} / {product?.unit}
                      </p>

                      <p>
                        Min Order:{product?.min_order} {product?.unit}
                      </p>

                      <Link
                        to={`/company/${product?.companyId?.slug}/${product?.slug}`}
                        className="ring-1 ring-light-green text-light-green text-sm py-2 px-3 hover:bg-light-green hover:text-white"
                        target="_blank"
                      >
                        Contact Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyPageProducts;
