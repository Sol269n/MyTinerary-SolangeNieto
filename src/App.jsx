import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import Cities from "./views/Cities"
import LayoutMain from "./views/LayoutMain"
import Citie from "./views/Citie"


function App() {

  return (
    <BrowserRouter>
      <LayoutMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/citie/:id" element={<Citie />} />
      </Routes>
      </LayoutMain>
    </BrowserRouter>
  )
}

export default App
