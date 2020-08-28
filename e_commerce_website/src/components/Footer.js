import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_footer.png";
import SignInFooter from "./SignInFooter";
import Container from "./Container";
import CaptionContainer from "./CaptionContainer";

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

const LogoIcon = styled.img`
  width: 150px;
  padding: 1%;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
`;

const Content = styled.div`
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
      <CaptionContainer>
        {/* adding scrolltotop event */}
        {/* <h5 onClick={handleScroll}> */}
        <h5> BACK TO THE TOP</h5>
      </CaptionContainer>
      <FooterWrapper>
        <ContentContainer>
          <Content>
            <ul>
              <li>
                <h5>Get to Know Us</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Content>
          <Content>
            <ul>
              <li>
                <h5>Make Money with Us</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Content>
          <Content>
            <ul>
              <li>
                <h5>Payment Methods</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Content>
          <Content>
            <ul>
              <li>
                <h5>Let Us Help You</h5>
              </li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Content>
        </ContentContainer>
        <hr />
        <LogoIcon src={Logo} alt=".COM logo" />
        <SignInFooter />
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
