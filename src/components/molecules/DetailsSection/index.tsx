import {
  DetailsSectionContainer,
  DetailsSectionSubcontainer,
  DetailsSectionSubcontainerTitle,
  DetailsSectionSubcontainerText,
  Image
} from "./style"

type DetailsSectionProps = {
  image: string
  alt: string
  title: string
  text: string
  isEven?: boolean
}

export default function DetailsSection({ image, alt, title, text, isEven }: DetailsSectionProps) {
  return (
    <DetailsSectionContainer isEven={isEven}>
      <Image src={image} alt={alt} />
      <DetailsSectionSubcontainer>
        <DetailsSectionSubcontainerTitle>{title}</DetailsSectionSubcontainerTitle>
        <DetailsSectionSubcontainerText>{text}</DetailsSectionSubcontainerText>
      </DetailsSectionSubcontainer>
    </DetailsSectionContainer>
  )
}
