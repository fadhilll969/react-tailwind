import { Routes, Route } from "react-router-dom"
import Tabeltailwind from "../pages/tabeltailwind"
import Register from "../pages/Register"
import LandingPage from "../pages/LandingPage"
import Loading from "../pages/Loading"
import Tabeldata from "../pages/Tabeldata"
import TambahData from "../pages/Tambahdata"


const App = () => {
  return (
    <Routes>
   
     <Route path="/" element={<TambahData/>} />
     


    </Routes>

  )
}
export default App