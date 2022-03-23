import React from "react";
import styled, { css, keyframes } from "styled-components";
import { TitleH3 } from "../Typography";

interface Props {
  glow?: boolean;
}
const Button: React.FC<Props> = ({ children, glow }) => {
  return (
    <StyledButton glow={glow}>
      <TitleH3>{children}</TitleH3>
    </StyledButton>
  );
};

const ring = keyframes`
    0% {
    width: 60px;
    height: 60px;
    opacity: 1;
    }
    100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
`;

const StyledButton = styled.button<Props>`
  min-width: 300px;
  min-height: 60px;
  font-size: 0.75rem;
  font-family: "AloneInSpace";
  color: var(--color-white);
  background: var(--color-turqoise);
  /* background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(79, 209, 197, 1) 100%
  ); */
  border: none;
  border-radius: 10rem;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  position: relative;
  /* Problem with AloneInSpace font, so needs to manually adjust the padding to center it */
  padding: 0.3rem 0 0 0.6rem;
  &::before {
    content: "";
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #00ffcb;
    box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.5s ease-in-out 0s;
  }
  &:hover,
  &:focus {
    transform: translateY(-6px);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
  }

  ${(props: Props) => {
    if (props.glow === false) {
      return `
            &::after{
                display: none
            }
          `;
    }
  }}

  &:hover::after,
  &:focus::after {
    animation: none;
    display: none;
  }
`;

export default Button;
