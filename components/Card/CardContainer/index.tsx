import React from "react";
import styled from "styled-components";

export interface PropsType {
  className?: string;
  children?: React.ReactNode;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${({ theme }) => theme.sizes.widthDefault};
  position: relative;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

function CardContainer({ className, children = null }: PropsType) {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
}

export default CardContainer;
