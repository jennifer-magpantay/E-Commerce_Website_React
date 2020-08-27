import React from "react";
import Container from "./Container";
import { Form, FormWrapper } from "./FormWrapper";
import SignInHeader from "./SignInHeader";
import SignInFooter from "./SignInFooter";

function SignUp() {
  return (
    <Container>
      <SignInHeader />
      <FormWrapper>
        <h4>CREATE ACCOUNT</h4>
        <Form>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" />

          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
          <p className="caption">Passwords must be at least 6 characters</p>

          <label for="password">Re-enter Password</label>
          <input type="password" id="password" name="password" />

          <input type="submit" id="submit" name="submit" />
          <p>
            By creating an account you agree to .COM Global E-commerce's
            Conditions of Use. Please see our Privacy Notice, our Cookies Notice
            and our Ads Notice.
          </p>
        </Form>
        <hr />
        <p>
          Already have an account?<strong> Sign in</strong>
        </p>
      </FormWrapper>
      <SignInFooter />
    </Container>
  );
}

export default SignUp;
