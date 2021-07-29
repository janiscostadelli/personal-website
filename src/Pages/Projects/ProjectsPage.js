import React from "react";
import {
  MainContainer,
  ProjectContainer,
  ProjectDescription,
  ProjectImg,
  ProjectTitle,
  Title,
  StyledList
} from "./styled";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import aquaProject from "../../assets/aquaProject.png";
import labeCommerce from "../../assets/labeCommerceProject.jpg";

const ProjectsPage = () => {
  return (
    <MainContainer id="projetos">
      <Title>Projetos</Title>
      <Carousel plugins={["arrows"]}>
        <ProjectContainer>
          <ProjectImg src={aquaProject} />
          <ProjectDescription>
            <ProjectTitle>Aqua</ProjectTitle>
            <p>
            Primeiro projeto Full Stack de um site de musicas.
            </p>
            <ProjectTitle>Funcionalidades</ProjectTitle>
            <StyledList>
              <li>Criar música</li>
              <li>Cadastro</li>
              <li>Login, Logout</li>
              <li>Criar playlist</li>
              <li>Exibir playlist</li>
              <li>Exibir músicas</li>
              <li>Pesquisar músicas por nome e artista</li>
            </StyledList>
            <ProjectTitle>Links</ProjectTitle>
            <p>
              <a
                href="https://github.com/janiscostadelli/aqua-frontend"
                target="_blank"
              >
                Repositório - Código FrontEnd
              </a>
            </p>
            <p>
              <a
                href="https://github.com/janiscostadelli/aqua-backend"
                target="_blank"
              >
                Repositório - Código BackEnd
              </a>
            </p>
            <p>
              <a
                href="http://ec2-3-83-69-28.compute-1.amazonaws.com:3000/"
                target="_blank"
              >
                Deploy - Teste aqui
              </a>
            </p>
          </ProjectDescription>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg src={labeCommerce}/>
          <ProjectDescription>
            <ProjectTitle>Labecommerce</ProjectTitle>
            <p>
              Projeto frontend feito em parceria com alguns outros estudantes do
              bootcamp labenu, utilizamos metodologia ágil e pair programming
            </p>
            <ProjectTitle>Funcionalidades</ProjectTitle>
            <StyledList>
            <li>Filtro por nome</li>
            <li>Filtro por preços máximo e mínimo</li>
            <li>Adicionar itens ao carrinho</li>
            <li>Excluir itens do carrinho</li>
            <li>Ordenar produtos por maior ou menor preço</li>
            <li>Armazenar produtos do carrinho no Local Storage</li>
            </StyledList>
            <ProjectTitle>Links</ProjectTitle>
            <p>
              <a
                href="https://github.com/future4code/cruz-labe-commerce19"
                target="_blank"
              >
                Repositório - Código
              </a>
            </p>
            <p>
              <a href="http://labenu-labecommerce.surge.sh/" target="_blank">
                Deploy - Teste aqui
              </a>
            </p>
          </ProjectDescription>
        </ProjectContainer>
      </Carousel>
    </MainContainer>
  );
};

export default ProjectsPage;
