import $ from 'jquery';
import Backbone from 'backbone';
import $login from './views/login';
import $nav from './views/nav';
import renderPosts from './views/post-list';
import renderPostForm from './views/post-form';
import postsCollection from './collections/posts'
import renderContacts from './views/contact-list';
import renderContactForm from './views/contact-form';
import contactsCollection from './collections/contacts';

const Router = Backbone.Router.extend({
  routes: {
    login         : 'loginFunction',
    posts         : 'postsFunction',
    'posts/new'   : 'newPostFunction',
    contacts      : 'contactsFunction',
    'contacts/new': 'newContactFunction',
    '/*'          : 'loginFunction'
  },
  loginFunction: function () {
    $('.container').empty().append($login);
  },
  postsFunction: function () {
    postsCollection.fetch();
    let $postList = renderPosts(postsCollection);
    $('.container').empty().append($nav).append($postList);
  },
  newPostFunction: function () {
    let $newPost = renderPostForm();
    $('.container').empty().append($nav).append($newPost);
  },
  contactsFunction: function () {
    contactsCollection.fetch();
    let $contactList = renderContacts(contactsCollection);
    $('.container').empty().append($nav).append($contactList);
  },
  newContactFunction: function () {
    let $newContact = renderContactForm();
    $('.container').empty().append($nav).append($newContact);
  }
});

const router = new Router();
export default router;
