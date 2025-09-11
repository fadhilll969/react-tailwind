import { Routes, Route } from "react-router-dom"
import Tabeltailwind from "../pages/tabeltailwind"

const App = () => {
  return (
<Routes>
  <Route path="/" element={<Tabeltailwind/>}/>
</Routes>

  )
}
export default App