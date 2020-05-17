import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: linear-gradient(#a9dcbc, #e9fff1, white);
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(1, 1fr);
  overflow: hidden;
  transform-origin: 0;
  transform: skewY(-10deg);
  z-index: -1;
  margin-top: -145px;

  @media (min-width: 300px) {
    grid-template-rows: repeat(5, 150px);
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-rows: repeat(5, 200px);
    grid-template-columns: repeat(10, 1fr);
  }

  > :nth-child(1) {
    background: linear-gradient(50deg, #d4fae2, #ccf0d9, rgba(0, 0, 0, 0) 50%);
    grid-column: span 3;
  }

  > :nth-child(2) {
    background: linear-gradient(230deg, #a9dcbc, rgba(0, 0, 0, 0) 70%);
    grid-area: 3 / span 3 / auto / -1;
  }

  > :nth-child(3) {
    background: linear-gradient(200deg, #ccf0d9, #e1faea, white 70%);
    grid-row: 4;
    grid-column: span 10;
  }

  > :nth-child(5) {
    grid-row: 5;
    grid-column: span 10;
    background: white;
  }
`;

// This is the default header of the website
function IndexPresentation() {
  return (
    <Wrapper aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
}

export default IndexPresentation;
