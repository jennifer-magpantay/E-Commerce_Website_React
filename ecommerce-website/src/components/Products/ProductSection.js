import React from "react";
import ProductWrapper from "./ProductWrapper";
import styled from "styled-components";
import {Button} from "../Button";
import Star from "@material-ui/icons/Star";
import {ProductSectionContainer} from "./ProductContainers";
import {productsSectionList} from "./productsList";

// images are imported within 275x275px measures
export const ProductImage = styled.img`
  margin-bottom: 2%;
  border-radius: 2px;
  cursor: pointer;

  @media (max-width: 800px) {
    height: 60%;
  }
`;

// section of four products displayed, each product hold id, title, price, rating image
//those attributes will be used as paramenters - props
function ProductSection({ products }) {
  //avoiding long category names or titles
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // {truncate(item?.itemFromThelist, number)}

  return (
    <ProductWrapper products={productsSectionList}>
      {/* reading the array and for each item, return the elements as a product section, inside a container */}
      {/* for each item of the array, return a product container */}
      {productsSectionList.map((product, i) => (
        // giving to each item a unique key, reading src and lat from the array list
        <ProductSectionContainer>
          <h3 className="product_category" key={i}>Category&nbsp;
            {truncate(product?.category, 30)}
            {/* {product.category} */}
          </h3>
          <ProductImage src={product.image} alt={product.title} />
          <p className="product_price">€{product.price}</p>
          <p className="product_title">
            {truncate(product?.title, 35)}
            {/* {product.title} */}
          </p>
          <div className="product_rating">
            {
              // ratings: it will read the number of the rating and for each number will print a start (1 out 5)
              //for that, lets create an array and read it through loops
              Array(product.rating)
                .fill()
                .map((_) => (
                  <p className="rating">
                    {/* printing Star icon from material ui/core */}
                    <Star />
                  </p>
                ))
            }
          </div>
          {/* button to add the product to the basket */}
          <Button>Add to basket</Button>
        </ProductSectionContainer>
      ))}
    </ProductWrapper>
  );
}

export default ProductSection;
