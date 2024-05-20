import { StacksCard } from "./StacksCard";
import { stacks } from "./../../scripts/stacks";
import styled from "./style.module.scss";

export const Stacks = () => {
    return (
        <div className={styled.StackSection} id="stacks">
            <div className={styled.StackContainer}>
                <h2 className={`title3`}>Stacks</h2>
                <ul>
                    {stacks.map(tecs => <StacksCard key={tecs.title} tecs={tecs} />)}
                </ul>
            </div>
        </div>
    )
}