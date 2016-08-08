import $ from 'jquery';
// import router from '../router';

let $nav = $(`
  <nav>
    <a href="#posts/new">Make a New Post</a>
    <a href="#posts">See all posts</a>
    <a href="#contacts/new">Add a New Contact</a>
    <a href="#contacts">See all Contacts</a>
  </nav>
`);

export default $nav;
