import styled from "styled-components";
import { neutralColor, primaryColor } from "../../constants/colors";

export const Title = styled.h3`
  font-size: 25px;
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-weight: 600;
  width: 100%;
  margin: 15px;
  background-color: ${primaryColor};
`;

export const MainContainer = styled.div`
  color: white;
  font-weight: 600;
  background-color: ${neutralColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-top: 0px;
`;

export const ProjectContainer = styled.div`
  min-height: 70vh;
  width: 70vw;
  display: flex;
  align-items: center;
`;

export const ProjectImg = styled.div`
  border-radius: 10px;
  margin: 20px 40px 20px 20px;
  height: 60vh;
  width: 60%;
  background-image: url("${(props) => props.src}");
  background-size: auto 100%;
`;

export const StyledList = styled.ul`
  list-style: none;
  li::before {
    content: "▪ ";
    color: ${primaryColor};
  }
  margin: 5px 0px;
`

export const ProjectDescription = styled.div`
  height: 100%;
  width: 300px;
  p {
    text-align: justify;
  }
  a {
    color: white;
    transition: 500ms;
    :hover {
      color: ${primaryColor};
    }
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0px;
  color: ${primaryColor};
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
`;
