import React from 'react';
import styled from 'styled-components';
import { um } from '../../measures/grid-unit';

const StyledTitle = styled.div`
  grid-column: 2 / 12;
  grid-row: 2 / 3;
  text-align: center;
  place-self: center stretch;
  font-family: Futura;
  font-size: ${um(12)};
  color: #3e3f3d;
  border-bottom: ${um(1)} solid #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const Content = () => {
  return (
    <React.Fragment>
      <StyledTitle>
        I'm Tudor Tacal
      </StyledTitle>
    </React.Fragment>
  );
};

export default Content;