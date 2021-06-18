import React from 'react';
import ParticleBackground from './ParticleBackground';
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
  SubTitle
} from './styled.js';

const HomePage = () => {
  return (
    <MainContainer>
      <ParticleBackground />
      <Header>
        <IconGroup>
          <Icon href='https://www.linkedin.com/in/janiscostadelli' target='_blank'><img src='./icons/linkedin 1.png'/></Icon>
          <Icon href='https://github.com/janiscostadelli' target='_blank'><img src='./icons/github 1.png'/></Icon>
        </IconGroup>
        <ButtonGroup>
          <OutlinedButton href='#'>projects</OutlinedButton>
          <OutlinedButton href='#'>contact</OutlinedButton>
        </ButtonGroup>
      </Header>

      <Hero>
        <Title>JANIS COSTADELLI</Title>
        <img src='./icons/line.png' />
        <SubTitle>FullStack Developer</SubTitle>
      </Hero>

      <Footer>
        <DownArrow href='#'><img src='./icons/downArrow.png'/></DownArrow>
      </Footer>
    </MainContainer>

  );
}

export default HomePage;
