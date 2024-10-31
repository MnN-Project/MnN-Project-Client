import React from 'react';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import { Container } from '@/components/container/Container';
import { Link } from 'react-router-dom';

const BuyerGuide = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Buyer's Guide" />
        </Breadcrumb>
      </Container>

      <Container className="p-5 bg-white shadow-sm mb-20 mt-5">
        <div className="">
          <h1 className="text-xl text-center font-semibold">Buyer&apos;s Guide </h1>
          <p className="text-sm italic text-center">
            Welcome to Made-N-Nigeria.com, where you can connect directly with local manufacturers
            and discover quality Nigerian-made products. Follow this guide to make the most of your
            shopping experience.
          </p>
          <div className=" flex flex-col md:flex-row gap-4 items-start my-8">
            <div className="left flex-1">
              <Link to="/product/category/Fashion%20&%20Accessories">
                <img src="/assets/advert-banner.jpg" width={400} height={500} />
              </Link>
            </div>

            <u className="flex-1 no-underline list-none flex flex-col gap-4">
              <li>
                <h1 className="text-md font-semibold">Explore Categories</h1>
                <p className="text-xs ">
                  Browse through our wide range of product categories, from Agriculture and Fabrics
                  to Automobiles and Industrial Equipment. Use filters to narrow your search and
                  quickly find what you&apos;re looking for.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Product Search</h1>
                <p className="text-xs ">
                  Use the search bar at the top of the page to quickly find specific products. Enter
                  keywords or product names to see matching results.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Check Product Details</h1>
                <p className="text-xs ">
                  Once you find an item of interest, click on the product to view details, including
                  price, specifications, minimum order quantity, and supplier information.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Compare Suppliers</h1>
                <p className="text-xs ">
                  Check ratings, reviews, and certifications of various suppliers before making a
                  decision. You can message suppliers directly to ask questions or request more
                  details.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Submit a Sourcing Request</h1>
                <p className="text-xs ">
                  Can&apos;t find exactly what you&apos;re looking for? Fill out our sourcing form
                  with your product needs, and we&apos;ll help you connect with the right supplier.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Place Your Order</h1>
                <p className="text-xs ">
                  Once you&apos;ve found the right product, proceed with placing your order.
                  Communicate directly with the supplier to confirm terms such as shipping, payment,
                  and delivery timelines.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Track Your Order</h1>
                <p className="text-xs ">
                  After placing your order, stay updated by tracking the order status through your
                  dashboard. You can also communicate with suppliers if any updates are needed.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Buyer Protection</h1>
                <p className="text-xs ">
                  We value your security. Review our buyer protection policies to ensure a safe and
                  trustworthy transaction process.
                </p>
              </li>
            </u>
          </div>
          <h1 className="text-center font-bold">Happy Shopping! 😄</h1>
        </div>
      </Container>
    </>
  );
};

export default BuyerGuide;
