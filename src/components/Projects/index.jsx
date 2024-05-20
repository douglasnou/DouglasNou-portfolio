import { ProjectsCard } from "./ProjectsCard";
import { sites } from "./../../scripts/sites";
import styled from "./style.module.scss";


export const Projects = () => {
    return (
        <div className={`${styled.ProjectSection}`} id="projects" >
            <h2 className="title3">Projetos</h2>
            <ul className={`${styled.ProjectList}`}>
                {sites.map(projects => <ProjectsCard projects={projects} />)}
            </ul>
        </div>
    )
}