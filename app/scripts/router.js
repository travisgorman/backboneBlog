import $ from 'jquery';
import Backbone from 'backbone';
import $login from './views/login';
import renderPosts from './views/post-list';
import postsCollection from './collections/posts'

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    posts: 'postsFunction',
    '/*': 'loginFunction'
  },
  loginFunction: function () {
    $('.container').empty().append($login)
  },
  postsFunction: function () {
    let $postList = renderPosts(postsCollection);
    $('.container').empty().append($postList);
  }
});

const router = new Router();
export default router;
