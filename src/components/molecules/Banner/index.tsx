import SubscribeButton from "src/components/atoms/SubscribeButton";
import {
  BannerContainer,
  BannerSubcontainer,
  BannerSubcontainerTitle,
  BannerSubcontainerText
} from "./style";
import goToForm from "src/utils/goToForm";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerSubcontainer>
        <BannerSubcontainerTitle>Epic Battle Arena</BannerSubcontainerTitle>
        <BannerSubcontainerText>
          Prepare-se para o maior campeonato de jogos eletrônicos do ano, com três dias de muita disputa e emoção
        </BannerSubcontainerText>
      </BannerSubcontainer>
      <SubscribeButton onClick={goToForm} />
    </BannerContainer>
  )
}
