import Container from "@/components/container/Container";
import Header from "../components/header/Header";
import NavList from "@/components/section/NavList";
import NavLink from "@/components/section/NavLink";
import HeroSlider from "@/components/slider/HeroSlider";
import Aside from "@/components/section/Aside";
import AsideLink from "@/components/section/AsideLink";
import { CategoryItems } from "./data";
import ProductItemContainer from "@/components/section/ProductItemContainer";
import { trendingProductList } from "./data";
import ProductListCard from "@/components/card/ProductListCard";
import AsideWithImage from "@/components/section/AsideWithImage";
import Banner from "@/components/banner/Banner";
import ServiceCard from "@/components/card/ServiceCard";
import ServiceCardItem from "@/components/card/ServiceCardItem";
import { serviceCardItems } from "./data";
import Footer from "@/components/footer/Footer";
import ServiceGroup from "@/components/group/ServiceGroup";
import EventGroup from "@/components/group/EventGroup";
import FormGroup from "@/components/group/FormGroup";

const Home = () => {
  const productListData = trendingProductList.slice(0, 8);
  return (
    <>
      <Header />
      <main className="relative mt-s z-10">
        <Container className={`flex lg:bg-white lg:px-m py-s`}>
          <NavList>
            <NavLink />
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
      
      <Container small className="flex-col">
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
      <Container className="bg-white mt-s flex shadow-md">
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
      <Container className="bg-white mt-s flex shadow-md">
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
      <Container className="bg-white mt-s flex shadow-md">
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
      <Container className="bg-background mt-s flex flex-col">
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
