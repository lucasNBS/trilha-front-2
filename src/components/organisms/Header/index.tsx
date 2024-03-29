import Logo from "src/components/atoms/Logo"
import SubscribeButton from "src/components/atoms/SubscribeButton"
import Navbar from "src/components/molecules/Navbar"
import { HeaderContainer, HeaderSubcontainer } from "./style"
import MenuButton from "src/components/atoms/MenuButton"
import goToForm from "src/utils/goToForm"

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderSubcontainer>
        <MenuButton />
        <Logo type="header" />
      </HeaderSubcontainer>
      <HeaderSubcontainer>
        <Navbar type="header" />
        <SubscribeButton onClick={goToForm} type="header" />
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
