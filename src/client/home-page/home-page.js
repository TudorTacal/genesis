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
  Link,
} from '../presentational';

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

