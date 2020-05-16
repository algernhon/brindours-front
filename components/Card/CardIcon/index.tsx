import React from "react";
import styled from "styled-components";

export interface PropsType {
  className?: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  bottom: 0;
  margin: 10px 30px;
  position: absolute;
  right: 0;
  width: 20px;
`;

function CardIcon({ className, children = null }: PropsType) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default CardIcon;
