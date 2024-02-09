import menu from "/images/menu.svg"
import { useState } from "react"
import Aside from "src/components/molecules/Aside"
import { Background, Image, MenuButtonContainer } from "./style"

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
