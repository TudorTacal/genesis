import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  @media screen and (max-width: 640px) {
    padding-left: 25px;
    border-left: 0;
    margin: 0 0 1.5rem 0;
    line-height: 1.7;
    font-weight: normal;
  }
  padding-left: 10px;
  grid-row: 2 / 4;
  border-left: 1px solid grey;
  margin-top: -20px;
`;

const NotFound = () => {
  return(
    <StyledNotFound>
      <h1>404</h1>
      <h1>The page you're looking for does not exist</h1>
      <small><i>This NotFound page is still in progress :)</i></small>
    </StyledNotFound>
  )
}

export default NotFound;