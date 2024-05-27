import ProductListCard from "@/components/card/ProductListCard";
import Container from "@/components/container/Container";
import Header from "@/components/header/Header";
import AsideWithImage from "@/components/section/AsideWithImage";
import ProductItemContainer from "@/components/section/ProductItemContainer";
import { trendingProductList } from "../data";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Categories = () => {
    const productListData = trendingProductList.slice(0, 8);
  return (
    <>
      <Header />
      <Breadcrumb >

        <span>Home</span>
        <span>Category</span>
        <span>Agriculture</span>
      
      </Breadcrumb>

      <Container small className="px-0 pt-0 pb-0 md:px-2xs md:py-2xs">
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
    </>
  );
};

export default Categories;
