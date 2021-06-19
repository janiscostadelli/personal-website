import React from 'react';
import ParticleBackground from './ParticleBackground';
import downArrow from './Components/Imgs/downArrow.png';
import line from './Components/Imgs/line.png';
import linkedin from './Components/Imgs/linkedin.png';
import github from './Components/Imgs/github.png' 

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
        <Icon href='https://www.linkedin.com/in/janiscostadelli' target='_blank'><img src={linkedin}/></Icon>
          <Icon href='https://github.com/janiscostadelli' target='_blank'><img src={github}/></Icon>
        </IconGroup>
        <ButtonGroup>
          <OutlinedButton href='#'>projects</OutlinedButton>
          <OutlinedButton href='#'>contact</OutlinedButton>
        </ButtonGroup>
      </Header>

      <Hero>
        <Title>JANIS COSTADELLI</Title>
        <img src={line} />
        <SubTitle>FullStack Developer</SubTitle>
      </Hero>

      <Footer>
        <DownArrow href='#'><img src={downArrow}/></DownArrow>
      </Footer>
    </MainContainer>

  );
}

export default HomePage;
