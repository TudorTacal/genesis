import React from 'react';
import styled from 'styled-components';
import Content from './content/content';

const AppContainer = styled.div`
  padding: 25px;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Content />
      </AppContainer>
    )
  }
}

export default App;