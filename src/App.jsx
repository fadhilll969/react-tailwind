import { Routes, Route } from "react-router-dom"
import Register from "../pages/Register"
import LandingPage from "../pages/LandingPage"
import Loading from "../pages/Loading"
import Tabeldata from "../pages/Tabeldata"
import TambahData from "../pages/Tambahdata"
import EditData from "../pages/Editdata"
import Sidnav from "../pages/component/Sidnav"
import Dashboard from "../pages/component/dashboard"
import Profile from "../pages/component/Profile"
import Editdataytta from "../pages/component/EditDataytta"
import TabelYtta from "../pages/component/TabelYtta"


const App = () => {
  return (
    <Routes>

      <Route path="/ff" element={<TambahData />} />
      <Route path="/tabeldata" element={<Tabeldata />} />
      <Route path="/mbud" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sidnav" element={<Sidnav />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/test" element={<Editdataytta />} />
      <Route path="/ntol" element={<TabelYtta />} />

    </Routes>

  )
}
export default App