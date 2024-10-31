import React from 'react';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import ProductItemContainer from '@/components/section/ProductItemContainer';
import ProductListCard from '@/components/card/ProductListCard';
import AsideWithImage from '@/components/section/AsideWithImage';
import FormGroup from '@/components/group/FormGroup';
import { CompleteCategoryList, TrendingAgricProducts } from '@/data/categoryData';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@/components/container/Container';

const CategoryPage = () => {
  const params = decodeURIComponent(useParams().slug);

  const category = CompleteCategoryList.find((cat) => cat.name === params);

  const caratRight = () => {
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
  };

  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text={params} className="capitalize" />
        </Breadcrumb>
      </Container>

      <Container className="flex gap-4">
        <div className="relative scrollbar shadow-md bg-white hidden w-1/4 md:block">
          <h2 className="mb-3 ml-4 text-md capitalize  p-4">{params}</h2>

          <ul className="list-none">
            {category.subcategory.map((c) => (
              <li
                className=" flex items-center group overflow-y-auto scrollber justify-between border-t border-gray/30 py-6 px-5 hover:bg-light-gray cursor-pointer transition-all duration-300 "
                key={c.id}
              >
                <Link to={`/product/subcategory/${c.name}`} className="capitalize text-sm ">
                  {c.name}
                </Link>
                <span>{caratRight()}</span>

                <ul className="absolute top-0 left-full w-[250px] h-full overflow-y-auto bg-white shadow-md hidden group-hover:block z-50 scrollbar ">
                  <div className="py-7">
                    {c.tertiaryCategory.map((sub) => (
                      <li
                        key={sub.id}
                        className="mb-1 p-2 text-sm hover:bg-light-gray transition-all duration-300 capitalize"
                      >
                        <Link to={'/product'}>{sub.name}</Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <ProductItemContainer className="bg-white shadow-md">
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

      <Container className="mt-5">
        <div className="mx-auto mt-5 flex flex-col">
          <h1 className="mb-3">All Categories</h1>
          <div className="grid grid-cols-3 bg-white text-center">
            {CompleteCategoryList?.map((cat) => (
              <Link
                to={`/product/category/${cat.name}`}
                key={cat.id}
                className="capitalize border-b border-r border-gray/30 p-4 text-xs "
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex bg-white shadow-md mt-s">
        <AsideWithImage
          buttonText="Source Now"
          headingText="Agricultural Products"
          textStyle="text-dark font-bold"
          backgroundColor="#D8E7E2"
          src="/assets/poultry.png"
          href="/product/category/Agricultural%20Produce"
        />
        <ProductItemContainer>
          {TrendingAgricProducts.map((item) => (
            <ProductListCard
              item
              key={item.id}
              image={item.src}
              text={item.title}
              href={`/product/subcategory/${item.subcategory}`}
            />
          ))}
        </ProductItemContainer>
      </Container>

      <FormGroup />
    </>
  );
};

export default CategoryPage;
