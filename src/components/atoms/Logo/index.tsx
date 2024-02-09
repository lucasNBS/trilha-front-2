import logo from "public/images/logo.svg"
import { Image, LogoContainer, LogoText } from "./style"
import { Link } from "react-router-dom"

export type TypeType = "footer" | "header"

type LogoProps = {
  type: TypeType
}

export default function Logo({ type }: LogoProps) {
  return (
    <LogoContainer type={type}>
      <Link to="/">
        <Image src={logo} alt="Logo da Epic Battle Arena" />
      </Link>
      <LogoText type={type}>Epic Battle Arena</LogoText>
    </LogoContainer>
  )
}
