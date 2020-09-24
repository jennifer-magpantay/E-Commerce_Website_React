import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background: rgb(252, 146, 5);
  background: linear-gradient(
    0deg,
    rgba(252, 146, 5, 1) 0%,
    rgba(238, 165, 0, 1) 35%,
    rgba(255, 185, 28, 1) 100%
  );
  box-shadow: 0px 11px 7px -13px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 11px 7px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 11px 7px -13px rgba(0, 0, 0, 0.75);
  color: var(--black);
  padding: 10px 16px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.75;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    width: 48%;
  }

  .button-home {
    background-color: transparent;
    border: 1px solid var(--gray);
    border-radius: 4px;
  }
`;
