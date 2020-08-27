import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";

const SignInMainWrapper = styled.div`
  width: 30%;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
  text-align: center;
`;

function SignInMainContent() {
  const history = useHistory();
  return (
    <Container>
      <hr />
      <SignInMainWrapper>
        <p>Want to see personalised recommendations?</p>
        <Button onClick={() => history.push("/signin")}>SIGN IN</Button>
        <p>
          New to .COM?<strong> Start here</strong>
        </p>
      </SignInMainWrapper>
      <hr />
    </Container>
  );
}

export default SignInMainContent;
