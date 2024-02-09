import {
  InfoCardContainer,
  InfoCardSubcontainer,
  InfoCardContainerText,
  Image
} from "./style"

type InfoCardProps = {
  data: {
    image: string,
    alt: string
    text: string
  }
}

export default function InfoCard({ data }: InfoCardProps) {
  return (
    <InfoCardContainer>
      <InfoCardSubcontainer>
        <Image src={data.image} alt={data.alt} />
      </InfoCardSubcontainer>
      <InfoCardContainerText>{data.text}</InfoCardContainerText>
    </InfoCardContainer>
  )
}
