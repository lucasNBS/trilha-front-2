import SubscribeButton from "src/components/atoms/SubscribeButton";
import {
  FormContainer,
  FormSubcontainer,
  FormGroup,
  Label,
  Input,
  Select,
  Option,
  ErrorMessage,
} from "./style";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SubscriptionProvider } from "src/contexts/SubscriptionContext";
import { useNavigate } from "react-router-dom";

const SelectOptionsArray = [
  {
    value: "",
    text: "-"
  },
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

const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Preencha o campo")
    .min(3, "Nome muito curto")
    .max(50, "Nome muito longo"),
  email: Yup.string()
    .trim()
    .email("Fomato de E-mail inválido")
    .required("Preencha o campo")
    .min(3, "E-mail muito curto")
    .max(50, "E-mail muito longo"),
  password: Yup.string()
    .trim()
    .required("Preencha o campo")
    .min(3, "Senha muito curta")
    .max(25, "Senha muito longa"),
  gameOption: Yup.string().required("Escolha uma opção")
})

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  })
  const {
    isSubscribed,
    setIsSubscribed,
    setIsVisible,
    setData
  } = useContext(SubscriptionProvider)
  const navigate = useNavigate()

  function submit() {
    setIsVisible(true)

    if (!isSubscribed) {
      const { name, gameOption } = getValues()

      setData({ name, gameOption })
      setTimeout(() => {
        setIsSubscribed(true)
        navigate("/inscricao")
      }, 5000)
      reset()
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <FormSubcontainer>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" {...register("name")} />
          {errors.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" {...register("email")} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" {...register("password")} />
          {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="game-option">Opção de Jogo</Label>
          <Select {...register("gameOption")}>
            {SelectOptionsArray.map((option, index) => {
              return <Option key={index} value={option.value}>{option.text}</Option>
            })}
          </Select>
          {errors.gameOption?.message && <ErrorMessage>{errors.gameOption.message}</ErrorMessage>}
        </FormGroup>
      </FormSubcontainer>
      <SubscribeButton />
    </FormContainer>
  )
}
