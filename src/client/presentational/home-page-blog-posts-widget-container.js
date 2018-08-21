import styled from 'styled-components';

export const HomePageBlogPostsWidgetContainer = styled.div`
  @media screen and (max-width: 640px) {
    display: inline;
  }
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`;