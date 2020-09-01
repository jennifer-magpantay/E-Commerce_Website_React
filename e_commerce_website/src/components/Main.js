import React from "react";
import Wrapper from "./Wrapper";
import MainBanner from "./MainBanner";
import Caroussel from "./Caroussel";
import ProductSmallView from "./ProductSmallView";
import ProductWrapper from "./ProductWrapper";
import ProductFullView from "./ProductFullView";

function Main() {
  const image = "https://picsum.photos/200/180";
  return (
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
        {/* productrow */}
        
      </MainBanner>
    </Wrapper>
  );
}

export default Main;
