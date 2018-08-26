import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home-page/home-page';
import BlogPost from './blog-post/blog-post';
import NotFound from './not-found/not-found';

const AppContainer = styled.div`
  padding: 0 25px 0 25px;
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
      </React.Fragment>
    )
  }
}

export default App;