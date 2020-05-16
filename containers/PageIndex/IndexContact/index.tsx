import React from "react";
import styled from "styled-components";

import Card from "components/Card";

interface StyledType {
  bgImage?: string;
}

const Wrapper = styled.section`
  overflow: hidden;
  padding-bottom: 45px;
  position: relative;

  & :before {
    background-color: #f2fbf4;
    content: "";
    height: 6000px;
    left: 0;
    position: absolute;
    right: 0;
    top: 130px;
    z-index: -1;
  }
`;

const Container = styled(Card.Container)`
  margin-bottom: 0px;
`;

function IndexContact() {
  return (
    <Wrapper>
      <Container>
        <Card.Body
          image="svg/paw-duotone.svg"
          position="left"
          height="200px"
          shadow="dark"
        >
          <h2>Rejoignez-nous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
            sem et sem condimentum.
          </p>
        </Card.Body>
        <Card.Body
          image="svg/mail-bulk-duotone.svg"
          position="left"
          height="200px"
          shadow="dark"
        >
          <h2>Contactez-nous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
            sem et sem condimentum.
          </p>
        </Card.Body>
      </Container>
    </Wrapper>
  );
}

export default IndexContact;
