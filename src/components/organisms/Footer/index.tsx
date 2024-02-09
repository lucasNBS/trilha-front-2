import Logo from "src/components/atoms/Logo"
import Navbar from "src/components/molecules/Navbar"
import SocialMedia from "src/components/molecules/SocialMedia"
import { FooterContainer, FooterSubcontainer, FooterSubcontainerTitle } from "./style"

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSubcontainer className="logo-container">
        <Logo type="footer" />
      </FooterSubcontainer>
      <FooterSubcontainer>
        <FooterSubcontainerTitle>
          Links Úteis
        </FooterSubcontainerTitle>
        <Navbar type="footer" />
      </FooterSubcontainer>
      <FooterSubcontainer>
        <FooterSubcontainerTitle>
          Redes Sociais
        </FooterSubcontainerTitle>
        <SocialMedia />
      </FooterSubcontainer>
    </FooterContainer>
  )
}
