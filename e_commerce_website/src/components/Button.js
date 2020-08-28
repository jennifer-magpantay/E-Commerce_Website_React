import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: var(--golden);
  color: var(--black);
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 800px){
    font-size: 14px;
    padding: 12px 18px;
  }
`;

export default Button;
