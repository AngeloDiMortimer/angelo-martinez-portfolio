import Skillset from "../components/About/Skillset";
import Tools from "../components/About/Tools";
import WhoIAm from "../components/About/WhoIAm";

const About = () => {
    return (
        <div className="min-h-screen">
            <WhoIAm />
            <Skillset />
            <Tools />
        </div>
    )
}

export default About;