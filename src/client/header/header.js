import React from 'react';
import styled from 'styled-components';
import Auth0Lock from 'auth0-lock';

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
    console.log(process.env);
    return(
      <a onClick={this.showLock}>Sign In</a>  
    )
  }
};

export default Header;