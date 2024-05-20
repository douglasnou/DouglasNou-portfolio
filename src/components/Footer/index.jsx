import { contacts } from "../../scripts/contacts";
import styled from "./style.module.scss";

export const Footer = () => {
    return (
        <div className={styled.FooterSection} id="contact">
            <h2 className={`title3`}>Contatos</h2>
            <ul>
                {contacts.map((info) =>
                    <a target="blank" href={info.link}>
                        <li key={info.text} className={`text3`}>
                            <img src={info.img} />
                            <span>{info.text}</span>
                        </li>
                    </a>
                )
                }
            </ul>
        </div>
    )
}