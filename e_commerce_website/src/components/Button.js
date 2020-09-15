import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: var(--golden);
  color: var(--black);
  padding: 10px 16px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 800px){
    font-size: 14px;
    margin: 0;
  }
`;

export default Button;
