import React from "react";
import styled from "styled-components";
import { LogoFooter } from "./LogoIcon";
import Logo from "../assets/images/logo_footer.png";
import SignFooter from "./SignFooter";
import Container from "./Container";
import SubLinkContainer from "./SubLinkContainer";

const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 1% 2%;
  background-color: var(--black);
  color: var(--lg-gray);
  text-align: center;

  & p {
    color: var(--lg-gray);
  }

  & h5 {
    letter-spacing: 1px;
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
`;

const FooterContent = styled.section`
  text-align: left;

  & h5 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  & li {
    display: block;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    & h5 {
      font-size: 12px;
    }
  }
`;

function Footer() {
  // const handleSCroll = () => {};
  return (
    <Container>
      <SubLinkContainer>
        {/* adding scrolltotop event */}
        {/* <h5 onClick={handleScroll}> */}
        <h5> BACK TO THE TOP</h5>
      </SubLinkContainer>
      <FooterWrapper>
        <FooterContentContainer>
          <FooterContent>
            <ul>
              <li>
                <h5>Get to Know Us</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </FooterContent>
          <FooterContent>
            <ul>
              <li>
                <h5>Make Money with Us</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </FooterContent>
          <FooterContent>
            <ul>
              <li>
                <h5>Payment Methods</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </FooterContent>
          <FooterContent>
            <ul>
              <li>
                <h5>Let Us Help You</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </FooterContent>
        </FooterContentContainer>
        <hr />
        <LogoFooter src={Logo} alt=".COM logo" />
        <SignFooter />
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
