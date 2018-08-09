import React from 'react';
import styled from 'styled-components';
import StyledContent from './content/content';

const StyledApp = styled.div`
  padding: 50px;
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