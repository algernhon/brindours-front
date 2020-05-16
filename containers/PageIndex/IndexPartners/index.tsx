import React from "react";
import styled from "styled-components";
import Section from "components/Section";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Title = styled.h2`
  margin-bottom: 60px;
`;

const Partner = styled.div`
  opacity: 0.6;
  transition: opacity 1s ease 0s;
  & :hover {
    opacity: 1;
  }
`;

const IconCircle = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.pinkDark};
  display: inline-block;
  border-radius: 40px;
  padding: 0.4em 0.6em;
  height: 80px;
  width: 80px;

  img {
    padding-top: 12px;
    width: 50px;
    user-select: none;
  }
`;

function IndexPartners() {
  return (
    <Section.Container>
      <Section.Center>
        <Section.Title image="svg/handshake-duotone.svg">
          Nos partenaires
        </Section.Title>
        <Center>
          <Partner>
            <img src="img/partners/caf.png" alt="" />
          </Partner>
          <Partner>
            <img src="img/partners/departement.png" alt="" />
          </Partner>
          <Partner>
            <img src="img/partners/petibio.png" alt="" />
          </Partner>
        </Center>
      </Section.Center>
    </Section.Container>
  );
}

export default IndexPartners;
