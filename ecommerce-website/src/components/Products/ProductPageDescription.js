import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Main from "../Main";
import Star from "@material-ui/icons/Star";
import {
  ProductPageContainer,
  ProductImageContainer,
  ProductDescriptionContainer,
} from "./ProductContainers";
import {Button, ButtonWrapper} from "../Button";
import { Link } from "react-router-dom";

const ProductImage = styled.img`
  border-radius: 2px;
`;

function ProductPageDescription({
  id,
  title = "No title provided",
  price = " no price provided",
  description = "No description provided by the seller",
  rating,
  image,
  alt
}) {
  return (
    <Main>
      <ProductPageContainer>
        <ProductImageContainer>
          {/* image */}
          <ProductImage src={image} alt={title}/>
        </ProductImageContainer>
        <ProductDescriptionContainer>
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
          <ButtonWrapper>
            <Button>Add to Basket</Button>
            <Button className="button-home">
              <Link to="/home">Back to Home</Link>
            </Button>
          </ButtonWrapper>
        </ProductDescriptionContainer>
      </ProductPageContainer>
      {/* // add row of products */}
    </Main>
  );
}

ProductPageDescription.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default ProductPageDescription;
