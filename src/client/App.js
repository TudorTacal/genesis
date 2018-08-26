import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import routes from '../shared/routes';
import HomePage from '../client/home-page/home-page';
import BlogPost from '../client/blog-post/blog-post';

const AppContainer = styled.div`
  padding: 0 25px 0 25px;
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={BlogPost} />
      </React.Fragment>
    )
  }
}

export default App;