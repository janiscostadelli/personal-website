import styled from "styled-components";

export const MainContainer = styled.div`
height: 100vh;
font-family: 'Oswald';
color: white;
display: flex;
flex-direction: column;
`

export const Title = styled.h1`
font-size: 70px;
@media (max-width: 600px)
{
  font-size: 45px;
}
`

export const SubTitle = styled.h3`
font-size: 30px;
font-weight: 900;
@media (max-width: 600px){
  font-size: 20px;
}
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 40px 100px;
@media (max-width: 600px)
{
  justify-content: center;
}
`

export const Hero = styled.div`
gap: 10px;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width: 600px)
{
  align-items: flex-start;
  padding: 0px 30px;
}

`

export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
height:80px;
padding: 15px;
@media (max-width: 600px)
{
  height: 150px;
}
`

export const OutlinedButton = styled.a`
color: white;
font-size: 20px;
padding: 8px 15px;
border: 1px solid white;
border-radius:5px;
transition: 250ms;
&:hover{
  color: #918BDA;
  background-color: white;
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
@media (max-width: 600px)
{
  display: none;
}
`

export const IconGroup = styled.a`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
width: 110px;
gap: 10px;
`
