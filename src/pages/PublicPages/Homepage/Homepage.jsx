import React, { useState, useEffect } from 'react';
import { Container } from '@/components/container/Container';
import { NavLink } from '@/components/section/NavLInk';
import { NavList } from '@/components/section/NavList';
import { HeroSlider } from '@/components/slider/HeroSlider';
import { Aside } from '@/components/section/Aside';
import { httpErrorCodes } from '@/utils/http';
import { endpoints } from '@/api/endpoints';
import { apiClient } from '@/api/apiClients';
import ProductItemContainer from '@/components/section/ProductItemContainer';
import ProductListCard from '@/components/card/ProductListCard';
import {
  CompleteCategoryList,
  TrendingAgricProducts,
  TrendingFashionProducts
} from '@/data/categoryData';
import AsideWithImage from '@/components/section/AsideWithImage';
import FormGroup from '@/components/group/FormGroup';
import EventGroup from '@/components/group/EventGroup';
import AsideLink from '@/components/section/AsideLink';

const Homepage = () => {
  const [userInterests, setUserInterests] = useState([]);
  const [emptyVisitId, setEmptyVisitId] = useState(false);

  useEffect(() => {
    const fetchInterest = async () => {
      try {
        // Check if userInterests are already in localStorage
        const savedInterests = localStorage.getItem('userInterests');

        if (savedInterests) {
          // Use the cached interests if available
          setUserInterests(JSON.parse(savedInterests));
        } else {
          // If not, fetch the interests from the API
          const response = await apiClient.get(endpoints.userInterests);

          // Save the response data to localStorage
          localStorage.setItem('userInterests', JSON.stringify(response.data));

          // Update state with the fetched data
          setUserInterests(response.data);
        }
      } catch (error) {
        if (error.status === httpErrorCodes.BAD_REQUEST) {
          setEmptyVisitId(true);
        }
      }
    };

    fetchInterest();
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <main className="relative z-10 mt-s">
        <Container className={'flex lg:bg-white lg:px-m  h-[150px] lg:h-[550px]'}>
          <NavList>
            <NavLink />
          </NavList>

          <HeroSlider />
          <Aside>
            {!userInterests.length || emptyVisitId ? (
              <p className="italic text-sm">
                If in one minute you don't find what you're looking for, it's probably because our
                manufacturers don't have it. Please just fill out the sourcing form, and we'll get
                it for you. ...Mr Lawal, CEO
              </p>
            ) : (
              userInterests
                .slice(0, 5)
                .map((item) => (
                  <AsideLink
                    to={`/product/${item.slug}`}
                    key={item._id}
                    image={item.images[0]?.url || '/assets/noImage.png'}
                    mainTitle={item.title}
                    subTitle={item.text}
                  />
                ))
            )}
          </Aside>
        </Container>
      </main>
      {/* Hero Section */}
      <Container small className="flex-col">
        <h3 className="text-lg font-semibold mb-s">Selected Trending Categories</h3>
        <ProductItemContainer className="-mx-2xs">
          {CompleteCategoryList.map((item, i) => (
            <ProductListCard
              key={i + 1}
              image={item.src}
              text={item.name}
              to={`/product/category/${item.name}`}
            />
          ))}
        </ProductItemContainer>
      </Container>

      {/* Trending Products */}
      <Container className="flex bg-white shadow-md mt-s">
        <AsideWithImage
          buttonText="Source Now"
          headingText="Agricultural Products"
          textStyle="text-dark font-bold"
          backgroundColor="#D8E7E2"
          src="/assets/poultry.png"
          to="/product/category/Agricultural%20Produce"
        />
        <ProductItemContainer>
          {TrendingAgricProducts.map((item) => (
            <ProductListCard
              item
              key={item.id}
              image={item.src}
              text={item.title}
              to={`/product/subcategory/${item.subcategory}`}
            />
          ))}
        </ProductItemContainer>
      </Container>

      {/* First Section */}
      <Container className="flex bg-white shadow-md mt-s">
        <AsideWithImage
          buttonText="Source Now"
          headingText="Fashion and Accessories"
          backgroundColor="#efefef"
          textStyle="text-dark"
          src="/assets/shoe.png"
          to="/product/category/Fashion%20&%20Accessories"
        />
        <ProductItemContainer>
          {TrendingFashionProducts.map((item) => (
            <ProductListCard
              item
              key={item.id}
              image={item.src}
              text={item.title}
              to={`/product/subcategory/${item.subcategory}`}
            />
          ))}
        </ProductItemContainer>
      </Container>

      {/* Second Section */}

      {/* Third Section */}
      <FormGroup />
      {/* Forms */}
      <EventGroup />
      {/* Events  */}
    </>
  );
};

export default Homepage;
