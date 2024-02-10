import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SubscriptionProvider } from "src/contexts/SubscriptionContext";
import Home from "src/pages/home";
import Inscricao from "src/pages/inscricao";

export default function Router() {
  const { isSubscribed } = useContext(SubscriptionProvider)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isSubscribed && <Route path="/inscricao" element={<Inscricao />} />}
      <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
    </Routes>
  )
}