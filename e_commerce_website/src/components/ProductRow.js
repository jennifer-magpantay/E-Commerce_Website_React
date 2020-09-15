import React from "react";
import styled from "styled-components";

const ProductRowWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2% 1%;
  border-bottom: 1px solid var(--gray);

  & h3 {
    padding-left: 1%;
    margin: 0 0 10px 0;
    font-weight: bold;
  }
`;

const ProductRowImageContainer = styled.div`
  display: flex;
  padding: 1%;
  background-color: var(--white);
  overflow-y: hidden;
  overflow-x: scroll;

  @media (max-width: 800px) {
    padding: 3% 1%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductRowImage = styled.img`
  object-fit: contain;
  min-width: 200px;
  height: 200px;
  margin-right: 15px;
  background-color: red;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 600ms;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 800px) {
    max-width: 150px;
  }
`;

// random picture to be loaded
// const randomImage = "https://picsum.photos/200/200";
// passing the variable inside the array does not work!
const imagesList = [
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
  {
    src: "https://picsum.photos/200/200",
    alt: "Lorem Ipsum",
  },
];

const list = (
  <>
    {/* read an array of 08 pictures, for each item, return a image component */}
    {imagesList.map((image, i) => (
      // giving to each item a unique key, reading src and lat from the array list
      <ProductRowImage key={i} src={image.src} alt={image.alt} />
    ))}
  </>
);

function ProductRow({ listOfmages }) {
  return (
    <ProductRowWrapper>        
      <ProductRowImageContainer listOfImages={imagesList}>
        {list}
      </ProductRowImageContainer>
    </ProductRowWrapper>
  );
}

export default ProductRow;
