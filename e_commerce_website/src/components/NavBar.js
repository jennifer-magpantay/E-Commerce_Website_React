import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 0 1%;
  color: var(--lg-gray);
  font-size: 15px;
  order: 3;

  @media (max-width: 800px) {
    order: 2;
  }
`;

const LinkContainer = styled.div`
  margin-right: 15px;
  /* background-color: orange; */
  & span {
    display: block;
    font-size: 14px;
  }

  .link_bold {
    font-weight: bold;
    letter-spacing: 1.2px;
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      {/* adding links& icons for the navbar */}
      <Link to="/signin">
        <LinkContainer>
          <span>Hello</span>
          <span className="link_bold">Account</span>
        </LinkContainer>
      </Link>

      <Link>
        <LinkContainer>
          <span>Try it</span>
          <span className="link_bold">Prime</span>
        </LinkContainer>
      </Link>

      <Link>
        <LinkContainer>
          <span>History</span>
          <span className="link_bold">Orders</span>
        </LinkContainer>
      </Link>

      <Link to="/checkout">
        <LinkContainer>
          <span>Basket</span>
          {/* add icon + number of items inside the basket */}
          <span className="link_bold">0</span>
        </LinkContainer>
      </Link>
      <ShoppingBasket />
    </NavBarWrapper>
  );
}

export default NavBar;
