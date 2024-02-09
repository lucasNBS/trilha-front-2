import styled from "styled-components"
import close from "public/images/close.svg"
import Navbar from "../Navbar"
import { Dispatch, SetStateAction } from "react"

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

const AsideContainer = styled.aside<{ isOpen: boolean }>`
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

const Image = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
`