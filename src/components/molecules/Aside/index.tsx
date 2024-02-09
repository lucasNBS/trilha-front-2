import close from "/images/close.svg"
import Navbar from "src/components/molecules/Navbar"
import { Dispatch, SetStateAction } from "react"
import { AsideContainer, Image } from "./style"

type AsideProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Aside({ isOpen, setIsOpen }: AsideProps) {
  return (
    <AsideContainer isOpen={isOpen}>
      <Image onClick={() => setIsOpen(false)} src={close} alt="Ícone de fechar menu" />
      <Navbar type="aside" />
    </AsideContainer>
  )
}
