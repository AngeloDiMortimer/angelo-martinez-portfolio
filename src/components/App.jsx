import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import FindMe from "./FindMe"
import Footer from "./Footer"

function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
      <FindMe />
      <Footer />
    </>
  )
}

export default App
