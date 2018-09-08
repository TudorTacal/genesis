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
          Full Stack Javascript developer at {" "}
          <StyledLink to="//www.mendeley.com" target="_blank">
            Mendeley  
          </StyledLink>
          {" "} & Scrum Master .
          <br />
          <br />
          CODING is my passion - I use React and NodeJS to build high performance web applications.
          Agile, Lean - also preparing to become a dad.  Exciting times!
          <br />
        </HomePageBody>
      </HomePageContainer>
      <HomePageBlogPostsWidgetContainer>
        <HomePageBlogPostsWidget>
          <HomePageBlogPostsWidgetHeader>
            Popular posts
        </HomePageBlogPostsWidgetHeader>
        {/* map posts */}
          <HomePageBlogPostTitle>
            <StyledLink to={`/posts/${posts[0]}`}>
              Why is my website a server side rendered application?
            </StyledLink>
          </HomePageBlogPostTitle>
          <HomePageBlogPostTitle>
            <StyledLink to={`/posts/${posts[1]}`}>
              What am I building? Agile software delivery 💻
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

