import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const MainContainer = styled.div`
position: relative;
background-color: ${primaryColor};
height: 200px;
display: flex;
align-items: center;
justify-content: center;
`

export const Avatar = styled.img`
  height: 200px;
  position: absolute;
  margin-right: 350px;
`;

export const IconButton = styled.a`
  img{
    height: 40px;
    transition: 500ms;

    :hover{
      cursor: pointer;
      height: 50px;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 70px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextContainer = styled.div`
  text-align: center;
  color: white;
  font-family: "Oswald";
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`