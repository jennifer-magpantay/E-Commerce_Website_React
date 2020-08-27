import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const SearchWrapper = styled.div`
width: 60%;
`;

const Form = styled.form`

 & input {
     width: 80%;
 }

 & button {
    width: 15%;
    padding: 12px;
 }
`;

function SearchContainer() {
    return (
        <SearchWrapper>
        <Form>
          <input type="text" name="search" />
          <Button type="submit">Search</Button>
        </Form>
      </SearchWrapper>
    )
}

export default SearchContainer;
