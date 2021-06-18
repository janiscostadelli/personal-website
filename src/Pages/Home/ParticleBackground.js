import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../../config/particle-config";
import styled from "styled-components";

const MainContainer = styled.div`
  background: #918BDA;
  background-image: linear-gradient(rgba(17, 68, 146, 0.2), #918BDA);
  position: absolute;
  z-index: -1;
`;

const ParticleBackground = () => {
  return (
    <MainContainer>
      <Particles height='100vh' width='100vw' params={particlesConfig}></Particles>
    </MainContainer>
  );
};

export default ParticleBackground;
