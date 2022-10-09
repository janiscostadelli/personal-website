import React from "react";
import {
  MainContainer,
  Title,
  SubTitle,
  Avatar,
  Card,
  CardsContainer,
} from "./styled.js";
import avatar_img from "../../assets/avatar.png";

const skills = [
  "React",
  "Typescript",
  "Angular",
  "Ionic",
  "NodeJS",
  "Javascript",
  "MySQL",
  "Git",
];

const AboutPage = () => {
  const renderCards = skills.map((item) => {
    return <Card>{item}</Card>;
  });

  return (
    <MainContainer id="sobre">
      <Title>
        Desenvolvedora front-end buscando oportunidades na área de tecnologia,
        sempre disposta a aprender mais.
      </Title>
      <SubTitle>Stack</SubTitle>
      <CardsContainer>{renderCards}</CardsContainer>
      <Avatar src={avatar_img} />
    </MainContainer>
  );
};

export default AboutPage;
