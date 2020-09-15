import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Main from '../Main';
import Star from "@material-ui/icons/Star";
import {ProductPageContainer, ProductImageContainer, ProductDescriptionContainer} from './ProductContainers';
import Button from '../Button';

const ProductImage = styled.img`
  border-radius: 2px;
`;

function ProductPageDescription({ id, title="No title provided", price=" no price provided", description="No description provided by the seller", rating, image }) {
  return (
    <Main>
    <ProductPageContainer>     
      <ProductImageContainer>
        {/* image */}
        <ProductImage src={image} />
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
        <Button>Add to Basket</Button>
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
  rating: PropTypes.number
   }

export default ProductPageDescription;
