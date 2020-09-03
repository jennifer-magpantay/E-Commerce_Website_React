import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import Button from "./Button";

const SignOverFooterWrapper = styled.div`
  width: 25%;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
  text-align: center;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

function SignOverFooter() {
  const history = useHistory();
  return (
    <SignOverFooterWrapper>
      <p>Want to see personalised recommendations?</p>
      <Button onClick={() => history.push("/signin")}>SIGN IN</Button>
      <p>
        New to .COM?
        <strong>
          <Link to="/signup"> Start here</Link>
        </strong>
      </p>
    </SignOverFooterWrapper>
  );
}

export default SignOverFooter;
