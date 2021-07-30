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

  @media (max-width: 600px) {
    margin: 0px;
  }
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

  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const ProjectContainer = styled.div`
  min-height: 70vh;
  width: 70vw;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ProjectImg = styled.div`
  border-radius: 10px;
  margin: 20px 40px 20px 20px;
  height: 60vh;
  width: 60%;
  background-image: url("${(props) => props.src}");
  background-size: auto 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  li::before {
    content: "▪ ";
    color: ${primaryColor};
  }
  margin: 5px 0px;
`;

export const ProjectDescription = styled.div`
  min-height: 100%;
  margin: 20px;
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

    @media (max-width: 600px) {
      color: ${primaryColor};
      width: 0px;
    }
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0px;
  color: ${primaryColor};
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
  @media (max-width: 600px) {
    background-color: ${primaryColor};
    color: white;
    font-weight: 500;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;
