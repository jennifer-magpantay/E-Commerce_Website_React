import React from "react";
import ProductWrapper from "./ProductWrapper";
import styled from "styled-components";
import Button from "./Button";
import Star from "@material-ui/icons/Star";
import { ProductSectionContainer } from "./ProductContainers";
import PropTypes from "prop-types";

// images are imported within 275x275px measures
export const ProductImage = styled.img`
 margin-bottom: 2%;
  border-radius: 2px;

  @media (max-width: 800px) {
    height: 60%;
  }
`;

//array list with the product info
const productsList = [
  {
    id: 1,
    category: "Lorem Ipsum",
    title: "Title Lorem Ipsum",
    price: 12.99,
    rating: 4,
    image: "https://picsum.photos/275/275",
  },
  {
    id: 2,
    category: "Lorem Ipsum More Lorem",
    title: "Title Lorem Ipsum",
    price: 16.99,
    rating: 5,
    image: "https://picsum.photos/275/275",
  },
  {
    id: 3,
    category: "Lorem Ipsum Lorem Lorem",
    title: "Title Lorem Ipsum",
    price: 9.99,
    rating: 3,
    image: "https://picsum.photos/275/275",
  },
  {
    id: 4,
    category: "Lorem Ipsum Cheap",
    title: "",
    price: 0,
    rating: 1,
    image: "https://picsum.photos/275/275",
  },
];

//reading the array and for each item, return the elements as a product section, inside a container
const list = (
  <>
    {/* for each item of the array, return a product container */}
    {productsList.map((product, i) => (
      // giving to each item a unique key, reading src and lat from the array list
      <ProductSectionContainer>
        <h3 className="product_category" key={i}>
          {product.category}
        </h3>
        <ProductImage src={product.image} alt={product.title} />
        <p className="product_price">€{product.price}</p>
        <p className="product_title">{product.title}</p>
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
  </>
);

// section of four products displayed
// each product hold id, title, price, rating image
//those attributes will be used as paramenters - props
function ProductSection({ products }) {
  return <ProductWrapper products={productsList}>{list}</ProductWrapper>;
}

productsList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default ProductSection;
