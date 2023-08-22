import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

function App() {
  

  return (
    <>
      <Navbar />
      <h1 className="font-semibold text-3xl text-red-600">Placeholder text</h1>
      <Outlet />
    </>
  )
}

export default App
