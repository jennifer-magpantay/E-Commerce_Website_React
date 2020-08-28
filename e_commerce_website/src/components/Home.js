import React from "react";
import Container from './Container';
import Wrapper from "./Wrapper";
import Header from "./Header";
import Main from './Main';
import Footer from "./Footer";
import SignInMainContent from "./SignInMainContent";

function Home() {
  return (
    <Wrapper>
     <Header />
      <Main />
      <SignInMainContent />
      <Footer />    
    </Wrapper>
  );
}

export default Home;
