import Portrait from "../../assets/images/portrait.jpg";

const WhoIAm = () => {
    return (
        <div className="p-4 flex items-center justify-center mt-32">
           <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
                    <div className="flex flex-col font-medium text-center md:text-left text-lg md:text-xl gap-4 md:w-1/2">
                        <h1 className="text-center font-semibold text-4xl">Who <span className="text-lightPurple"> I am </span></h1>
                        <p> 
                        I am  <span className="text-lightPurple">Angelo Martínez</span> from <span className="text-lightPurple">Venezuela</span>, 
                        I am a 24 years old self-taught fullstack web developer specialized mostly in frontend with modern technologies such as <span className="text-lightPurple">React, Node.js and Tailwind</span>.
                        I am hoping to earn more work experience to become a better developer.</p>
                        <p>
                            Apart from coding there are some other activities I really enjoy to do like drawing and working out!
                        </p>
                    </div>
                    <div className="w-52 md:w-1/6">
                        <img src={Portrait} alt="Portrait" 
                            className='shadow rounded-full max-w-full h-auto border-none'
                        />
                    </div>
                    
            </div>
        </div>
    )
}

export default WhoIAm;