import styled from 'styled-components';

export const LogoHeader = styled.img`
  width: 190px;
  padding: 1%;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 120px;
    padding-right: 2%;
  }
`;

export const LogoSignHeader = styled.img`
  width: 190px;
  padding: 1%; 
  margin-left: auto;
  margin-right: auto;
  display: block; 
  cursor: pointer;

  @media (max-width: 800px){
    width: 120px;
  }
 `;

export const LogoFooter = styled.img`
width: 150px;
padding: 1%;
cursor: pointer;

@media (max-width: 800px) {
  width: 100px;
}
`;
