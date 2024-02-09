import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom";
import { TypeType } from "src/components/molecules/Navbar";

export const NavbarContainer = styled.nav<{ type: TypeType }>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ type }) => type === "header" && "none"};
  }
`

export const LinksList = styled.ul<{ type: TypeType }>`
  display: flex;
  flex-direction: ${({ type }) => type === "footer" && "column"};
  justify-content: center;
  align-items: ${({ type }) => type === "footer" ? "flex-start" : "center"};
  gap: ${({ type }) => type === "footer" ? "0.5rem" : "2rem"};
  list-style-type: none;

  .home-link {
    display: ${({ type }) => type === "footer" ? "unset" : "none"};
  }
`

export const ListItem = styled.li``

export const Link = styled(RouterLink)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-weight: lighter;
  color: #fff;
`