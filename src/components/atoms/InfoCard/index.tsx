import {
  InfoCardContainer,
  InfoCardSubcontainer,
  InfoCardContainerText,
  Image
} from "./style"

type InfoCardProps = {
  image: string,
  alt: string
  text: string
}

export default function InfoCard({ image, alt, text }: InfoCardProps) {
  return (
    <InfoCardContainer>
      <InfoCardSubcontainer>
        <Image src={image} alt={alt} />
      </InfoCardSubcontainer>
      <InfoCardContainerText>{text}</InfoCardContainerText>
    </InfoCardContainer>
  )
}
