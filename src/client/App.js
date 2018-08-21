import React from 'react';
import styled from 'styled-components';
import HomePage from './home-page/home-page';

const AppContainer = styled.div`
  padding: 0 25px 0 25px;
`;

class App extends React.Component {
  render() {
    return (
      <HomePage />
    )
  }
}

export default App;
