import styled from "./style.module.scss";
export const StacksCard = ({tecs})=>{
    return(
        <li className={`${styled.StackCard}`}>
            <h3 className="text2">{tecs.title}</h3>
            <img src={tecs.image} />
        </li>
    )
}