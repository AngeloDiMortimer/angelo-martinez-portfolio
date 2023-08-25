import { Link } from "react-router-dom";
import { FiHome, FiUser, FiList } from "react-icons/fi";
import { IconContext } from "react-icons";
import "../../styles/navbar.css"
import BurgMenu from "./BurgMenu";

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky top-0 mx-auto p-6 text-slate-50 z-40 bg-lightGray md:bg-darkPurple">
                <div className="flex items-center justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <div className="logo">
                            <h1 className="text-2xl md:text-3xl">Angelo Martínez</h1>
                        </div>
                    </Link>

                    <div className="flex items-center">
                            <div className="hidden md:flex space-x-6 mr-8 text-xl">
                                <IconContext.Provider value={{size:26}}>
                                        
                                    <Link to="/" className="nav-item flex gap-1 p-2 items-center" onClick={() => window.scrollTo(0, 0)}>
                                        <FiHome />
                                        Home
                                    </ Link>
                        
                                    
                                    <Link to="about" className="nav-item flex gap-1 p-2 items-center" onClick={() => window.scrollTo(0, 0)}>
                                        <FiUser />
                                        About
                                        </ Link>
                                    <Link to="experience" className="nav-item flex gap-1 p-2 items-center" onClick={() => window.scrollTo(0, 0)}>
                                        <FiList />
                                        Experience
                                    </ Link>
                                </IconContext.Provider>
                                    
                            </div>

                            {/* Mobile Menu*/}
                            <BurgMenu />

                        </div>
                    </div>



            </nav>
        </>
    )
}

export default Navbar;