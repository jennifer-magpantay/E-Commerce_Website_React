import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { Form, FormWrapper } from "./Form";
import SignHeader from "./SignHeader";
import SignFooter from "./SignFooter";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`New profile added - UserName: ${name}, Email: ${email}`);
    console.log("New profile added ", {name} , {email});
  };

  return (
    <Container>
      <SignHeader />
      <FormWrapper>
        <h4>CREATE ACCOUNT</h4>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <p className="caption">Passwords must be at least 6 characters</p>

          <label htmlFor="password">Re-enter Password</label>
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
          Already have an account?
          <strong>
            <Link to="/signin"> Sign in here</Link>
          </strong>
        </p>
      </FormWrapper>
      <SignFooter />
    </Container>
  );
}

export default SignUp;
