import React from "react";
import styled from "styled-components";

const CarousselContainer = styled.div`
  width: 98%;
  height: 30vh;
  padding: 2%;
  margin: auto;
  border: 1px solid var(--lg-gray);
`;

function Caroussel() {
  return <CarousselContainer></CarousselContainer>;
}

export default Caroussel;
