import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Star from "@material-ui/icons/Star";
import { ProductSectionContainer } from "./ProductContainers";
import ProductWrapper from "./ProductWrapper";

// images are imported within 275x275px measures
const ProductImage = styled.img`
  border-radius: 2px;

  @media (max-width: 800px) {
    height: 60%;
  }
`;

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
        <hr />
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

ProductSection.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default ProductSection;
