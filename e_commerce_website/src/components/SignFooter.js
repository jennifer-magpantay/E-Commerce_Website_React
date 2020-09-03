import React from "react";
import styled from "styled-components";

const SignFooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  font-size: 12px;
  text-align: center;
  margin: 0;

   & p {
     color: var(--dk-gray);
  }

  & ul {
    padding-bottom: 1%;
  }
`;

function SignFooter() {
  return (
    <SignFooterWrapper>
      <ul>
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>Cookies Notice</li>
        <li>Ads Notice</li>
        <li>Help</li>
      </ul>
      <hr />
      <p>Copyright 2020 | Jennifer Magpantay</p>
    </SignFooterWrapper>
  );
}

export default SignFooter;
