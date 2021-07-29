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
  margin-right: 500px;
`;

export const IconButton = styled.a`
  margin: 5px;
  img{
    height: 40px;
    transition: 500ms;

    :hover{
      cursor: pointer;
      height: 50px;
    }
  }
`