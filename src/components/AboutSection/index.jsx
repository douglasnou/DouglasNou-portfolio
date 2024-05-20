import styled from "./style.module.scss";
export const AboutSection = () => {
    return (
        <div className={styled.AboutSection} id="about">
            <h1 className={`title2`}>Bem-vindo ao <span className={`title1`} >meu portfólio!</span></h1>
            <h2 className={`title3`}>Sobre mim</h2>
            <p className={`text2`}>
                Olá, meu nome é Douglas Eduardo, tenho 26 anos, sou aluno de programação Fullstack da Kenzie Academy Brasil e graduado em Redes de Computadores pela Faculdade Pitágoras. Amo aprender coisas novas, estou sempre buscando mais, dia após dia. Me apaixonei pela área de desenvolvimento web e acabei descobrindo o quão extensa ela pode ser. Busco me tornar, de fato, um desenvolvedor profissional, pôr à prova sempre tudo que venho aprendendo todos os dias. Gosto de trabalhar focado, e de sempre ter ajuda ou ajudar a equipe. Também gosto de trabalhar sozinho, tenho muita paciência e estou sempre aberto às críticas. Procuro sempre tirar o aprendizado de cada situação, boa ou não.
            </p>
        </div>
    )
}