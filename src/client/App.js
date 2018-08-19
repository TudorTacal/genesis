import React from 'react';
import styled from 'styled-components';
import HomePage from './content/content';

const AppContainer = styled.div`
  padding: 0 25px 0 25px;
`;

class App extends React.Component {
  render() {
    return (
      <HomePage lorena="What is going on?"/>
    )
  }
}

export default App;
