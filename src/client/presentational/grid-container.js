import styled from 'styled-components';

export const GridContainer = styled.div`
  @media screen and (max-width: 640px) {
    display: inline-block;
  }
 display: grid;
 grid-gap: 20px;
 grid-template-columns: 3fr 1fr;
`;