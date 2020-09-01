import React from "react";
import styled from "styled-components";
import Star from "@material-ui/icons/Star";

// each product hold id, title, price, rating image
//those attributes will be used as paramenters - props

const ProductSmallContainer = styled.div`
  width: 24%;
  height: 400px;
  padding: 1%;
  margin: 2% 0;
  background-color: var(--lg-gray);
  border-radius: 2px;

  .product_price {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  .product_title {
    margin-bottom: 0;
    font-size: 15px;
  }

  .product_rating {
    display: inline-flex;
    color: var(--golden) !important;
    font-size: 6px;

    & svg {
      margin: 0;
      font-size: 1rem !important;
    }
  }

  @media (max-width: 800px) {
    height: 200px;

    .product_price {
      font-size: 16px;
    }

    .product_title {
      font-size: 14px;
        }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: orange;
  
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

function ProductSmallView({ id, title, price, rating, image }) { 
   
  return (
    <ProductSmallContainer>
      <ImageContainer >       
        <ProductImage  src={image} alt="Product Picture" />         
        </ImageContainer>
      <hr />
      <p className="product_price">€{price}</p>
      <p className="product_title">{title}</p>
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
    </ProductSmallContainer>
  );
}

export default ProductSmallView;
