import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Logo from "../assets/images/logo_white_1.png";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  
 `;

const LogoIcon = styled.img`
  width: 190px;
  padding: 1%; 
  margin-left: auto;
  margin-right: auto;
  display: block; 
  cursor: pointer;

  @media (max-width: 800px){
    width: 120px;
  }
 `;

function SignInHeader() {
   // useHistory hook to navegate between pages
   const history = useHistory();

   // variable to hold the onclick event  
   const handleClick = () => {
     history.push("/");
 }

  return (
    <HeaderWrapper>
      <LogoIcon onClick={handleClick} src={Logo} alt="Website Logo Centralized" />
      <hr />
    </HeaderWrapper>
  );
}

export default SignInHeader;
