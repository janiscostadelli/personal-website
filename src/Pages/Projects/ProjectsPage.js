import React from 'react';
import {MainContainer} from './styled.js';
import { Button, Collapse } from "@chakra-ui/react";
import useToggle from '../../hooks/useToggle.js';

const ProjectsPage = () => {
  const { P1, toggleP1 } = useToggle();
  const { P2, toggleP2 } = useToggle();
  const { P3, toggleP3 } = useToggle();

  return(
    <MainContainer id='projects'>
      <Button onClick={toggleP1}>Click Me</Button>
      <Collapse in={P1} animateOpacity>
        dados do projeto 1
      </Collapse>
      <Button onClick={toggleP2}>Click Me</Button>
      <Collapse in={P2} animateOpacity>
        dados do projeto 2
      </Collapse>
      <Button onClick={toggleP3}>Click Me</Button>
      <Collapse in={P3} animateOpacity>
        dados do projeto 3
      </Collapse>
    </MainContainer>
  );
}

export default ProjectsPage;
