import React from "react";
import { Avatar, MainContainer, IconButton, TextContainer, ButtonsContainer, InfoContainer } from "./styled";
import avatar_img from "../../assets/avatar2.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const ContactPage = () => {
  return (
    <MainContainer id='contato'>
      <Avatar src={avatar_img} />
      <InfoContainer>
      <ButtonsContainer>
      <IconButton href="https://github.com/janiscostadelli" target="_blank">
        <img src={github} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/janiscostadelli/"
        target="_blank"
      >
        <img src={linkedin} />
      </IconButton>
      </ButtonsContainer>
      <TextContainer>
      <p>jcostadelli@gmail.com</p>
      <p>+55 11 9 5393-1504</p>
      </TextContainer>
      </InfoContainer>
    </MainContainer>
  );
};

export default ContactPage;
