import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const FindMe = () => {
    return (
        <div className="p-4 flex items-center justify-center mt-14">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-semibold">FIND ME ON</h1>
                <p className="text-lg">Feel free to <span className="text-lightPurple">contact me</span></p>
                <div className="flex gap-6">
                    <IconContext.Provider value={{className: 'react-icons', size:26}}>
                        <a href="https://github.com/AngeloDiMortimer">
                            <FaGithub />
                        </a>
                        <a href="www.linkedin.com/in/angelo-martinez-pessolano-1b0a84225">
                            <FaLinkedin />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>

        </div>
    )
};

export default FindMe;