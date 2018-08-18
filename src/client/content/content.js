import React from 'react';
import styled from 'styled-components';
import Link from '../presentational/link';

const Title = styled.h1` 
  @media screen and (max-width: 640px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 4rem;
  }
  display: inline-block;
  font-family: Futura;
  font-size: 3rem;
  color: #3e3f3d;
  border-bottom: 0.13em solid #3e3f3d;
  line-height: 1.4;
  font-weight: bold;
`;

const ContentContainer = styled.div`
@media screen and (min-width: 1024px) {
  font-size: 3.5rem;
  padding: 25px;
}
  display: block;
  padding: 0 25px 0 25px;
`;

const Body = styled.p`
  @media screen and (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.7;
    font-family: Inconsolata;
    font-weight: normal;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 1.3;
  }
  font-family: Cutive Mono;
  font-size: 2rem;
  color: #3e3f3d;
`;

const Footer = styled.p`
  @media screen and (max-width: 640px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
  font-family: Cutive Mono;
  font-weight: normal;
  color: #3e3f3d;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-feature-settings: "kern" 1;
  line-height: inherit;
  font-size: 1rem;
`

const Content = (props) => {
  return (
    <ContentContainer>
      <Title>
        I'm Tudor Tacal
      </Title>
      <Body>
        Scrum Master & Full Stack Javascript developer at <Link href="https://www.mendeley.com" title="Mendeley" />.
        I build high performance web applications using React & NodeJS. Also
        preparing to become a dad. Exciting times!
        <br/>
      </Body>
      <Footer>
        Copyright © 2018 Tudor Tacal
      </Footer>
    </ContentContainer>
  );
};

export default Content;

