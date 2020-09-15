import React from "react";
import SignFooter from "../SignIn/SignFooter";
import SignHeader from "../SignIn/SignHeader";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
width: 70%;
height: calc(100vh - 100px - 300px);
margin: 8% auto;
text-align: center;
& h1{
    font-size: 60px;
    margin: 0 0 2% 0;
}
& h3 {
    font-size: 28px;
    margin: 0;
}
`;

function ErrorPage() {
   return (
    <>
      <SignHeader />
           <ContentContainer>
          <h1>It seems that something wrong happens</h1>
          <h3>The page you are trying to reach is not available</h3>
          <p>To go back to Home, click <strong><Link to="/home"> here</Link></strong></p>
      </ContentContainer>
           <SignFooter />
      </>
  );
}

export default ErrorPage;
