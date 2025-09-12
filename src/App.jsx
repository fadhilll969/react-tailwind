import { Routes, Route } from "react-router-dom"
import Tabeltailwind from "../pages/tabeltailwind"
import Register from "../pages/Register"


const App = () => {
  return (
<Routes>
  
  <Route path="/" element={<Register/>}/>
</Routes>

  )
}
export default App