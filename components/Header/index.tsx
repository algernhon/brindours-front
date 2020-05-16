import React from "react";
import styled from "styled-components";

export interface PropsType {
  className?: string;
  children?: React.ReactNode;
  title: string;
}

const Section = styled.section`
  margin: 0 auto ${({ theme }) => theme.sizes.separator} auto;
  max-width: 800px;
  padding: 0 40px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

// This is the default header of the website
function Header({ className, children = null, title }: PropsType) {
  return (
    <Section className={className}>
      <Title>{title}</Title>
      {children ? <p>{children}</p> : null}
    </Section>
  );
}

export default Header;
