import { Routes, Route } from "react-router-dom"
import Register from "../pages/Register"
import LandingPage from "../pages/LandingPage"
import Loading from "../pages/Loading"
import Tabeldata from "../pages/Tabeldata"
import TambahData from "../pages/Tambahdata"
import EditData from "../pages/Editdata"
import Sidnav from "../pages/component/Sidnav"
import Dashboard from "../pages/component/dashboard"


const App = () => {
  return (
    <Routes>

      <Route path="/ff" element={<TambahData />} />
      <Route path="/tabeldata" element={<Tabeldata />} />
      <Route path="/mbud" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sidnav" element={<Sidnav />} />

    </Routes>

  )
}
export default App