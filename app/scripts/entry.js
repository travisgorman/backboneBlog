import Backbone from 'backbone';
import $ from 'jquery';

import router from './router';
import session from './models/username';

console.log(session.username);

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger:true});
}
