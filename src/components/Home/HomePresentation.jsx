import Typewriter from 'typewriter-effect';
import Portrait from "../../assets/images/portrait.jpg"
import "../../styles/homepresentation.css"

const HomePresentation = () => {
    return (
        <div className='p-4 flex items-center justify-center mt-32'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-32'>
                <div className='flex flex-col text-4xl items-center md:items-start text-center md:text-left gap-4 font-semibold w-1/2'>
                    <h1>Hi There! <span className='waving-hand'>&#128075;</span></h1>
                    <h1>{"I'm"} <span className='text-lightPurple'>Angelo Martínez</span></h1>

                    <div className='text-lightPurple text-xl md:text-5xl font-semibold w-32'>
                    <Typewriter
                            options={{
                                strings: ['Fullstack developer', 
                                'Frontend developer', 'React developer',
                                'Node.js developer'],
                                autoStart: true,
                                loop: true,
                            }}
                    />
                    </div>
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

export default HomePresentation;