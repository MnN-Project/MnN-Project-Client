import React from 'react';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import { Container } from '@/components/container/Container';

const WhyChooseUs = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Why Choose Us" />
        </Breadcrumb>
      </Container>

      <Container className="p-5 bg-white shadow-sm mb-20 mt-5">
        <div className=" px-2 lg:px-40 flex flex-col lg:flex-row gap-4 h-auto lg:h-[450px] items-center lg:items-start">
          <div className="flex-1">
            <h2 className="uppercase text-md font-semibold text-green my-4 text-center lg:text-left">
              Why CHoose Us{' '}
            </h2>
            <h2 className="capitalize mt-2 mb-4 font-semibold text-center lg:text-left">
              Made-n-Nigeria e-commerce
            </h2>
            <div className="flex flex-col text-sm gap-8">
              <p>
                We connect you directly with local manufacturers, offering unique, high-quality, and
                authentic Made in Nigeria products that represent the rich culture and diversity of
                the country.
              </p>

              <p>
                By shopping with us, you contribute to the growth of Nigerian businesses, fostering
                economic empowerment and sustainable development within local communities
              </p>
              <p>
                Our platform ensures a smooth and secure purchasing process, enabling customers from
                around the globe to easily discover and buy Nigerian products.
              </p>
              <p>
                We prioritize showcasing products from small-scale producers and artisans, giving
                them a global platform to compete and thrive in the international marketplace.
              </p>
            </div>
          </div>

          <div className="bg-light-green flex-1 h-auto lg:h-[84vh] mt-0 lg:-mt-10 p-6 rounded-md shadow-2xl">
            <ul className=" p-6 list-disc flex flex-col gap-4 lg:gap-8 text-white font-semibold">
              <li>Authentic Nigerian Craftsmanship</li>
              <li>Global Reach, Local Impact</li>
              <li>Seamless International Shopping Experience</li>
              <li>Support for Local Artisans</li>
              <li>Wide Variety of Products</li>
              <li>Direct Manufacturer Access</li>
              <li>Ethically Sourced and Sustainable Products</li>
              <li>Customizable Orders</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhyChooseUs;
