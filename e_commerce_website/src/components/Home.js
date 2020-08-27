import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Footer from "./Footer";
import SignInMainContent from "./SignInMainContent";

function Home() {
  return (
    <Wrapper>
      <Header />
      <SignInMainContent />
      <Footer />
    </Wrapper>
  );
}

export default Home;
