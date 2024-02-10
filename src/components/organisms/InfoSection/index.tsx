import battle from "/images/battle.svg"
import group from "/images/group.svg"
import strategy from "/images/strategy.svg"
import InfoCard from "src/components/atoms/InfoCard"
import { InfoSectionContainer, InfoSectionContainerTitle, InfoSectionSubcontainer } from "./style"

const infoCardsArray = [
  {
    image: battle,
    alt: "Ícone de disputa",
    text: "Combate"
  },
  {
    image: group,
    alt: "Ícone de equipe",
    text: "Equipes"
  },
  {
    image: strategy,
    alt: "Ícone de estratégia",
    text: "Estratégia"
  },
]

export default function InfoSection() {
  return (
    <InfoSectionContainer>
      <InfoSectionContainerTitle>Prepare-se Para os Jogos</InfoSectionContainerTitle>
      <InfoSectionSubcontainer>
        {infoCardsArray.map((card, index) => {
          return <InfoCard key={index} {...card} />
        })}
      </InfoSectionSubcontainer>
    </InfoSectionContainer>
  )
}
