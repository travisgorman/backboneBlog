import $ from 'jquery';
import postsCollection from '../collections/posts';
import router from '../router';

import user from '../models/username';

function postForm() {
  let $newPost = $(`
      <div class="post-form">
        <h2>Write a New Post</h2>
        <form>
          <input
            type="text"
            name="title"
            class="new-post-title"
            placeholder="Title" />
          <textarea name="body" placeholder="write your blogstuff here"> </textarea>
            <input
              type="submit"
              name="submit"
              class="submit-button"
              value="submit" />
        </form>
      </div>
  `);

  $newPost.find('input[type="submit"]')
    .on('click', function(evt){
      console.log(evt);
      evt.preventDefault();
      postsCollection.create({
          author: user.username,
          title: $('.new-post-title').val(),
          body: $('textarea').val()
      }, {
          success:function (response) {
            router.navigate('posts', {trigger: true});
          }
      });
    });
  return $newPost;

}
export default postForm;
