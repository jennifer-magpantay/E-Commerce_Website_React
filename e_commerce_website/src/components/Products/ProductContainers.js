import styled from "styled-components";

export const ProductContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export const ProductSectionContainer = styled.div`
  width: 25%;
  height: 465px;
  display: flex;
  flex: 1 1;
  flex-flow: column;
  padding: 1%;
  margin: 1%;
  background-color: var(--white);
  border: none;
  border-radius: 2px; 
  
  @media (max-width: 800px) {
    width: 48%;
    height: 370px;
  }

  .product_price,
  .product_category {
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 800px) {
      margin: 0 0 5px 0;
      font-size: 15px;
    }
  }

  .product_title {
    margin: 0;
    font-size: 15px;

    @media (max-width: 800px) {
      font-size: 14px;
    }
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
`;

export const ProductPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1%;
  background-color: var(--lg-gray);
  border-bottom: 1px solid var(--gray);

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const ProductImageContainer = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  align-items: center;
`;

export const ProductDescriptionContainer = styled.div`
  width: 50%;
  height: 350px;
  padding: 0 2% 0 2%;

  @media (max-width: 800px) {
    height: auto;
  }

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
