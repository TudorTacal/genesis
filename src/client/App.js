import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home-page/home-page';
import BlogPost from './blog-post/blog-post';
import NotFound from './not-found/not-found';
import posts from '../model/posts';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts/:id" render={(props) => (
           posts.find(el => el === props.match.params.id) ? 
          <BlogPost {...props} /> :
          <NotFound />
        )} />
        <Route component={NotFound} />
      </Switch>
      </React.Fragment>
    )
  }
}

export default App;