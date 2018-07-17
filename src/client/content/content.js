import React from 'react';
import styled from 'styled-components';
import { um } from '../../measures/grid-unit';

const StyledContent = styled.div`
  grid-column: 2 / 11;
  text-align: center;
  place-self: center stretch;
  font-family: Futura;
  font-size: ${um(12)};
  color: #3e3f3d;
  border-bottom: ${um(0.8)} solid #3e3f3d;
  margin-top: ${um(18)};
`;

const Content = () => {
  return (
    <React.Fragment>
      <StyledContent>
        I'm Tudor Tacal
      </StyledContent>
    </React.Fragment>
  );
};

export default Content;