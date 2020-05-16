import React from "react";
import styled from "styled-components";

interface PropsType {
  className?: string;
  children: React.ReactNode;
}

const Center = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.sizes.widthDefault};
`;

function SectionCenter({ className, children }: PropsType) {
  return <Center className={className}>{children}</Center>;
}

export default SectionCenter;
