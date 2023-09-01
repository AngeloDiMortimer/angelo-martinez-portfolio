import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
       <div className="p-6 flex items-center justify-center mt-24">
           <div className="flex flex-col items-center justify-center gap-12">
                <h1 className="text-center font-semibold text-4xl"><span className="text-lightPurple">Projects</span> I have worked on</h1>
                <div className="flex flex-col gap-6 p-2 items-center justify-center">
                    <ProjectItem />
                </div>
                    
            </div>
        </div>
    )
}

export default Projects;