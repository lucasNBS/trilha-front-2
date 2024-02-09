import styled from "styled-components"
import { TypeType } from "src/components/atoms/Logo"

export const LogoContainer = styled.h1<{ type: TypeType }>`
  display: flex;
  flex-direction: ${({ type }) => type === "footer" && "column"};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  a {
    width: 60px;
    height: 60px;
  }
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const LogoText = styled.span<{ type: TypeType }>`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 1024px) {
    display: ${({ type }) => type === "header" && "none"};
  }
`