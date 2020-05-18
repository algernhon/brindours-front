import React from "react";
import styled from "styled-components";

export interface PropsType {
  className?: string;
  children: React.ReactNode;
  primary?: boolean;
}

type StyledType = Required<Pick<PropsType, "primary">>;

const StyledButton = styled.button<StyledType>`
  background-color: ${({ primary }) =>
    primary ? ({ theme }) => theme.colors.pinkDark : "white"};
  border-radius: 5px;
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${({ primary }) =>
    primary ? "white" : ({ theme }) => theme.colors.pinkDark};
  cursor: pointer;
  display: block;
  font-size: 12px;
  font-weight: 600;
  padding: 11px 18px;
  text-transform: uppercase;
  transition: all 0.4s ease 0s;

  & :hover {
    opacity: 0.7;
  }
`;

function Button({ className, children, primary = false }: PropsType) {
  return (
    <StyledButton className={className} primary={primary}>
      {children}
    </StyledButton>
  );
}

export default Button;
