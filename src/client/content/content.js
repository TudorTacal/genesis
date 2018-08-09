import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: Futura;
  font-size: 50px;
  color: #3e3f3d;
  border-bottom: 6px solid #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const StyledContent = styled.div`
  display: flex;
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
// create a proper html template
// add the device width tag
// define the font size of the root element to 16px then use rem consistently
