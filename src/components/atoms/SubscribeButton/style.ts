import styled from "styled-components";
import { TypeType } from ".";

export const ButtonContainer = styled.button<{ type?: TypeType }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ type }) => type === "header" ? "0.5rem 1rem" : "1rem 2rem"};
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`