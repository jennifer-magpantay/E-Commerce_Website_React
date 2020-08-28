import styled from "styled-components";

export const ProductContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export const ProductSmallContainer = styled.div`
  width: 20%;
  height: 50%;
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
    margin: 0;
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
`;

export const ProductFullScreenContainer = styled.div`
  width: 100%;
  height: 80vh;
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
