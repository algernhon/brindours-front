import { useState, useEffect } from "react";
import Link from "next/link";
import LayoutDefault from "containers/Layouts/Default";
import PageIndex from "containers/PageIndex";
import Section from "components/Section";

import styled from "styled-components";

const Fond = styled(Section.Container)`
  background-color: ${({ theme }) => theme.colors.greenLight};
`;

function Index() {
  return (
    <LayoutDefault>
      <PageIndex.Presentation />
      <PageIndex.Header />
      <Section.Container>
        <PageIndex.FirstInfo />
      </Section.Container>

      <Fond>
        <Section.Center>
          <Section.Title image="svg/handshake-duotone.svg">
            Une crèche moderne
          </Section.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
            sem et sem condimentum, eu pellentesque purus volutpat. Sed sit amet
            nunc egestas, ultricies nulla sit amet, scelerisque ante. Vivamus at
            tellus id lacus euismod malesuada a sit amet ipsum. In semper
            molestie erat sit amet pretium. Proin posuere magna sapien, sit amet
            blandit urna mattis a. Sed ut tortor porttitor, maximus ex nec,
            vulputate lacus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus iaculis elementum hendrerit. Praesent pellentesque,
            justo vitae interdum scelerisque, diam justo imperdiet nisi, eget
            dictum dolor nunc vitae felis. Curabitur cursus porta risus eu
            tempus. Phasellus aliquam varius erat, nec feugiat metus rhoncus et.
            Morbi eros libero, lacinia sed eleifend vitae, sodales vel urna.
            Vivamus dapibus pellentesque justo, ut eleifend nunc elementum sed.
            <br />
            <br />
            Suspendisse sed nisl sed nulla vehicula euismod. Sed porta nulla id
            massa posuere pharetra. Suspendisse laoreet, purus id volutpat
            placerat, ipsum velit mattis mi, venenatis ornare orci velit eget
            ex. Maecenas id nulla mollis, tristique nibh sed, egestas ex.
            Praesent nec nunc tincidunt, elementum ligula vitae, vehicula felis.
            Phasellus at pharetra turpis. Nulla pharetra maximus diam, a rutrum
            lectus ultrices ut. Morbi sed elementum velit. Proin metus sapien,
            aliquet ac pellentesque ac, sollicitudin quis tellus. Ut scelerisque
            nunc porttitor, rutrum dolor at, tempor ipsum.
            <br />
            <br />
            Nunc vehicula et enim vel sodales. Sed justo justo, fringilla nec
            nibh ut, aliquet interdum enim. Nunc rutrum, diam non posuere
            ullamcorper, nibh ligula lacinia nulla, vitae dignissim lectus nulla
            quis augue. Nulla et arcu eu velit finibus venenatis eu nec elit. In
            accumsan ut sem vitae blandit. Morbi vel nibh vestibulum nibh
            egestas facilisis a ac elit. Suspendisse lacinia facilisis augue nec
            pretium. Etiam tortor ipsum, sollicitudin vel luctus aliquet,
            sollicitudin vitae ante.
            <br />
            <br />
            Donec tincidunt venenatis ullamcorper. Fusce in commodo tortor.
            Suspendisse consectetur arcu quis commodo sagittis. Integer et
            sapien odio. Donec tristique vestibulum nisi ut venenatis. Donec at
            neque nec nunc lacinia sollicitudin. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut malesuada, est vitae tempor
            imperdiet, lectus augue pharetra nulla, nec posuere risus mauris a
            nunc. Cras quis aliquam sem.
            <br />
            <br />
            In enim tortor, tempor eget dui eget, mollis vestibulum magna. Nulla
            odio dui, fringilla in rutrum semper, consectetur et metus. Cras
            ornare pharetra euismod. Vestibulum efficitur non nulla a elementum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus vitae rutrum quam. Etiam at nisi
            et nisl hendrerit semper. Nullam sodales magna lectus, sed aliquam
            nulla lacinia ac. Ut a lacinia risus. Etiam consequat tellus vitae
            est molestie eleifend. Curabitur sed lacus ac orci condimentum
            rutrum ac vitae ex. Fusce nec faucibus nulla. Praesent vulputate
            pulvinar scelerisque.
          </p>
        </Section.Center>
      </Fond>
      <PageIndex.Partners />
      <PageIndex.Contact />
    </LayoutDefault>
  );
}

export default Index;
