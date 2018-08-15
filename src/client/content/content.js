import React from 'react';
import styled from 'styled-components';
import Link from '../presentational/link';

const Title = styled.h1`  
  display: inline-block;
  font-family: Futura;
  font-size: 3rem;
  color: #3e3f3d;
  border-bottom: 6px solid #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  display: block;
`;

const Body = styled.p`
  font-family: Cutive Mono;
  font-size: 2rem;
  color: #3e3f3d;
`;

const Footer = styled.p`
  font-family: Cutive Mono;
  font-weight: normal;
  color: #3e3f3d;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-feature-settings: "kern" 1;
  line-height: inherit;
  font-size: 1rem;
`

const Content = () => {
  return (
    <ContentContainer>
      <Title>
        I'm Tudor Tacal
      </Title>
      <Body>
        Full Stack Javascript developer at <Link href="https://www.mendeley.com" title="Mendeley" />.
        At the moment I'm learning all the in's and out's of web development while
        preparing to become a dad. Exciting times!
      </Body>
      <Footer>
        Copyright © 2018 Tudor Tacal
      </Footer>
    </ContentContainer>
  );
};

export default Content;
