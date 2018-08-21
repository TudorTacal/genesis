import styled from 'styled-components';

export const HomePageBlogPostsWidget = styled.div`
  @media screen and (min-width: 640px) and (max-width: 859px) {
    margin-top: -48px;
  }
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