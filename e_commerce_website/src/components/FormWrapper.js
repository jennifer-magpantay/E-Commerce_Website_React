import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 35%;
  height: auto;
  padding: 1%;
  margin: 2% auto;
  border: 1px solid var(--gray);
  border-radius: 4px;
  text-align: center;
  color: var(--dk-gray);
  & p {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const Form = styled.form`
  color: var(--dk-gray);
  font-size: 12px;
  text-align: left;

  & p {
    color: var(--dk-gray);
  }

  .caption {
      padding: 0;
      margin: 0;
      font-size: 12px;
      text-align: right;
    }
`;


