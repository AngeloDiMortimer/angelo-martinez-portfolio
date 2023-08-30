import { IconContext } from "react-icons";
import { items } from "../../data/SkillData";

const ItemSkill = () => {
    return (
        <>
        {items.map((item) => (
            <div key={item.id} className=" border p-5 border-lightPurple
            flex flex-col items-center text-center md:w-36">
                <IconContext.Provider value={{className: 'mb-2' , size:75}}>
                    {item.component}
                </IconContext.Provider>
                <h1 className="font-semibold">{item.name}</h1>
                
            </div>
        ))}
        </>
    )
}

export default ItemSkill;