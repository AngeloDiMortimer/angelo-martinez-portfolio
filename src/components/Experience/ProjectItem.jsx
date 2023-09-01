import { IconContext } from "react-icons";
import { projectsData } from "../../data/ProjectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = () => {
    return (
        <>
            {projectsData.map((item) => (
                <div key={item.id} className="border-2 p-5 gap-8 md:gap-12 rounded-md lg:w-9/12 xl:w-6/12
                flex flex-col md:flex-row items-center text-center">
                    <div className="w-9/12">
                        <img src={item.image} alt="project-image" 
                            className='max-w-full h-auto border-none rounded-md'
                        />
                    </div>
                    <div className="flex flex-col w-3/12 items-center justify-center text-center">
                        <h1 className="font-bold text-2xl mb-8">{item.name}</h1>
                        <p className="w-52 md:w-auto">{item.description}</p>
                        <div className="flex gap-2 mt-5">
                            {item.tech.map((tech) => (
                                <div key={tech.id} className="font-bold text-xs lg:text-base bg-slate-50 text-darkPurple border p-2
                                w-24 md:w-auto">{tech}</div>
                            ))}
                        </div>
                        <div className="flex gap-4 font-semibold mt-8">
                            <IconContext.Provider value={{ size:26}}>
                                <a href={item.code}>
                                    <div className="react-icons flex gap-1 items-center">
                                        Code <FaGithub />
                                    </div>
                                </a>
                                <a href={item.live}>
                                    <div className="react-icons w-32 flex gap-1 items-center">
                                        Live Demo <FaExternalLinkAlt />
                                    </div>
                                </a>
                            </IconContext.Provider>
                        </div>
                    </div>
                    
                </div>
            ))}
        </>
    )
}

export default ProjectItem;