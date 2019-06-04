import styled from 'styled-components';

export const HomePageFooter = styled.p`
  @media screen and (max-width: 640px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
  display: block;
  // padding-left: 25px;
  font-family: Cutive Mono;
  font-weight: normal;
  color: #3e3f3d;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-feature-settings: "kern" 1;
  line-height: inherit;
  font-size: 1rem;
`