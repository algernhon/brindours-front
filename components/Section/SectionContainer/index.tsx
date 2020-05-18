import React from "react";
import styled from "styled-components";

interface PropsType {
  className?: string;
  children: React.ReactNode;
}

const Container = styled.section`
  margin-bottom: ${({ theme }) => theme.sizes.separator};
  line-height: 24px;
`;

function SectionContainer({ children, className }: PropsType) {
  return <Container className={className}>{children}</Container>;
}

export default SectionContainer;
