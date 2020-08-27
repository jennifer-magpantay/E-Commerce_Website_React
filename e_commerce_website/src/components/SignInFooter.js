import React from "react";
import styled from "styled-components";

const SignInWrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 1% 2%;
  font-size: 12px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 10px;
  }

  & p {
    color: var(--dk-gray);
  }

  & ul {
    padding-bottom: 2%;
  }
`;

function SignInFooter() {
  return (
    <SignInWrapper>
      <ul>
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>Cookies Notice</li>
        <li>Ads Notice</li>
        <li>Help</li>
      </ul>
      <hr />
      <p>Copyright 2020 | Jennifer Magpantay</p>
    </SignInWrapper>
  );
}

export default SignInFooter;
