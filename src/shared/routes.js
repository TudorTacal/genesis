import HomePage from '../client/home-page/home-page';
import BlogPost from '../client/blog-post/blog-post';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/posts',
    component: BlogPost
  }
]

export default routes;