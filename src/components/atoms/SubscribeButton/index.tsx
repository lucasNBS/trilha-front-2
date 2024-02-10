import { ButtonContainer } from "./style";

export type TypeType = "header"

type SubscribeButtonProps = {
  type?: TypeType
  onClick?: () => void
}

export default function SubscribeButton({ type, onClick }: SubscribeButtonProps) {
  return (
    <ButtonContainer onClick={onClick} type={type}>Inscrever-se</ButtonContainer>
  )
}
