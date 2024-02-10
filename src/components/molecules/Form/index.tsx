import SubscribeButton from "src/components/atoms/SubscribeButton";
import { FormContainer, FormSubcontainer, FormGroup, Label, Input, Select, Option } from "./style";

export default function Form() {
  return (
    <FormContainer>
      <FormSubcontainer>
        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>E-mail</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <Input type="password" />
        </FormGroup>
        <FormGroup>
          <Label>Opção de Jogo</Label>
          <Select value="">
            <Option value="">-</Option>
          </Select>
        </FormGroup>
      </FormSubcontainer>
      <SubscribeButton />
    </FormContainer>
  )
}
