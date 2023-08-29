import ItemsTools from "./ItemsTools";

const Tools = () => {
    return (
        <div className="p-4 flex items-center justify-center mt-12">
           <div className="flex flex-col items-center justify-center gap-12">
                <h1 className="text-center font-semibold text-4xl"><span className="text-lightPurple">Tools</span> I use</h1>
                <div className="grid grid-cols-2 gap-8">
                    <ItemsTools />
                </div>
                    
            </div>
        </div>
    )
}

export default Tools;