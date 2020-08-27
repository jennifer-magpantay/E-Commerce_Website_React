import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_black.png";
import SearchContainer from './SearchContainer';
import NavBar from "./NavBar";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
`;

const LogoIcon = styled.img`
  width: 190px;
  padding: 1%;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 120px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
           <LogoIcon src={Logo} alt=".COM loco" />
           <SearchContainer />
           <NavBar />
    </HeaderWrapper>
  );
}

export default Header;
