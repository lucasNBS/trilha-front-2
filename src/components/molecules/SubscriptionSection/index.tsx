import event from "public/images/event.webp"
import { useContext } from "react"
import { SubscriptionProvider } from "src/contexts/SubscriptionContext"
import {
  SubscriptionSectionContainer,
  SubscriptionSectionContainerTitle,
  SubscriptionSectionContainerText,
  Image
} from "./style"

export default function SubscriptionSection() {
  const { data } = useContext(SubscriptionProvider)

  return (
    <SubscriptionSectionContainer>
      <SubscriptionSectionContainerTitle>
        Olá, {data.name}
      </SubscriptionSectionContainerTitle>
      <SubscriptionSectionContainerText>
        Gostaríamos de anunciar que sua inscrição foi confirmada! Os demais jogadores de
        {" "}{data.gameOption} estão te aguardando.
      </SubscriptionSectionContainerText>
      <Image src={event} alt="Imagem de um campeonato de jogos eletrônicos" />
    </SubscriptionSectionContainer>
  )
}
