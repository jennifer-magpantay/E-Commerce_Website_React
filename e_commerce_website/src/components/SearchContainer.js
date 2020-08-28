import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  order: 2;

  @media (max-width: 800px) {
    order: 3;
  }

  & input {
    height: 40px;
    border: none;
    border-radius: 0;
  }

  .header_searchIcon {
    width: 40px !important;
    height: 40px !important;
    padding: 10px;
    margin: 8px 5px 8px 0;
    background-color: var(--golden);
  }
`;

function SearchContainer() {
  return (
    <SearchWrapper>
      <input type="text" name="search" />
      <SearchIcon className="header_searchIcon" />
    </SearchWrapper>
  );
}

export default SearchContainer;
