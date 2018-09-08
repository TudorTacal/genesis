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

const BlogPost = (props) => {
  console.log(props.match.params, 'props.match.params');
  return (
    <React.Fragment>
      {
        props.match.params && 
        props.match.params.id.includes('why-is-my') ?
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
          </BlogPostFooter>
        </StyledBlogPost> :
        <StyledBlogPost>
          <BlogPostHeader>
            What am I building? Agile software delivery 💻
        </BlogPostHeader>
          <BlogPostBody>
            <p>
              One of these days, I asked my UX colleague if the UX guild is agile, that is
              if they follow the methodologies and understand their use.
              Immediately a conversation started about what agile is and how
              different teams and people understand or not it's spirit and practices.
            </p>
            <p>
              For me, being agile in software development means to iterate often and deliver
              small, valuable features that get in front of the users in good time. Of course the ceremonies,
              frameworks, tools and processes there for a reason. But they are a helper, not the main actor,
              they empower and assist in achieving the goal. Then what is the goal? It varies, 
              for me is to create web applications fast, qualitatively, and learn as much as I can about 
              the parts I'm passionate about. 
            </p>
            <p>
              To prove my point, I am developing this website in real time. My baby girl is due on
              the 2nd of October so I still find a few hours per week to work on my personal projects.
              Even as you read through this post I am ready to implement a new feature, be it of a technical
              nature like <it>Webpack Dev Server</it> or something visible on the screen like a <it>navigation to 
              the home page</it>. I use Waffle & Trello to manage the project; you can see some items in my backlog 
              on Github.
            </p>
            <p>
              While I was writing the text for this second post, I was also preparing to deploy the code so that
              the changes would be available to all my friends across the world. To achieve this all it takes is:
              <it>git add;</it> <it>git commit;</it> <it>git push;</it> and <it>npm run heroku;</it>. 
              This ability to ship software that serves a purpose, even a simple one, of delivering a 
              message, is in my opinion, the core of agile software development and delivery.
            </p>
          </BlogPostBody>
          <BlogPostFooter>
            <p>
            If you have feedback not only about the website but also about the tech I'm using, my writing, 
            or just to say hello please do get in touch. I like to connect with techies and 
            kindred spirits of any kind.
            </p>
            <p>
              Twitter - for tech stuff.
              Instagram - for, hopefully, cool photos. 
            </p>
          </BlogPostFooter>
        </StyledBlogPost>
      }
    </React.Fragment>
  )
};

export default BlogPost;
