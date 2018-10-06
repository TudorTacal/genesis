import React from 'react';
import styled from 'styled-components';
import Lock from '../../utils/auth0lock';

class Header extends React.Component {
  showLock = () => {
    // Show the Auth0Lock widget
    this.lock.show();
  };
  componentDidMount() {
    this.lock = Lock;
  }
  render () {
    return(
      <a onClick={this.showLock}>Sign In</a>  
    )
  }
};

export default Header;