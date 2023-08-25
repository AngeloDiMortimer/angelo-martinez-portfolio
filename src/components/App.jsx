import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import FindMe from "./FindMe"

function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
      <FindMe />
    </>
  )
}

export default App
