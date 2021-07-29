import React from "react";
import { MainContainer, Title, SubTitle, Avatar, Card, CardsContainer } from "./styled.js";
import avatar_img from '../../assets/avatar.png';

const skills = [
  'React',
  'Typescript',
  'NodeJS',
  'Javascript',
  'MySQL',
  'AWS',
  'Jest',
  'Express',
  'Git',
]


const AboutPage = () => {

  const renderCards = skills.map((item) => {
    return <Card>{item}</Card>
  })
  

  return (
    <MainContainer id='sobre'>
      <Title>
        Biomédica formada e desenvolvedora full stack em início de carreira,
        buscando oportunidades na área de tecnologia, sempre disposta a aprender
        mais.
      </Title>
      <SubTitle>
        Stack
      </SubTitle>
      <CardsContainer>
        {renderCards}
      </CardsContainer>
      <Avatar src={avatar_img} />
    </MainContainer>
  );
};

export default AboutPage;
