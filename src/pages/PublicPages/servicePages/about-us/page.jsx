import React from 'react';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import './about.css';
import Container from '@/components/container/Container';
import Banner from '@/components/banner/Banner';
import { HiArrowsExpand, HiBookOpen, HiBriefcase, HiColorSwatch } from 'react-icons/hi';

const AboutUs = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="About Us" />
        </Breadcrumb>
      </Container>

      <Container className="p-5 bg-white shadow-sm overflow-hidden ">
        <div className="text-center">
          <h3 className="text-sm sm:text-2xl text-green py-2 mb-2">About Us</h3>
        </div>
        <div className=" w-full gap-3 text-sm flex items-center justify-center">
          Exposing Nigerian Manufacturers to the world
        </div>
        <hr className="my-3" />
        <Banner src="/assets/slider1.jpg" sectionHeight="500px" />

        <div className="cards">
          <div className="singleCard">
            <div className="iconTop">
              <HiArrowsExpand />
            </div>
            <h3 className="text-sm sm:text-2xl text-green py-2 mb-2">Our Motivation</h3>
            <div className="textBelow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut modi tempora ullam
              laboriosam ea mollitia officiis voluptas, hic totam rem dolorum voluptatibus nihil
              labore voluptate sunt quia. Praesentium, fugit enim?
            </div>
          </div>
          <div className="singleCard">
            <div className="iconTop">
              <HiBookOpen />
            </div>
            <h3 className="text-sm sm:text-2xl text-green py-2 mb-2">Our Vision</h3>
            <div className="textBelow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut modi tempora ullam
              laboriosam ea mollitia officiis voluptas, hic totam rem dolorum voluptatibus nihil
              labore voluptate sunt quia. Praesentium, fugit enim?
            </div>
          </div>
          <div className="singleCard">
            <div className="iconTop">
              <HiBriefcase />
            </div>
            <h3 className="text-sm sm:text-2xl text-green py-2 mb-2">Our Mission</h3>
            <div className="textBelow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut modi tempora ullam
              laboriosam ea mollitia officiis voluptas, hic totam rem dolorum voluptatibus nihil
              labore voluptate sunt quia. Praesentium, fugit enim?
            </div>
          </div>
          <div className="singleCard">
            <div className="iconTop">
              <HiColorSwatch />
            </div>
            <h3 className="text-sm sm:text-2xl text-green py-2 mb-2">Our Mission</h3>
            <div className="textBelow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut modi tempora ullam
              laboriosam ea mollitia officiis voluptas, hic totam rem dolorum voluptatibus nihil
              labore voluptate sunt quia. Praesentium, fugit enim?
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
