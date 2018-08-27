import HomePage from '../client/home-page/home-page';
import BlogPost from '../client/blog-post/blog-post';
// created for dynamic routing which didn't behave as instructed
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