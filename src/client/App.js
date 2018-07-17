import React from 'react';
import styled from 'styled-components';
import StyledContent from './content/content';
import { um } from '../measures/grid-unit';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

class App extends React.Component {

  render() {
    return (
      <StyledApp>
        <StyledContent />
      </StyledApp>
    )
  }
}

export default App;