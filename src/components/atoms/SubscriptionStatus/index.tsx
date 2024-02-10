import check from "public/images/check.svg"
import { Image, SubscriptionStatusContainer, SubscriptionStatusContainerTitle } from "./style"

export default function SubscriptionStatus() {
  return (
    <SubscriptionStatusContainer>
      <Image src={check} alt="Ícone de confirmação de inscrição" />
      <SubscriptionStatusContainerTitle>
        Inscrição Confirmada
      </SubscriptionStatusContainerTitle>
    </SubscriptionStatusContainer>
  )
}
