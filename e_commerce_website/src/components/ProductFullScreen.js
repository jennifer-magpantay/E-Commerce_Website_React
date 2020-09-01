import React from "react";
import PageDefault from "./PageDefault";
import ProductFullView from "./ProductFullView";

function ProductFullScreen() {
  const image = "https://picsum.photos/300/150/";
  return (
    <PageDefault>
      <ProductFullView
        image={image}
        id="12345"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex sapien. Morbi arcu ipsum, maximus quis vestibulum non, dapibus nec odio. Cras commodo dapibus urna, quis fermentum elit faucibus nec. Nulla at sapien dui. Aliquam vel sagittis nisi, eget elementum nulla. Vivamus quis risus odio. Maecenas venenatis interdum tortor in tristique. Donec consectetur justo leo, nec congue lectus tincidunt et. Maecenas interdum purus justo, vitae blandit eros cursus at."
        price={11.99}
        rating={4}
      />
    </PageDefault>
  );
}
export default ProductFullScreen;
