import styled from "styled-components";
import Section from "components/Section";

const Fond = styled(Section.Container)`
  position: relative;
  padding-top: 60px;
`;

const Center = styled(Section.Center)`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 180px;
  z-index: 1;
`;

const Flexbox = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;

  & :nth-child(1) {
    text-align: center;
    display: none;
    @media (min-width: 960px) {
      display: inline-block;
    }
  }

  & :nth-child(2) {
    padding: 60px 45px 0 45px;
    @media (min-width: 960px) {
      padding: 0;
    }
  }

  & > p {
    margin-top: -30px;
  }
`;

const ImageSvg = styled.img`
  width: 30%;
`;

const Background = styled.div`
  z-index: 0;
  top: 0;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 100%;

  position: absolute;
  width: 100%;
  display: grid;
  transform: skewY(-10deg);

  & > span :nth-child(1) {
    grid-column: span 4;
    grid-row: 1;
  }

  & > span :nth-child(2) {
    grid-column: 6;
    grid-row: 2;
    background: linear-gradient(
      210deg,
      rgba(224, 238, 226, 1) 0%,
      rgba(242, 251, 244, 1) 80%
    );
  }

  & > span :nth-child(3) {
    grid-column: span 2;
    grid-row: 1;
    background: linear-gradient(
      210deg,
      rgba(211, 228, 214, 1) 0%,
      rgba(242, 251, 244, 1) 80%
    );
  }

  & > span :nth-child(4) {
    grid-column: 1;
    grid-row: 4;
    background: linear-gradient(
      40deg,
      rgba(224, 238, 226, 1) 0%,
      rgba(242, 251, 244, 1) 80%
    );
  }

  & > span :nth-child(5) {
    grid-column: span 3;
    grid-row: 5;
    background: linear-gradient(
      40deg,
      rgba(211, 228, 214, 1) 0%,
      rgba(242, 251, 244, 1) 80%
    );
  }
`;

function IndexMainInfo() {
  return (
    <Fond>
      <Background>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Background>
      <Center>
        <Flexbox>
          <ImageSvg src="svg/window.svg" />
        </Flexbox>
        <Flexbox>
          <Section.Title image="svg/handshake-duotone.svg" position="left">
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
            elit. Vivamus iaculis elementum hendrerit.
            <br />
            <br />
            Suspendisse sed nisl sed nulla vehicula euismod. Sed porta nulla id
            massa posuere pharetra. Suspendisse laoreet, purus id volutpat
            placerat, ipsum velit mattis mi, venenatis ornare orci velit eget
            ex. Maecenas id nulla mollis, tristique nibh sed, egestas ex.
            Praesent nec nunc tincidunt, elementum ligula vitae, vehicula felis.
            Phasellus at pharetra turpis. Nulla pharetra maximus diam, a rutrum
            lectus ultrices ut.
          </p>
        </Flexbox>
      </Center>
    </Fond>
  );
}

export default IndexMainInfo;
