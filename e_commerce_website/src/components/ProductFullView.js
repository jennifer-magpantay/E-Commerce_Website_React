import React from "react";
import styled from "styled-components";
import Wrapper from './Wrapper';
import Star from "@material-ui/icons/Star";

const ProductFullViewContainer = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  padding: 1%;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray);
`;

const AsideContainer = styled.aside`
  width: 50%;
 `;

const ImageContainer = styled.div`
  width: 100%;
 
  @media (max-width: 800px) {
    height: 55%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border-radius: 2px;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  padding: 0 2% 0 2%;

  
  .product_price {
    font-size: 18px;
    font-weight: bold;
    color: red;
  }

  .product_title {
    font-size: 22px;
    font-weight: bold;
  }

  .product_description {
    font-size: 16px;
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


  @media (max-width: 800px) {
    width: 100%;
  }
`;

function ProductFullView({ id, title, price, description, rating, image }) {
  return (
    <Wrapper>
    <ProductFullViewContainer>
      <AsideContainer>
      <ImageContainer>
        {/* image */}
        <ProductImage src={image} />
      </ImageContainer>
      </AsideContainer>
      <AsideContainer>
      <DescriptionContainer>
        <p className="product_title">{title}</p>
        <p className="product_price">€{price}</p>
        <p className="product_description">
          <strong>Product description: </strong>
          {description}
        </p>
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
      </AsideContainer>
    </ProductFullViewContainer>
    {/* // add row of products */}
    </Wrapper>
  );
}

export default ProductFullView;
