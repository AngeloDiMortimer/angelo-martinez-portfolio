import ItemSkill from "./ItemSkill";

const Skillset = () => {
    return (
        <div className="p-4 flex items-center justify-center mt-24">
           <div className="flex flex-col items-center justify-center gap-12">
                <h1 className="text-center font-semibold text-4xl">My <span className="text-lightPurple">skillset</span></h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <ItemSkill />
                </div>
                    
            </div>
        </div>
    )
}

export default Skillset;