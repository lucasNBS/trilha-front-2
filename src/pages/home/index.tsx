import AboutSection from "src/components/molecules/AboutSection"
import Banner from "src/components/molecules/Banner"
import InfoSection from "src/components/organisms/InfoSection"
import pubg from "public/images/pubg.jpg"
import overwatch from "public/images/overwatch.webp"
import chess from "public/images/chess.jpg"
import DetailsSection from "src/components/molecules/DetailsSection"
import CallSection from "src/components/organisms/CallSection"
import SubscriptionPopUp from "src/components/atoms/SubscriptionPopUp"

const detailsArray = [
  {
    image: pubg,
    alt: "Imagem de jogo de combate",
    title: "Batalha Real Extrema",
    text: `Uma competição acirrada onde jogadores de todo o mundo se enfrentarão em uma arena virtual, buscando a vitória em um confronto de sobrevivência. Quem será o último jogador em pé?`,
  },
  {
    image: overwatch,
    alt: "Imagem de jogo de equipe",
    title: "Lutas Táticas por Equipes",
    text: `Times estrategicamente formados competirão em partidas intensas, onde o trabalho em equipe e a comunicação são essenciais para alcançar a vitória. Coordene ataques, defesas e surpreenda seus adversários com jogadas impressionantes`,
  },
  {
    image: chess,
    alt: "Imagem de jogo de estratégia",
    title: "Desafio de Estratégia em Tempo Real",
    text: `Os mestres estrategistas se enfrentarão em jogos que exigem pensamento rápido e decisões astutas. Quem conseguirá antecipar e derrotar as táticas do adversário?`,
  }
]

export default function Home() {
  return (
    <>
      <SubscriptionPopUp />
      <Banner />
      <AboutSection />
      <InfoSection />
      {detailsArray.map((item, index) => {
        const isEven = (index + 1) % 2 === 0
        return <DetailsSection key={index} isEven={isEven} {...item} />
      })}
      <CallSection />
    </>
  )
}