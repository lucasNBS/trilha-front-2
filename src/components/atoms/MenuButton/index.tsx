import styled from "styled-components"
import menu from "public/images/menu.svg"
import { useState } from "react"
import Aside from "src/components/molecules/Aside"

export default function MenuButton() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  return (
    <>
      <Background isShow={isAsideOpen} onClick={() => setIsAsideOpen(false)} />
      <Aside isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
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