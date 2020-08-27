import React from "react";
import { useHistory } from "react-router-dom";
import Container from "./Container";
import { Form, FormWrapper } from "./FormWrapper";
import Button from "./Button";
import SignInHeader from "./SignInHeader";
import SignInFooter from "./SignInFooter";

function SignIn() {
  const history = useHistory();

  return (
    <Container>
      <SignInHeader />
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
        <Button onClick={() => history.push("/signup")}>CREATE ACCOUNT</Button>
      </FormWrapper>
      <SignInFooter />
    </Container>
  );
}

export default SignIn;