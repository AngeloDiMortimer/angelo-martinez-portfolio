import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiList } from "react-icons/fi";
import { IconContext } from "react-icons";
import "../../styles/burgmenu.css";

const BurgMenu = () => {
    const [toggle, setToggle] = useState(false);
    const [isHidden, setIsHidden] = useState("");

    const handleOpen = () => {
        setToggle(!toggle);
        if (!isHidden) {
            setIsHidden("open");
            } else setIsHidden("");
    }

    return (
        <>
            <button id="menu-btn" className={`block hamburger md:hidden focus:outline-none ${isHidden}`} 
            onClick={handleOpen}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>

            { toggle &&
                <div className="md:hidden">
                    <div id="menu" className={`absolute z-40 font-semibold bg-lightGray flex flex-col items-center w-full self-end py-8 mt-10 space-y-6 sm:w-auto sm:self-center right-0 drop-shadow-md`}>
                        
                        <IconContext.Provider value={{size:26}}>
                            <div onClick={handleOpen}>
                                <Link to="/" className="nav-item flex gap-1 p-2 items-center" onClick={() => window.scrollTo(0, 0)}>
                                    <FiHome />
                                    Home
                                </ Link>
                            </div>

                            <div onClick={handleOpen}>
                                <Link to="about" className="nav-item flex gap-1 p-2 items-center" onClick={() => window.scrollTo(0, 0)}>
                                    <FiUser />
                                    About
                                </ Link>        
                            </div>

                            <div onClick={handleOpen}>
                                <Link to="experience" className="nav-item flex gap-1 p-2 items-center" onClick={() => window.scrollTo(0, 0)}>
                                    <FiList />
                                    Experience
                                </ Link>    
                            </div>            
                                     
                        </IconContext.Provider>
                    </div>
                </div> 
            }
        </> 
    )
}

export default BurgMenu;