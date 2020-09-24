import React from "react";
import Main from "../Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function PageDefault({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
