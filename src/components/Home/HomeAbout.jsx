import Desk from "../../assets/images/desk.svg"

const HomeAbout = () => {
    return (
        <div className="p-4 flex items-center justify-center mt-24">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-14">
                <div className="flex flex-col text-4xl items-center md:items-start text-center gap-4 font-semibold">
                    <h1>{"If I don't know it, "}<span className="text-lightPurple">I figure it out.</span> </h1>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="flex flex-col font-medium text-center md:text-left text-lg md:text-xl gap-4 md:w-1/2">
                        <p><span className="text-lightPurple">Committed to the idea of life-long learning</span>, 
                        I am passionate about web development and the endless possibilities it offers. 
                        I am always seeking new challenges and opportunities to grow and improve as a developer.</p>
                        <p>Wheter working on a personal project or collaborating with a team, I am
                            committed to delivering <span className="text-lightPurple">the best work I can produce</span> that meets the needs of users and businesses.

                        </p>
                    </div>
                    <div className="md:w-96">
                        <img src={Desk} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;