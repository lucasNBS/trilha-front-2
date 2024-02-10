import { NavbarContainer, LinksList, ListItem, Link } from "./style";

export type TypeType = "footer" | "header" | "aside"

type NavbarProps = {
  type: TypeType
}

export default function Navbar({ type }: NavbarProps) {
  return (
    <NavbarContainer type={type}>
      <LinksList type={type}>
        <ListItem className="home-link">
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/inscricao">Inscrição</Link>
        </ListItem>
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
