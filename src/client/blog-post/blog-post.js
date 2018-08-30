import React from 'react';
import styled from 'styled-components';

const BlogPostHeader = styled.div`
  @media screen and (max-width: 640px) {
    font-size: 2.0rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
  display: inline-block;
  font-family: Futura;
  font-size: 2rem;
  color: #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const BlogPostFooter = styled.div`
`;

const BlogPostBody = styled.div`
`;
// insert a fullscreen picture
const StyledBlogPost = styled.div`
  display: grid;
  padding: 25px;
  grid-gap: 20px;
  grid-template-areas: 
    "header header header header"
    "body body"
    "footer"

  ${BlogPostHeader} {
    color: red;
    grid-column: header -start / header -end;
  }
  ${BlogPostBody} {
    grid-column: body -start / body -end;
  }

  ${BlogPostFooter} {
    grid-column: footer -start / footer -end;
  }
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
          and technologies I use daily as well as to get some hands on experience with 
          things like AuthO, GraphQL and especially CSS Grid.
        </p>
        <p>
          I believe React and NodeJs offer a cool solution to build the web. That's
          why a lot of companies and developers go down this route.
          It also give me the opportunity to hand craft my own product.
        </p>
      </BlogPostBody>
      <BlogPostFooter>
        <small><i>work in progress</i></small>
      </BlogPostFooter>
    </StyledBlogPost>
  )
};

export default BlogPost;
