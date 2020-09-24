import React from "react";
import styled from "styled-components";
import Container from "../Container";
import SignFooter from "../SignIn/SignFooter";
import { LogoFooter } from "../LogoIcon";
import Logo from "../../assets/images/logo_footer.png";
import SubLinkContainer from "../SubLinkContainer";
import SignOverFooter from "./SignOverFooter";

const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 1% 2%;
  background-color: var(--black);
  color: var(--lg-gray);
  & p {
    color: var(--lg-gray);
  }
`;

const FooterContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  padding: 2% 0;
  border-bottom: 1px solid var(--lg-gray);
  line-height: 18px;
`;

const FooterListContent = styled.ul`
  & li {
    display: block;
    font-size: 12px;
  }
  & h5 {
    font-size: 12px;
    letter-spacing: 1.5px;
  }
`;

function Footer() {
  return (
    <Container>
      <SignOverFooter />
      <SubLinkContainer>
        <h5>BACK TO THE TOP</h5>
        {/* when it is clicked, will bring the user to the top of the page */}
      </SubLinkContainer>
      <FooterWrapper>
        <FooterContentContainer>
          <FooterListContent>
            <h5 className="section_title">Get to Know Us</h5>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </FooterListContent>
          <FooterListContent>
            <h5 className="section_title">Make Money with Us</h5>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </FooterListContent>
          <FooterListContent>
            <h5 className="section_title">Payment Methods</h5>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </FooterListContent>
          <FooterListContent>
            <h5 className="section_title">Let Us Help You</h5>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </FooterListContent>
        </FooterContentContainer>
        <LogoFooter src={Logo} alt=".COM logo" />
        <SignFooter />
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
