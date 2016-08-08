import $ from 'jquery';
import Backbone from 'backbone';
import $login from './views/login';
import renderPosts from './views/post-list';
import postsCollection from './collections/posts'
import $nav from './views/nav';
import renderPostForm from './views/post-form';


const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    posts: 'postsFunction',
    'posts/new': 'newPostFunction',
    '/*': 'loginFunction'
  },
  loginFunction: function () {
    $('.container').empty().append($login);
  },
  postsFunction: function () {
    let $postList = renderPosts(postsCollection);
    $('.container').empty().append($nav).append($postList);
  },
  newPostFunction: function () {
    let $newPost = renderPostForm();
    $('.container').empty().append($nav).append($newPost);
  }
});

const router = new Router();
export default router;
