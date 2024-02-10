import check from "public/images/check.svg"
import close from "public/images/close.svg"
import { Image, SubscriptionPopUpContainer, SubscriptionPopUpContainerText } from "./style"
import { useContext } from "react"
import { SubscriptionProvider } from "src/contexts/SubscriptionContext"

export default function SubscriptionPopUp() {
  const { isSubscribed, isVisible } = useContext(SubscriptionProvider)

  return (
    <SubscriptionPopUpContainer isSubscribed={isSubscribed} isVisible={isVisible}>
      <Image src={isSubscribed ? close : check} alt="Ícone do pop up de inscrição" />
      <SubscriptionPopUpContainerText>
        {isSubscribed ? "Você já está inscrito" : "Inscrição feita"}
      </SubscriptionPopUpContainerText>
    </SubscriptionPopUpContainer>
  )
}
