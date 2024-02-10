import SubscriptionStatus from "src/components/atoms/SubscriptionStatus";
import SubscriptionSection from "src/components/molecules/SubscriptionSection";
import goToScrollPosition from "src/utils/goToScrollPosition";

export default function Inscricao() {
  goToScrollPosition(0)

  return (
    <>
      <SubscriptionStatus />
      <SubscriptionSection />
    </>
  )
}