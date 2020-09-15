import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LogoSignHeader } from '../LogoIcon';
import Logo from "../../assets/images/logo_white_1.png";

const SignHeaderWrapper= styled.header`
  width: 100%;
  height: 100px;  
 `;

function SignHeader() {
   // useHistory hook to navegate between pages
   const history = useHistory();

   // variable to hold the onclick event  
   const handleClick = () => {
     history.push("/");
 }

  return (
    <SignHeaderWrapper>
      <LogoSignHeader onClick={handleClick} src={Logo} alt="Website Logo Centralized" />
      <hr />
    </SignHeaderWrapper>
  );
}

export default SignHeader;
