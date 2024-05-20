import styled from "./style.module.scss";

export const ProjectsCard = ({ projects }) => {
    return (
        <li className={styled.ProjectCard}>
            <img src={projects.img} />
            <a target="blank" href={projects.link}>Ver projeto</a>
        </li>
    )
}