import React from "react";
import { useHistory } from "react-router-dom";
import Container from "./Container";
import { Form, FormWrapper } from "./Form";
import Button from "./Button";
import SignHeader from "./SignHeader";
import SignFooter from "./SignFooter";

function SignIn() {
  // useHistory hook to navegate between pages
  const history = useHistory();

  // variable to hold the onclick event  
  const handleClick = () => {
    history.push("/signup");
}

  return (
    <Container>
      <SignHeader />
      <FormWrapper>
        <h4>SIGN IN TO YOUR ACCOUNT</h4>
        <Form>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />

          <label for="password">Password</label>
          <input type="password" id="password" name="password" />

          <input type="submit" id="submit" name="submit" />
          <p>
            By signing-in you agree to .COM Global E-commerce's Conditions of
            Use. Please see our Privacy Notice, our Cookies Notice and our Ads
            Notice.
          </p>
        </Form>
        <hr />
        <p>
          Forgot <strong>password?</strong>
        </p>
      </FormWrapper>
      <hr />
      <FormWrapper>
        <p>New to .COM?</p>
        <Button onClick={handleClick}>CREATE ACCOUNT</Button>
      </FormWrapper>
      <SignFooter />
    </Container>
  );
}

export default SignIn;
