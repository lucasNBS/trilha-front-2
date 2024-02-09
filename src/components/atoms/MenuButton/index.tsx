import styled from "styled-components"
import menu from "public/images/menu.svg"
import { useState } from "react"

export default function MenuButton() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  return (
    <>
      <Background isShow={isAsideOpen} onClick={() => setIsAsideOpen(false)} />
      <Aside isOpen={isAsideOpen} />
      <MenuButtonContainer onClick={() => setIsAsideOpen(true)}>
        <Image src={menu} alt="Ícone de abrir o menu" />
      </MenuButtonContainer>
    </>
  )
}

const Background = styled.div<{ isShow: boolean }>`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  transform: ${({ isShow }) => !isShow && "scale(0)"};
`

const Aside = styled.aside<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 4rem 1rem;
  transition: 200ms ease-in-out;
  transform: ${({ isOpen }) => isOpen ? "translate(0)" : "translate(-100%)"};
`

const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`

const Image = styled.img`
  width: 40px;
  height: 40px;
`