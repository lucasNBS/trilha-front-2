import { ButtonContainer } from "./style";

export type TypeType = "header"

type SubscribeButtonProps = {
  type?: TypeType
}

export default function SubscribeButton({ type }: SubscribeButtonProps) {
  return (
    <ButtonContainer type={type}>Inscrever-se</ButtonContainer>
  )
}
