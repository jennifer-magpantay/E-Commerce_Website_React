import React from "react";
import PageDefault from "./PageDefault";
import MainBanner from "./MainBanner";
import Caroussel from "./Caroussel";
import ProductSmallView from "./ProductSmallView";
import ProductWrapper from "./ProductWrapper";
import Wrapper from './Wrapper';

function Home() {
  const image = "https://picsum.photos/200/180";
  return (
    <PageDefault>
      {/* Content */}
      <Wrapper>
      <MainBanner>
        <Caroussel />
        <ProductWrapper>
          <ProductSmallView
            image={image}
            id="12345"
            title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
            price={11.99}
            rating={4}
          />
          <ProductSmallView
            image={image}
            id="12345"
            title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
            price={11.99}
            rating={4}
          />
          <ProductSmallView
            image={image}
            id="12345"
            title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
            price={11.99}
            rating={4}
          />
          <ProductSmallView
            image={image}
            id="12345"
            title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
            price={11.99}
            rating={4}
          />
        </ProductWrapper>
      </MainBanner>
      </Wrapper>
    </PageDefault>
  );
}

export default Home;
