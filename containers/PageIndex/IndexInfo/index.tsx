import React from "react";
import styled from "styled-components";

import Section from "components/Section";

const Center = styled(Section.Center)`
  display: flex;
`;

const InfoBlock = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0 30px;
`;

const Title = styled(Section.Title)`
  margin-bottom: 10px;
`;

function IndexInfo() {
  return (
    <Section.Container>
      <Center>
        <InfoBlock>
          <Title image="svg/handshake-duotone.svg" position="left">
            Juste 10 places
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          sem et sem condimentum, eu pellentesque purus volutpat. Sed sit amet
          nunc egestas, ultricies nulla sit amet, scelerisque ante. Vivamus at
          tellus id lacus euismod malesuada a sit amet ipsum.
          <br />
          <br />
          Vivamus at tellus id lacus euismod malesuada a sit amet ipsum.
        </InfoBlock>
        <InfoBlock>
          <Title image="svg/handshake-duotone.svg" position="left">
            A CrècheVille
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          sem et sem condimentum, eu pellentesque purus volutpat. Sed sit amet
          nunc egestas, ultricies nulla sit amet, scelerisque ante. Vivamus at
          tellus id lacus euismod malesuada a sit amet ipsum.
          <br />
          <br />
          Vivamus at tellus id lacus euismod malesuada a sit amet ipsum.
        </InfoBlock>
        <InfoBlock>
          <Title image="svg/handshake-duotone.svg" position="left">
            Eco-responsable
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          sem et sem condimentum, eu pellentesque purus volutpat. Sed sit amet
          nunc egestas, ultricies nulla sit amet, scelerisque ante. Vivamus at
          tellus id lacus euismod malesuada a sit amet ipsum.
          <br />
          <br />
          Vivamus at tellus id lacus euismod malesuada a sit amet ipsum.
        </InfoBlock>
      </Center>
    </Section.Container>
  );
}

export default IndexInfo;
