import React from 'react';
import styled from 'styled-components';
import StyledContent from './content/content';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr 3fr 1fr);
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