import React from "react";
import styled, { css } from "styled-components";

export interface PropsType {
  className?: string;
  children?: React.ReactNode;
  image: string;
  position?: "center" | "left" | "right";
  height?: string;
  shadow?: "light" | "dark";
}

// We make a new Type with some propstype types and me make them requiered
// otherwise positions[undefined] trigger an error for example
type WrapperType = Required<Pick<PropsType, "position" | "height" | "shadow">>;
type ContentType = Required<Pick<PropsType, "position">>;

const Wrapper = styled.div<PropsType & WrapperType>`
  ${({ position }) => positions[position]}

  background-color: white;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ shadow }) =>
    shadow === "light"
      ? ({ theme }) => theme.shadow.default
      : ({ theme }) => theme.shadow.darker};
  height: calc(${({ height }) => height} - (${({ height }) => height} / 5));
  margin: 25px 40px;
  overflow: hidden;

  display: flex;
  align-items: center;

  & > h1,
  h2,
  h3 {
    margin-top: 0;
  }

  @media (min-width: 960px) {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    height: ${({ height }) => height};
    margin: 0 20px;
    transition: all 0.4s ease 0s;

    & :hover {
      box-shadow: ${({ theme }) => theme.shadow.hover};
      filter: grayscale(0.5);
      transform: translateY(-5px);
    }
  }
`;

const Content = styled.div<ContentType>`
  ${({ position }) => contents[position]}
`;

// These are the different positions of the background image in the card
const positions = {
  center: css`
    background-position: -40px 45%;
    background-size: auto 70%;
    text-align: center;
    @media (min-width: 960px) {
      background-position: 45% 105%;
      background-size: 40%;
    }
  `,
  left: css`
    background-position: -22px 50%;
    background-size: 20% auto;
    text-align: left;
    @media (min-width: 960px) {
      background-position: -10% 50%;
      background-size: 25%;
    }
  `,
  right: css`
    background-position: 103% 50%;
    background-size: 20% auto;
    text-align: right;
    @media (min-width: 960px) {
      background-position: 103% 50%;
      background-size: 25%;
    }
  `,
};

// Inner padding depends of the background position, no overlap allowed!
const contents = {
  center: css`
    padding: 10px 10px 10px 30%;
    @media (min-width: 960px) {
      padding: 30px 20px;
    }
  `,
  left: css`
    padding: 10px 10px 10px 23%;
    @media (min-width: 960px) {
      padding: 30px 20px 20px 30%;
    }
  `,
  right: css`
    padding: 10px 23% 10px 10px;
    @media (min-width: 960px) {
      padding: 30px 30% 20px 20px;
    }
  `,
};

function CardBody({
  className,
  children = null,
  image,
  position = "center",
  height = "300px",
  shadow = "light",
}: PropsType) {
  return (
    <Wrapper
      className={className}
      image={image}
      position={position}
      height={height}
      shadow={shadow}
    >
      <Content position={position}>{children}</Content>
    </Wrapper>
  );
}

export default CardBody;
