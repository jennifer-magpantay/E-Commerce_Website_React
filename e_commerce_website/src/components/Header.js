import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Logo from "../assets/images/logo_black.png";
import SearchContainer from "./SearchContainer";
import NavBar from "./NavBar";
import Container from "./Container";
import CaptionContainer from "./CaptionContainer";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: var(--black);
  order: 1;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    padding: 2%;
  }
`;

const LogoIcon = styled.img`
  width: 190px;
  padding: 1%;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 120px;
    padding-right: 2%;
  }
`;

function Header() {
  // useHistory hook to navegate between pages
  const history = useHistory();

  // variable to hold the onclick event
  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <HeaderWrapper>
        <LogoIcon onClick={handleClick} src={Logo} alt=".COM loco" />
        <SearchContainer />
        <NavBar />
      </HeaderWrapper>
      <CaptionContainer>
        <ul>
          <li>Today's Deals</li>
          <li>Best Sellers</li>
          <li>Books</li>
          <li>Prime Video</li>
          <li>Gift Ideas</li>
          <li>Customer Service</li>
        </ul>
      </CaptionContainer>
    </Container>
  );
}

export default Header;
