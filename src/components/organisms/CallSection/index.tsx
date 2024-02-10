import Form from "src/components/molecules/Form"
import {
  CallSectionContainer,
  CallSectionContainerTitle,
  CallSectionSubcontainer,
  CallSectionSubcontainerTitle,
  CallSectionSubcontainerText
} from "./style"

export default function CallSection() {
  return (
    <CallSectionContainer>
      <CallSectionContainerTitle>Inscreva-se</CallSectionContainerTitle>
      <CallSectionSubcontainer>
        <Form />
        <CallSectionSubcontainer column gap="1rem" maxWidth={500}>
          <CallSectionSubcontainerTitle>15/04 a 17/04</CallSectionSubcontainerTitle>
          <CallSectionSubcontainerText>
            Prepare-se para vivenciar três dias intensos de competição, entretenimento e emoção no Campeonato Eletrônico "Epic Battle Arena". Junte-se a nós e faça parte deste evento que promete marcar o cenário dos jogos eletrônicos!
          </CallSectionSubcontainerText>
        </CallSectionSubcontainer>
      </CallSectionSubcontainer>
    </CallSectionContainer>
  )
}
