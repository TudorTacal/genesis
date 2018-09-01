import React from 'react';
import styled from 'styled-components';

const BlogPostHeader = styled.div`
  grid-area: header;
  @media screen and (max-width: 640px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.7rem;
  }
  display: inline-block;
  font-family: Futura;
  font-size: 2rem;
  color: #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const BlogPostBody = styled.div`
  @media screen and (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.7;
    font-weight: normal;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    font-family: Inconsolata;
  }
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: Cutive Mono;
  grid-area: body;
`;

const BlogPostFooter = styled.div`
  grid-area: footer;
`;

// insert a fullscreen picture
const StyledBlogPost = styled.div`
  @media screen and (max-width: 640px) {
    padding: 25px;
    grid-template-columns: 1fr;
    grid-template-areas:
    "header"
    "body"
    "footer";
  }
  color: #3e3f3d;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grd-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
  grid-template-areas: 
  ". header header header ."
  ". body body body ."
  ". footer footer footer .";
`;

const BlogPost = () => {
  return(
    <StyledBlogPost>  
      <BlogPostHeader>
        Why is my website a server side rendered application?
      </BlogPostHeader>
      <BlogPostBody>
        <p>
          The truth is I want to create a platform that replicates the architecture
          and technologies I use daily. Also to get some hands on experience with 
          tech like AuthO, GraphQL and CSS Grid. 
        </p>
        <p>
          I believe React and NodeJs offer a cool solution to build the web. That's
          why a lot of companies and developers go down this route. For me it's an 
          opportunity to hand craft my own product - complete freedom.
        </p>
      </BlogPostBody>
      <BlogPostFooter>
        <small><i>work in progress</i></small>
      </BlogPostFooter>
    </StyledBlogPost>
  )
};

export default BlogPost;
