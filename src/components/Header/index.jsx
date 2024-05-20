import eu from "./../../assets/me.png";
import styled from "./style.module.scss"
export const Header = () => {
    return (
        <div className={styled.HeaderSection}>
            <div className={styled.HeaderContainer}>
                <div className={styled.Profile}>
                    <img src={eu} />
                    <h2 className="text1">Douglas Nôu</h2>
                </div>
                <ul className={styled.HeaderList}>
                    <li><a className="text3" href="#about">Sobre mim</a></li>
                    <li><a className="text3" href="#stacks">Stacks</a></li>
                    <li><a className="text3" href="#projects">Projetos</a></li>
                    <li><a className="text3" href="#contact">Contato</a></li>
                </ul>

            </div>
        </div>
    )
}