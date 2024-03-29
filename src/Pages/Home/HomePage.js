import React from "react";
import ParticleBackground from "./ParticleBackground";
import downArrow from "../../assets/downArrow.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import {
  MainContainer,
  Header,
  Footer,
  Hero,
  OutlinedButton,
  Icon,
  ButtonGroup,
  IconGroup,
  DownArrow,
  Title,
  SubTitle,
} from "./styled.js";

const HomePage = () => {
  return (
    <MainContainer>
      <ParticleBackground />
      <Header>
        <IconGroup>
          <Icon
            href="https://www.linkedin.com/in/janiscostadelli"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin logo" />
          </Icon>
          <Icon href="https://github.com/janiscostadelli" target="_blank">
            <img src={github} alt="github logo" />
          </Icon>
        </IconGroup>
        <ButtonGroup>
          <OutlinedButton href="#projetos">PROJETOS</OutlinedButton>
          <OutlinedButton href="#contato">CONTATO</OutlinedButton>
        </ButtonGroup>
      </Header>

      <Hero>
        <Title>JANIS COSTADELLI</Title>
        <SubTitle>Desenvolvedora Front-End</SubTitle>
      </Hero>

      <Footer>
        <DownArrow href="#sobre">
          <img src={downArrow} alt="down arrow img" />
        </DownArrow>
      </Footer>
    </MainContainer>
  );
};

export default HomePage;
