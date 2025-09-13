import { Routes, Route } from "react-router-dom"
import Tabeltailwind from "../pages/tabeltailwind"
import Register from "../pages/Register"
import LandingPage from "../pages/LandingPage"
import Loading from "../pages/Loding"


const App = () => {
  return (
<Routes>
  
  <Route path="/" element={<LandingPage/>}/>
</Routes>

  )
}
export default App