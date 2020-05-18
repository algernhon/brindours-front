import React from "react";
import styled from "styled-components";

import Section from "components/Section";
import Button from "components/Button";

const Container = styled(Section.Container)`
  position: relative;
`;

const Center = styled(Section.Center)`
  text-align: center;
  position: relative;
  padding: 40px 13%;
  z-index: 10;

  & > p {
    margin: 30px 0;
  }
`;

const ButtonCenter = styled(Button)`
  margin: 0 30px;
`;

const Background = styled.div`
  z-index: 0;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  position: absolute;
  width: 100%;
  display: grid;
  background: linear-gradient(
    180deg,
    rgba(242, 251, 244, 1) 0%,
    rgba(242, 251, 244, 0.4) 100%
  );

  & > span :nth-child(1) {
    grid-column: span 1;
    grid-row: 1;
    background: linear-gradient(
      200deg,
      ${({ theme }) => theme.colors.greenLightTransition} 0%,
      ${({ theme }) => theme.colors.greenLight} 100%
    );
  }

  & > span :nth-child(2) {
    grid-column: 8;
    grid-row: 2;
    background: linear-gradient(
      200deg,
      ${({ theme }) => theme.colors.greenLightTransition} 0%,
      ${({ theme }) => theme.colors.greenLight} 100%
    );
  }

  & > span :nth-child(3) {
    grid-column: 2;
    grid-row: 3;
    background: linear-gradient(
      200deg,
      ${({ theme }) => theme.colors.greenLightTransition} 0%,
      ${({ theme }) => theme.colors.greenLight} 100%
    );
  }

  & > span :nth-child(4) {
    grid-column: 6;
    grid-row: 1;
    background: linear-gradient(
      200deg,
      ${({ theme }) => theme.colors.greenLightTransition} 0%,
      ${({ theme }) => theme.colors.greenLight} 100%
    );
  }

  & > span :nth-child(5) {
    grid-column: 5;
    grid-row: 3;
    background: linear-gradient(
      200deg,
      ${({ theme }) => theme.colors.greenLightTransition} 0%,
      ${({ theme }) => theme.colors.greenLight} 100%
    );
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function IndexOpen() {
  return (
    <Container>
      <Background>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Background>
      <Center>
        <h2>La structure est actuellement fermée</h2>
        <p>
          Si vous avez besoin de renseignement veuillez nous contacter par
          e-mail. Vous pouvez aussi nous contacter par téléphone en consultant
          les horraires et les jours d'ouveture.
        </p>
        <ButtonWrapper>
          <ButtonCenter primary>Nous Contacter</ButtonCenter>
          <ButtonCenter>Voir les horraires</ButtonCenter>
        </ButtonWrapper>
      </Center>
    </Container>
  );
}

export default IndexOpen;
