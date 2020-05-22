import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.section`
  background: linear-gradient(
    ${({ theme }) => theme.colors.greenLightDarker},
    ${({ theme }) => theme.colors.greenLight},
    white
  );
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
    background: linear-gradient(
      50deg,
      ${({ theme }) => theme.colors.greenLight},
      rgba(0, 0, 0, 0) 50%
    );
    grid-column: span 3;
  }

  > :nth-child(2) {
    background: linear-gradient(
      230deg,
      ${({ theme }) => theme.colors.greenLightDarker},
      rgba(0, 0, 0, 0) 70%
    );
    grid-area: 3 / span 3 / auto / -1;
  }

  > :nth-child(3) {
    background: linear-gradient(
      200deg,
      ${({ theme }) => theme.colors.greenLightDarker},
      ${({ theme }) => theme.colors.greenLight},
      white 70%
    );
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
      <motion.span
        animate={{
          opacity: 0,
        }}
        transition={{
          yoyo: Infinity,
          ease: "linear",
          duration: 2,
        }}
      ></motion.span>
      <motion.span
        animate={{
          opacity: 0,
        }}
        transition={{
          yoyo: Infinity,
          ease: "linear",
          duration: 3,
        }}
      ></motion.span>
      <motion.span
        animate={{
          opacity: 0,
        }}
        transition={{
          yoyo: Infinity,
          ease: "linear",
          duration: 3,
          delay: 2,
        }}
      ></motion.span>
      <motion.span
        animate={{
          opacity: 0,
        }}
        transition={{
          yoyo: Infinity,
          ease: "linear",
          duration: 2,
          delay: 3,
        }}
      ></motion.span>
      <span></span>
    </Wrapper>
  );
}

export default IndexPresentation;
