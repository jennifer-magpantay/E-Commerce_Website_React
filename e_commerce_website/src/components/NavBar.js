import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  display: flex;
  color: var(--lg-gray);
`;

function NavBar() {
  return (
    <NavBarWrapper>
      {/* search bar */}
      

      {/* icons/links: basket,returns, login */}
      <ul>
        <li>RETURN</li>
        <li>BASKET</li>
        <li>SIGN IN</li>
      </ul>
    </NavBarWrapper>
  );
}

export default NavBar;
