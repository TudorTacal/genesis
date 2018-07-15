import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  
`;

class App extends React.Component {
  press(){
    console.log('The button was pressed');
  };
  render() {
    return (
      <StyledApp>
        Header
        <button onClick={this.press}>Press me</button>
      </StyledApp>
    )
  }
}

export default App;