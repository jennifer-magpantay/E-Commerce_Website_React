import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../Container";
import { Form, FormWrapper } from "./Form";
import Button from "../Button";
import SignHeader from "./SignHeader";
import SignFooter from "./SignFooter";

function SignIn() {
  //adding state to the form
  //the form will have an initial empty value
  const [input, setInput] = useState("");
  //this initial value will be replace for a new state whena changes occurs in the form
  //this new state will use a variable that holds an event to return the new value
  const handleChange = (event) => {
    setInput(event.target.value);
  }
  //this variable will be used in the onChange() on the input fields
  //a subimit variable is created to display the value of this event
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`New password added: ${input}`);
    console.log("New password added: ", {input});
  };
  //this submit variable will be used in the onSubmit() for the form
  // useHistory hook to navegate between pages
  const history = useHistory();
  // variable to hold the onclick event
  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <Container>
      <SignHeader />
      <FormWrapper>
        <h4>SIGN IN TO YOUR ACCOUNT</h4>
        <Form onSubmit={handleSubmit}>
          {/* Form onSubmit={handleSubmit} OR Form onSubmit={this.handleSubmit}*/}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
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
