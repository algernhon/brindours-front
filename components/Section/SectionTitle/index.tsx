import React, { Children } from "react";
import styled, { css } from "styled-components";

export interface PropsType {
  className?: string;
  children: React.ReactNode;
  image: string;
  position?: "center" | "left" | "right";
}

type FlexboxType = Required<Pick<PropsType, "position">>;

const Wrapper = styled.div`
  display: inline-block;
  margin-bottom: 60px;
`;

const Flexbox = styled.div<FlexboxType>`
  ${({ position }) => positions[position]};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  display: inline-block;
  margin-top: 25px;
`;

const IconCircle = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.pinkDark};
  border-radius: 40px;
  padding: 0.4em 0.6em;
  height: 80px;
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    user-select: none;
  }
`;

const positions = {
  center: css`
    align-items: center;
  `,
  left: css`
    align-items: flex-start;
  `,
  right: css`
    align-items: flex-end;
  `,
};

function SectionTitle({
  className,
  children,
  image,
  position = "center",
}: PropsType) {
  return (
    <Wrapper className={className}>
      <Flexbox position={position}>
        <IconCircle>
          <img src={image} />
        </IconCircle>
        <Title>{children}</Title>
      </Flexbox>
    </Wrapper>
  );
}

export default SectionTitle;
