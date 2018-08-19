import React from 'react';
import { 
  HomePageBody,
  HomePageContainer,
  HomePageTitle,
  HomePageFooter,
  Link,
 } from '../presentational';

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <HomePageTitle>
        I'm Tudor Tacal
      </HomePageTitle>
      <HomePageBody>
        Scrum Master & Full Stack Javascript developer at <Link href="https://www.mendeley.com" title="Mendeley" />.
        I build high performance web applications using React & NodeJS. Also
        preparing to become a dad. Exciting times!
        <br/>
      </HomePageBody>
      <HomePageFooter>
        Copyright © 2018 Tudor Tacal
      </HomePageFooter>
    </HomePageContainer>
  );
};

export default HomePage;

