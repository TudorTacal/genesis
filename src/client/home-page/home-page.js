import React from 'react';
import {
  HomePageBody,
  HomePageContainer,
  HomePageTitle,
  HomePageFooter,
  HomePageBlogPostsWidget,
  HomePageBlogPostsWidgetContainer,
  HomePageBlogPostsWidgetHeader,
  HomePageBlogPostTitle,
  GridContainer,
  StyledLink,
} from '../presentational';
import posts from '../../model/posts';

const HomePage = (props) => {
  return (
    <GridContainer>
      <HomePageContainer>
        <HomePageTitle>
          I'm Tudor Tacal
        </HomePageTitle>
        <HomePageBody>
          Senior Full Stack Javascript developer at {" "}
          <StyledLink to="//www.beamly.com" target="_blank">
            Beamly
          </StyledLink>
          {" "} & Scrum Master.
          <br />
          <br />
          CODING is my passion - I use React and NodeJS to build high performance web applications.
          Agile, Lean - also proud father of a little dragon girl.  Exciting times!
          <br />
        </HomePageBody>
        <HomePageFooter>
          Copyright © 2018 Tudor Tacal
        </HomePageFooter>
      </HomePageContainer>
    </GridContainer>
  );
};

export default HomePage;

