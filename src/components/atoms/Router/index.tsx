import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscricao" element={null} />
    </Routes>
  )
}