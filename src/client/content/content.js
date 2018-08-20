import React from 'react';
import styled from 'styled-components';
import {
  HomePageBody,
  HomePageContainer,
  HomePageTitle,
  HomePageFooter,
  Link,
} from '../presentational';

const GridContainer = styled.div`
  @media screen and (max-width: 640px) {
    display: inline-block;
  }
 display: grid;
 grid-gap: 20px;
 grid-template-columns: 3fr 1fr;
`;

const HomePageBlogPostsWidgetContainer = styled.div`
  @media screen and (max-width: 640px) {
    display: inline;
  }
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`;

const HomePageBlogPostsWidget = styled.div`
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

const HomePageBlogPostTitle = styled.p`
  @media screen and (min-width: 640px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
  font-family: Inconsolata;
  font-size: 1.2rem;
`;

const HomePageBlogPostsWidgetHeader = styled.p`
  @media screen and (min-width: 640px) and (max-width: 859px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 640px) {
    font-weight: normal;
    font-size: 1.1rem;
    margin-bottom: -7px;
  }
  margin-top: -8px;
  font-size: 2rem;
  font-family: Futura;
`;

const HomePage = (props) => {
  return (
    <GridContainer>
      <HomePageContainer>
        <HomePageTitle>
          I'm Tudor Tacal
        </HomePageTitle>
        <HomePageBody>
          Scrum Master & Full Stack Javascript developer at <Link href="https://www.mendeley.com" title="Mendeley" />.
          I build high performance web applications using React & NodeJS. Also
          preparing to become a dad. Exciting times!
          <br />
        </HomePageBody>
      </HomePageContainer>
      <HomePageBlogPostsWidgetContainer>
        <HomePageBlogPostsWidget>
          <HomePageBlogPostsWidgetHeader>
            Popular posts
        </HomePageBlogPostsWidgetHeader>
          <HomePageBlogPostTitle>
            Why is my website a server side rendered application?
        </HomePageBlogPostTitle>
        </HomePageBlogPostsWidget>
      </HomePageBlogPostsWidgetContainer>
      <HomePageFooter>
          Copyright © 2018 Tudor Tacal
      </HomePageFooter>
    </GridContainer>
  );
};

export default HomePage;

