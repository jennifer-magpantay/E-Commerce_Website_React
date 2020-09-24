import React from "react";
import PageDefault from "./PageDefault";
import GradientBanner from "../GradientBanner";
import Caroussel from "../Caroussel";
import ProductSection from "../Products/ProductSection";
import ProductWrapper from "../Products/ProductWrapper";
import ProductRow from "../Products/ProductRow";
import Main from "../Main";
import Label from "../Label";

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
        <Label>Explore deals by category</Label>
        <ProductRow />
        <Label>Last days of sales</Label>
        <ProductRow />
        <ProductSection />
        <Label>Top home products</Label>
        <ProductRow />
        <Label>Best sellers on E-books, DVD & Blue ray</Label>
        <ProductRow />
      </Main>
    </PageDefault>
  );
}

export default Home;
