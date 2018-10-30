import React from 'react';
import styled from 'styled-components';
import Auth0Lock from 'auth0-lock';

const StyledAuthContainer = styled.div`
  padding-left: 25px;
`;

const StyledAuthButton = styled.a`
  color: #3e3f3d;
  text-decoration: none;
  line-height: inherit;
  border-bottom: 1px solid #787a76;
  transition: all .05s ease-in-out;

  &:hover { 
    border-bottom-color: #fff;
    color: #787a76;
  }
`; 

class Header extends React.Component {
  showLock = () => {
    // Show the Auth0Lock widget
    this.lock.show();
  };
  componentDidMount() {
    this.lock = new Auth0Lock(
      process.env.AUTH0_CLIENT_ID,
      process.env.AUTH0_CLIENT_DOMAIN,
    );
  }
  render () {
    return(
      <StyledAuthContainer>
          <StyledAuthButton onClick={this.showLock}>Sign In</StyledAuthButton>{' '}
          <StyledAuthButton>Sign Out</StyledAuthButton> 
      </StyledAuthContainer>
    )
  }
};

export default Header;