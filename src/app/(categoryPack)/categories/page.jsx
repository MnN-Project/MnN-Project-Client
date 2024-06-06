 "use client"
import Breadcrumb, { BreadCrumbItem } from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/container/Container";
import Header from "@/components/header/Header"
import "./categories.css"
import ProductItemContainer from "@/components/section/ProductItemContainer";
import ProductListCard from "@/components/card/ProductListCard";
import { serviceCardItems, trendingProductList } from "@/app/data";
import { useState } from "react";
import { CategoryData } from "./catagoryData";
import Link from "next/link";
import AsideWithImage from "@/components/section/AsideWithImage";

import FormGroup from "@/components/group/FormGroup";
import Footer from "@/components/footer/Footer";


const Category = () => {

 const [activeCategory, setActiveCategory] = useState(null);

 const handleHover = (category) => () => {
   setActiveCategory(category.id);
 };

 const handleMouseLeave = () => {
   setActiveCategory(null);
 };
   
   const caratRight = ()=>{
    return (
      <svg
        className="mx-1 h-3 w-3 rtl:rotate-180 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m1 9 4-4-4-4"
        />
      </svg>
    );
   }



   const productListData = trendingProductList.slice(0, 8);
  return (
    <>
      <Header />
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Agriculture & Technologuy" />
        </Breadcrumb>
      </Container>

      <Container className="mainCategory-container flex bg-white shadow-md">
        <div className="mainCategory hidden md:block relative  w-1/4 ">
          <h2>Agricultural</h2>

          <ul className="mega-menu">
            {CategoryData.map((c) => (
              <li
                onMouseEnter={handleHover(c)}
                onMouseLeave={handleMouseLeave}
                className="main-category-li"
                key={c.id}
              >
                <a href={c.link}>{c.title}</a>
                <span>{caratRight()}</span>
                {activeCategory === c.id && (
                  <ul className="subcategory-menu shadow-lg">
                    <div className="sub-menu">
                      {c.subcategory.map((sub) => (
                        <li key={sub.id} className="subcat-li">
                          <a href={sub.link}>{sub.title}</a>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

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

      <Container className="flex mt-5">
        <div className="allCategoryGrid mx-auto mt-5 flex flex-col">
          <h1 className=" mb-3">All Categories</h1>
          <div className="categoriesGridView shadow-md">
            {CategoryData.map((cat) => (
              <Link href={cat.link} key={cat.id}>
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex bg-white shadow-md mt-5">
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

      <FormGroup />

      <Footer />
    </>
  );
}

export default Category