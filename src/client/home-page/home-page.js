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

const HomePage = (props) => {
  return (
    <GridContainer>
      <HomePageContainer>
        <HomePageTitle>
          I'm Tudor Tacal
        </HomePageTitle>
        <HomePageBody>
          Scrum Master & Full Stack Javascript developer at <StyledLink to="//www.mendeley.com"target="_blank">Mendeley</StyledLink>.
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
            <StyledLink to="/posts/why-is-my-website-a-server-side-rendered-application">
              Why is my website a server side rendered application?
            </StyledLink>
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

