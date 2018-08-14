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

const Content = () => {
  return (
    <ContentContainer>
      <Title>
        I'm Tudor Tacal
      </Title>
      <Body>  
        Full Stack Javascript developer at <Link href="www.mendeley.com" title="Mendeley"/>. 
        At the moment I'm learning all the in's and out's of web development while 
        preparing to become a dad. Exciting times!
      </Body>
    </ContentContainer>
  );
};

export default Content;
