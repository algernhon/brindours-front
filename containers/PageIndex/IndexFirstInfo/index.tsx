import React from "react";
import styled from "styled-components";

import Card from "components/Card";

function IndexFirstInfo() {
  return (
    <Card.Container>
      <Card.Body image="/svg/lgirl.svg" position="center">
        <h2>10 places</h2>
        Un nombre de place adequate à un accueil humain
        <Card.Icon>
          <img src="/svg/long-arrow-right-regular.svg" alt="En savoir plus" />
        </Card.Icon>
      </Card.Body>
      <Card.Body image="/svg/house.svg" position="center">
        <h2>Crecheville</h2>
        Dans un village en pleine croissance
        <Card.Icon>
          <img src="/svg/long-arrow-right-regular.svg" alt="En savoir plus" />
        </Card.Icon>
      </Card.Body>
      <Card.Body image="/svg/ecology-and-environment.svg" position="center">
        <h2>Eco-responsable</h2>
        Les bonnes valeurs pour les adultes de demain
        <Card.Icon>
          <img src="/svg/long-arrow-right-regular.svg" alt="En savoir plus" />
        </Card.Icon>
      </Card.Body>
    </Card.Container>
  );
}

export default IndexFirstInfo;
