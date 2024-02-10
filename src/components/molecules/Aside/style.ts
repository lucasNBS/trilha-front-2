import styled from "styled-components"

export const AsideContainer = styled.aside<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 4rem 1rem;
  transition: 300ms ease-in-out;
  transform: ${({ isOpen }) => isOpen ? "translate(0)" : "translate(-100%)"};
`

export const Image = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
`