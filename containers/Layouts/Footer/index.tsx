import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.greenLight};
  position: relative;
  overflow: hidden;

  @media (min-width: 960px) {
    padding-top: 30px;
    background-image: url("svg/grass.svg");
    background-repeat: repeat-x;
    background-position: 100% 93%;
    background-size: 4%;
  }
`;

const Center = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  max-width: ${({ theme }) => theme.sizes.widthDefault};

  background-image: url("svg/trees.svg");
  background-repeat: no-repeat;
  background-position: 100% 101%;
  background-size: 40%;
  z-index: 10;

  @media (min-width: 960px) {
    background-size: 15%;
    flex-direction: row;
  }
`;

const Column = styled.div`
  margin-top: 10px;
  margin-left: 50px;

  & :not(:first-child) {
    opacity: 0.8;
  }

  @media (min-width: 960px) {
    padding: 30px 10px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    height: 350px;
    margin: 0;
  }
`;

const TitleColumn = styled.h1`
  margin-top: 22px;
  font-size: 18px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  & > li {
    margin: 15px 0;
  }
`;

const Copyright = styled.div`
  font-family: "TextbookNew", sans-serif;
  background-color: ${({ theme }) => theme.colors.greenLightDarker};
  font-size: 10px;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;

  padding: 10px 0 80px 0;

  @media (min-width: 960px) {
    padding: 10px 0;
  }
`;

const WrapperBirds = styled(motion.div)`
  display: none;

  @media (min-width: 960px) {
    display: inline-block;
    position: absolute;
    margin-top: 0px;
    top: 0;
    width: 100%;
    user-select: none;
    z-index: 0;
  }
`;

// This is the default footer of the website
function Footer() {
  return (
    <Wrapper>
      <Center>
        <Column>
          <img src="/img/logo-header.png" alt="Logo Brin D'ours" />
        </Column>
        <Column>
          <TitleColumn>Accueil</TitleColumn>
          <List>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </List>
        </Column>
        <Column>
          <TitleColumn>Contact</TitleColumn>
          <List>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </List>
        </Column>
      </Center>
      <Copyright>
        Copyright {new Date().getFullYear()} © Brin d'Ours Micro Crèche -
        Réalisé avec ❤️
      </Copyright>
      <WrapperBirds
        animate={{ x: ["-20%", "100%"] }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        <img src="/img/bird.gif" alt="Little bird flying" />
        <img
          src="/img/bird.gif"
          alt="Little bird flying"
          style={{ transform: "translateX(30px) translateY(15px)" }}
        />
      </WrapperBirds>
    </Wrapper>
  );
}

export default Footer;
