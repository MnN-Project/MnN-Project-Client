import Container from "@/components/container/Container";
import Header from "../components/header/Header";
import Image from "next/image";
import NavList from "@/components/section/NavList";
import { CategoryList } from "./data";
import NavLink from "@/components/section/NavLInk";
import HeroSlider from "@/components/slider/HeroSlider";
import Aside from "@/components/section/Aside";
import AsideLink from "@/components/section/AsideLink";
import { CategoryItems } from "./data";
import ProductItemContainer from "@/components/section/ProductItemContainer";
import { trendingProductList } from "./data";
import ProductListCard from "@/components/card/ProductListCard";
import AsideWithImage from "@/components/section/AsideWithImage";
import { Button } from "@/components/button/Button";
import Banner from "@/components/banner/Banner";
import ServiceCard from "@/components/card/ServiceCard";
import ServiceCardItem from "@/components/card/ServiceCardItem";
import { serviceCardItems } from "./data";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import ServiceGroup from "@/components/group/ServiceGroup";
import EventGroup from "@/components/group/EventGroup";
import FormGroup from "@/components/group/FormGroup";

const Home = () => {
  const productListData = trendingProductList.slice(0, 8);
  return (
    <>
      <Header />
      <main className="relative">
        <div className="absolute left-0 top-0 w-full overflow-hidden z-0">
          {/* <Image src="" alt="campaign" /> */}
        </div>
        <div className="-mb-s relative z-10 container-wrapper">
          <a href="#">
            {/* <Image src="" alt="" /> */}
            <p className="text-transparent">Hello world</p>
          </a>
        </div>
        <Container>
          <NavList>
            {CategoryList.map((item, index) => (
              <NavLink
                key={item.id}
                text={item.text}
                href={item.href}
                hyperLink={item.id === CategoryList[CategoryList.length - 1].id}
              />
            ))}
          </NavList>
          <HeroSlider />
          <Aside>
            {CategoryItems.map((item) => (
              <AsideLink
                key={item.id}
                image={item.src}
                mainTitle={item.heading}
                subTitle={item.text}
              />
            ))}
          </Aside>
        </Container>
      </main>
      {/* Hero Section */}
      <Container className="flex-col">
        <h3 className="mb-s text-lg font-semibold">
          Selected Trending Products
        </h3>
        <ProductItemContainer className="-mx-2xs">
          {trendingProductList.map((item) => (
            <ProductListCard
              key={item.id}
              image={item.src}
              text={item.content}
            />
          ))}
        </ProductItemContainer>
      </Container>
      {/* Trending Products */}
      <Container>
        <AsideWithImage
          buttonText="Source Now"
          headingText="Automobiles"
          textStyle="text-black"
          backgroundColor="#DBFBEF"
          src="/assets/Nord-2.png"
        />
        <ProductItemContainer>
          {productListData.map((item) => (
            <ProductListCard
              item
              key={item.id}
              image={item.src}
              text={item.content}
            />
          ))}
        </ProductItemContainer>
      </Container>
      {/* First Section */}
      <Container>
        <AsideWithImage
          buttonText="Source Now"
          headingText="Agriculture"
          backgroundColor="#056442"
          textStyle="text-white"
          src="/assets/Milk.png"
        />
        <ProductItemContainer>
          {productListData.map((item) => (
            <ProductListCard
              item
              key={item.id}
              image={item.src}
              text={item.content}
            />
          ))}
        </ProductItemContainer>
      </Container>
      {/* Second Section */}
      <Container>
        <AsideWithImage
          buttonText="Source Now"
          headingText="Fashion Accessories"
          textStyle="text-white"
          backgroundColor="#01150e"
          src="/assets/Tailor-shirts.png"
        />
        <ProductItemContainer>
          {productListData.map((item) => (
            <ProductListCard
              item
              key={item.id}
              image={item.src}
              text={item.content}
            />
          ))}
        </ProductItemContainer>
      </Container>
      {/* Third Section */}
      <FormGroup />
      {/* Forms */}
      <Banner />
      {/* Banner */}
      <Container className="pl-0 pr-0 pt-0 pb-0 shadow-none bg-background flex flex-col">
        <h2 className="text-center w-full text-xl text-dark">
          Sourcing Solution and Tailored Service
        </h2>
        <ProductItemContainer className="-mx-2xs">
          {serviceCardItems.map((item) => (
            <ServiceCard
              key={item.id}
              src={item.src}
              headingText={item.headingText}
              bodyText={item.bodyText}
            >
              {item.others.map((itemList) => (
                <ServiceCardItem
                  key={itemList.id}
                  image={itemList.src}
                  text={itemList.text}
                />
              ))}
            </ServiceCard>
          ))}
        </ProductItemContainer>
      </Container>
      {/* Service Cards */}
      <ServiceGroup />
      {/* Company Section */}
      <EventGroup />
      {/* Events  */}
      <Footer />
    </>
  );
};

export default Home;
