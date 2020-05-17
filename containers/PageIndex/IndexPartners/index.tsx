import React from "react";
import styled from "styled-components";
import Section from "components/Section";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Partner = styled.div`
  opacity: 0.6;
  transition: opacity 1s ease 0s;
  padding: 20px 0%;

  text-align: center;

  & :hover {
    opacity: 1;
  }

  @media (min-width: 960px) {
    padding: 0;
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
