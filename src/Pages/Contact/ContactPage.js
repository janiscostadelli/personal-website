import React from "react";
import { Avatar, MainContainer, IconButton } from "./styled";
import avatar_img from "../../assets/avatar2.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import gmail from "../../assets/gmail.svg";

const ContactPage = () => {
  return (
    <MainContainer>
      <Avatar src={avatar_img} />
      <IconButton href='http://api.whatsapp.com/send?phone=5511953931504' target='_blank'><img src={whatsapp} /></IconButton>
      <IconButton href='https://github.com/janiscostadelli' target="_blank"><img src={github} /></IconButton>
      <IconButton href='https://www.linkedin.com/in/janiscostadelli/' target="_blank"><img src={linkedin} /></IconButton>
      <IconButton href='mailto:jcostadelli@gmail.com' target="_blank" rel="gmail.com"><img src={gmail} /></IconButton>
    </MainContainer>
  );
};

export default ContactPage;
