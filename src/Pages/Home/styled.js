import styled from "styled-components";

export const MainContainer = styled.div`
height: 100vh;
width: 100vw;
font-family: 'Oswald';
color: white;
display: flex;
flex-direction: column;
`

export const Title = styled.h1`
font-size: 70px;
`

export const SubTitle = styled.h3`
font-size: 30px;
font-weight: 900;
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 40px 100px;
`

export const Hero = styled.div`
gap: 10px;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
height:80px;
padding: 15px;
`

export const OutlinedButton = styled.a`
color: white;
font-size: 20px;
padding: 8px 15px;
border: 1px solid white;
border-radius:5px;
transition: 250ms;
&:hover{
  box-shadow: 0px 0px 5px white;
}
`

export const DownArrow = styled.a`
img{
  height: 40px;
  transition: 250ms;
  &:hover{
    height: 50px;
  }
}

`

export const Icon = styled.a`
img{
  height: 40px;
  transition: 250ms;
  &:hover{
    height: 50px;
  }
}
`

export const ButtonGroup = styled.div`
display: flex;
gap: 15px;
`

export const IconGroup = styled.a`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
width: 110px;
gap: 10px;
`
