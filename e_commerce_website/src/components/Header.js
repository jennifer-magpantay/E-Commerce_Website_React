import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LogoHeader } from "./LogoIcon";
import Logo from "../assets/images/logo_black.png";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Container from "./Container";
import SubLinkContainer from "./SubLinkContainer";
import {categoryList, list} from './categoryList';

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

function Header({ links }) {
  // useHistory hook to navegate between pages
  const history = useHistory();

  // variable to hold the onclick event
  const handleClick = () => {
    history.push("/");
  };
  // categoryList and list are the variables that will hold de map function to read and display all the items of the array
  return (
    <Container>
      <HeaderWrapper>
        <LogoHeader onClick={handleClick} src={Logo} alt=".COM loco" />
        <SearchBar />
        <NavBar />
      </HeaderWrapper>
      <SubLinkContainer links={categoryList}>
        {/*associate the main prop we used as parameter of the function with the list we eant to render/display  */}
        {list}
        {/* then, declare the variable that holds de map function */}
      </SubLinkContainer>
    </Container>
  );
}

export default Header;
