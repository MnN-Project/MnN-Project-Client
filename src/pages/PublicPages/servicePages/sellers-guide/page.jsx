import React from 'react';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import { Container } from '@/components/container/Container';
import { Link } from 'react-router-dom';

const SellerGuide = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Supplier Guide" />
        </Breadcrumb>
      </Container>

      <Container className="p-5 bg-white shadow-sm mb-20 mt-5">
        <div className="">
          <h1 className="text-xl text-center font-semibold">Supplier’s Guide</h1>
          <p className="text-sm italic text-center">
            Welcome to Made-N-Nigeria.com! Join thousands of Nigerian manufacturers showcasing their
            products to buyers worldwide. Follow this guide to successfully list and sell your
            products.
          </p>
          <div className=" flex flex-col md:flex-row gap-4 items-start my-8">
            <div className="left flex-1">
              <Link to="/product/category/Fashion%20&%20Accessories">
                <img src="/assets/advert-banner.jpg" width={400} height={500} />
              </Link>
            </div>

            <u className="flex-1 no-underline list-none flex flex-col gap-4">
              <li>
                <h1 className="text-md font-semibold">Create Your Account</h1>
                <p className="text-xs ">
                  <Link className="text-green text-lg" href="/register">
                    Sign up{' '}
                  </Link>{' '}
                  by creating a supplier account with your business details. Be sure to verify your
                  contact information for easier communication with buyers.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Complete Your Profile</h1>
                <p className="text-xs ">
                  Build trust by completing your supplier profile. Add details such as business
                  certifications, factory location, and customer reviews. A well-completed profile
                  increases your chances of attracting buyers.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">List Your Products</h1>
                <p className="text-xs ">
                  Upload detailed product listings with high-quality images, product specifications,
                  pricing, and minimum order quantities. Accurate product descriptions help buyers
                  make informed decisions.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Respond to Buyer Inquiries</h1>
                <p className="text-xs ">
                  Buyers may contact you with questions about your products. Be sure to respond
                  promptly and professionally to build trust and secure deals.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Manage Orders</h1>
                <p className="text-xs ">
                  Once a buyer places an order, communicate with them directly to finalize the
                  details such as payment terms, shipping, and delivery timelines. Keep your buyers
                  informed about the status of their orders.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Offer Customization</h1>
                <p className="text-xs ">
                  Some buyers may require customized products. Be open to negotiating and offering
                  product customization where possible to meet specific buyer needs.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Maintain a Good Rating</h1>
                <p className="text-xs ">
                  Deliver on time and offer excellent customer service to maintain a high rating.
                  Positive reviews from buyers will boost your credibility and attract more
                  business.
                </p>
              </li>
              <li>
                <h1 className="text-md font-semibold">Supplier Protection</h1>
                <p className="text-xs ">
                  Learn about our supplier protection policies to ensure secure transactions and
                  smooth business operations.
                </p>
              </li>
            </u>
          </div>
          <h1 className="text-center font-bold">
            Ready to showcase your Nigerian-made products to the world? Start listing today! 😄
          </h1>
        </div>
      </Container>
    </>
  );
};

export default SellerGuide;
