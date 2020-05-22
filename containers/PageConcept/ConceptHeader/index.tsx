import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CompHeader from "components/Header";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.greenLight};
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  margin-top: -150px;
  padding-top: 150px;
  position: relative;
  z-index: 1;
`;

const Header = styled(CompHeader)`
  margin-top: 7%;
`;

const WrapperAnimation = styled.div`
  width: 100%;
  position: absolute;
  height: 750px;
  z-index: 0;
  overflow: hidden;

  & div {
    background-color: ${({ theme }) => theme.colors.greenLightDarker};
    position: absolute;
  }

  & div:nth-child(1) {
    width: 60px;
    height: 60px;
    left: 5%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(2) {
    width: 40px;
    height: 40px;
    left: 20%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(3) {
    width: 80px;
    height: 80px;
    left: 35%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(4) {
    width: 30px;
    height: 30px;
    left: 45%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(5) {
    width: 90px;
    height: 90px;
    left: 60%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(6) {
    width: 20px;
    height: 20px;
    left: 70%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(7) {
    width: 100px;
    height: 100px;
    left: 90%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(8) {
    width: 20px;
    height: 20px;
    left: 10%;
    bottom: 0;
    opacity: 0;
  }

  & div:nth-child(9) {
    width: 20px;
    height: 20px;
    left: 80%;
    bottom: 0;
    opacity: 0;
  }
`;

function ConceptHeader() {
  return (
    <Container>
      <WrapperAnimation>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 14,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 10,
            delay: 5,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 18,
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 10,
            delay: 0,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 12,
            delay: 5,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 8,
            delay: 0,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 16,
            delay: 3,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 22,
            delay: 0,
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: -750,
            rotate: 720,
            borderRadius: [null, 0, "10%", "25%", "50%", "50%"],
            opacity: [null, 1, 1, 1, 0],
          }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 22,
            delay: 2,
          }}
        ></motion.div>
      </WrapperAnimation>
      <Wrapper>
        <Header title="Découvrez notre concept">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget metus
          finibus, venenatis enim vitae, mollis metus. In finibus semper
          aliquam.
        </Header>
      </Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: "relative" }}
      >
        <path
          fill="#FFFFFF"
          fillOpacity="1"
          d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,181.3C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Container>
  );
}

export default ConceptHeader;
