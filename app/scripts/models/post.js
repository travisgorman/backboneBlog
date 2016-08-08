import Backbone from 'backbone';

const Post = Backbone.Model.extend({
  idAttribute:'_id',
  urlRoot: `https://tiny-za-server.herokuapp.com/collections/tgBlogPosts`,
  defaults: {
    timestamp: new Date(),
  }
});
export default Post;
