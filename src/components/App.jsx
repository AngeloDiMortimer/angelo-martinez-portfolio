import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

function App() {
  

  return (
    <>
      <Navbar />
      <h1 className="font-semibold text-3xl">Placeholder <span className="text-red-500">text</span></h1>
      <Outlet />
    </>
  )
}

export default App
