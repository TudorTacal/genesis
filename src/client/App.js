import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const App = () => <StyledApp>Isomorphic Javascript Power</StyledApp>;

export default App;