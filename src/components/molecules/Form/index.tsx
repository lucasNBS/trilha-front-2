import SubscribeButton from "src/components/atoms/SubscribeButton";
import { FormContainer, FormSubcontainer, FormGroup, Label, Input, Select, Option } from "./style";

const SelectOptionsArray = [
  {
    value: "overwatch",
    text: "Overwatch"
  },
  {
    value: "pubg",
    text: "PUBG"
  },
  {
    value: "fortnite",
    text: "Fortnite"
  },
  {
    value: "league-of-legends",
    text: "League of Legends"
  },
  {
    value: "valorant",
    text: "Valorant"
  },
  {
    value: "polytopia",
    text: "Polytopia"
  },
  {
    value: "world-of-warcraft",
    text: "World of Warcraft"
  },
]

export default function Form() {
  return (
    <FormContainer>
      <FormSubcontainer>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input required type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input required type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input required type="password" id="password" name="password" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="game-option">Opção de Jogo</Label>
          <Select required value="" id="game-option" name="game-option">
            <Option value="">-</Option>
            {SelectOptionsArray.map((option, index) => {
              return <Option key={index} value={option.value}>{option.text}</Option>
            })}
          </Select>
        </FormGroup>
      </FormSubcontainer>
      <SubscribeButton />
    </FormContainer>
  )
}
