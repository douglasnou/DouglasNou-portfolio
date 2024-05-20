import { AboutSection } from "../../components/AboutSection"
import { Default } from "../../components/Default"
import { Projects } from "../../components/Projects"
import { Stacks } from "../../components/Stacks"

export const HomePage = ()=>{
    return(
        <Default>
            <AboutSection/>
            <Stacks/>
            <Projects/>
        </Default>
    )
}