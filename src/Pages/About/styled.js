import styled from "styled-components";
import { backgroundColor, primaryColor } from "../../constants/colors";

export const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  background: ${backgroundColor};
  padding: 80px;
`;

export const Title = styled.h2`
  color: ${primaryColor};
  font-size: 36px;
  font-family: "Oswald";
  text-align: justify;
  margin: 50px 0px 50px 0px;
  width: 850px;
`;

export const SubTitle = styled.p`
  color: ${primaryColor};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const Avatar = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

export const Card = styled.p`
background-color: ${primaryColor};
width: 150px;
font-size: 24px;
font-family: "Oswald";
color: white;
text-align: center;
border-radius: 10px;
border: 1px solid ${primaryColor};
transition: 500ms;
:hover{
  background-color: ${backgroundColor};
  color: ${primaryColor};
}
`;

export const CardsContainer = styled.div`
width: 500px;
display: flex;
flex-wrap: wrap;
gap: 20px;
`