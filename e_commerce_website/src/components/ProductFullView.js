import React from "react";
import styled from "styled-components";
import Star from "@material-ui/icons/Star";

const ProductFullScreenContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  padding: 1%;
  background-color: var(--white);

  .product_price {
    font-size: 15px;
    color: red;
  }

  .product_title {
    font-size: 18px;
  }

  .product_rating {
    display: inline-flex;
    color: var(--golden) !important;
    font-size: 12px;

    & svg {
      margin: 0;
      font-size: 1.5rem !important;
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-radius: 2px;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 50%;
  background-color: orange;
`;

const DescriptionContainer = styled.div`
  width: 50%;
  height: 50%;
`;

function ProductFullView({ id, title, price, rating, image }) {
  return (
    <ProductFullScreenContainer>
      <ImageContainer>
        {/* image */}
        <ProductImage src={image} />
      </ImageContainer>
      <DescriptionContainer>
        <p className="product_title">{title}</p>
        <p className="product_price">€{price}</p>
        <div className="product_rating">
          {
            // ratings: it will read the number of the rating and for each number will print a start (1 out 5)
            //for that, lets create an array and read it through loops
            Array(rating)
              .fill()
              .map((_) => (
                <p className="rating">
                  {/* printing Star icon from material ui/core */}
                  <Star />
                </p>
              ))
          }
        </div>
      </DescriptionContainer>
    </ProductFullScreenContainer>
  );
}

export default ProductFullView;
