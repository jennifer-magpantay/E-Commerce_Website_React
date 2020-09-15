import React from "react";
import PageDefault from "../Main/PageDefault";
import Main from "../Main";
import ProductPageDescription from "./ProductPageDescription";
import ProductSection from "./ProductSection";
import ProductRow from "./ProductRow";

// fullscreen page to display a better descrition of the product + other offers
function ProductPage() {
  const image = "https://picsum.photos/660/350";
  return (
    <PageDefault>
      <Main>
        <ProductPageDescription
          image={image}
          id={122}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex sapien. Morbi arcu ipsum, maximus quis vestibulum non, dapibus nec odio. Cras commodo dapibus urna, quis fermentum elit faucibus nec. Nulla at sapien dui. Aliquam vel sagittis nisi, eget elementum nulla. Vivamus quis risus odio. Maecenas venenatis interdum tortor in tristique. Donec consectetur justo leo, nec congue lectus tincidunt et. Maecenas interdum purus justo, vitae blandit eros cursus at."
          price={11.99}
          rating={4}
        />
        <ProductRow />
        <ProductSection />
      </Main>
    </PageDefault>
  );
}
export default ProductPage;
