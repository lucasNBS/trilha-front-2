import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home";
import Inscricao from "src/pages/inscricao";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscricao" element={<Inscricao />} />
    </Routes>
  )
}