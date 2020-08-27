import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_footer.png";
import SignInFooter from './SignInFooter';

const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 1% 2%;
  background-color: var(--black);
  color: var(--lg-gray);
  text-align: center;  

    & p {
        color: var(--lg-gray);
        font-size: 12px;

        @media (max-width: 800px) {
            font-size: 10px;
    }    
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

& li {
        display: block;  
        font-size: 12px;      
     }
`;

function Footer() {
  return (
  <FooterWrapper>
      <h5>BACK TO THE TOP</h5>
      <hr />
      <ContentContainer>
          <Content>
      <p>Get to Know Us</p>
      <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
      </ul>
      </Content>
      <Content>
      <p>Make Money with Us</p>
      <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
      </ul>
      </Content>
      <Content>
      <p>Payment Methods</p>
      <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
      </ul>
      </Content>
      <Content>
      <p>Let Us Help You</p>
      <ul>
          <li>Lorem</li>
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
    );
}

export default Footer;
