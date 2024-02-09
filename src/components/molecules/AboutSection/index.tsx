import evento from "/images/image1.jpg"
import {
  AboutSectionContainer,
  AboutSectionSubcontainer,
  AboutSectionSubcontainerTitle,
  AboutSectionSubcontainerText,
  Image
} from "./style"

export default function AboutSection() {
  return (
    <AboutSectionContainer>
      <AboutSectionSubcontainer>
        <AboutSectionSubcontainerTitle>
          Sobre o Evento
        </AboutSectionSubcontainerTitle>
        <AboutSectionSubcontainerText>
          Bem-vindo ao Campeonato Eletrônico "Epic Battle Arena", um evento imperdível para todos os entusiastas de jogos eletrônicos! Prepare-se para mergulhar em um universo eletrizante, repleto de competições emocionantes, estratégias astutas e momentos épicos que ficarão gravados na história dos jogos
        </AboutSectionSubcontainerText>
      </AboutSectionSubcontainer>

      <AboutSectionSubcontainer>
        <Image src={evento} alt="Imagem ilustrativa do evento" />
      </AboutSectionSubcontainer>
    </AboutSectionContainer>
  )
}
