import React from "react";
import PageDefault from "./PageDefault";
import GradientBanner from "./GradientBanner";
import Caroussel from "./Caroussel";
import ProductSection from "./ProductSection";
import ProductWrapper from "./ProductWrapper";
import ProductRow from "./ProductRow";
import Main from "./Main";

function Home() {
  return (
    <PageDefault>
      {/* Content */}
      <Main>
        <GradientBanner />
        <Caroussel />
        <ProductWrapper>
          <ProductSection />
          </ProductWrapper>
        <ProductRow />
        <ProductRow />
        <ProductSection />
      </Main>
    </PageDefault>
  );
}

export default Home;
