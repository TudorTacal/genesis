import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  grid-column: 2 / 3;
  font-family: Futura;
  font-size: 5rem;
  color: #3e3f3d;
  border-bottom: 6px solid #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const Content = () => {
  return (
    <StyledContent>
      <StyledTitle>
        I'm Tudor Tacal
      </StyledTitle>
    </StyledContent>
  );
};

export default Content;