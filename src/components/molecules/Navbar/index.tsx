import { useContext } from "react";
import { NavbarContainer, LinksList, ListItem, Link } from "./style";
import { SubscriptionProvider } from "src/contexts/SubscriptionContext";

export type TypeType = "footer" | "header" | "aside"

type NavbarProps = {
  type: TypeType
}

export default function Navbar({ type }: NavbarProps) {
  const { isSubscribed } = useContext(SubscriptionProvider)

  return (
    <NavbarContainer type={type}>
      <LinksList type={type}>
        <ListItem className="home-link">
          <Link to="/">Home</Link>
        </ListItem>
        {isSubscribed && <ListItem>
          <Link to="/inscricao">Inscrição</Link>
        </ListItem>}
        <ListItem>
          <Link to="/#">Contato</Link>
        </ListItem>
        <ListItem>
          <Link to="/#">Sobre</Link>
        </ListItem>
        <ListItem>
          <Link to="/#">Patrocinadores</Link>
        </ListItem>
        <ListItem>
          <Link to="/#">FAQ</Link>
        </ListItem>
      </LinksList>
    </NavbarContainer>
  )
}
