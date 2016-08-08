import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  idAttribute:'_id',
  urlRoot: `https://tiny-za-server.herokuapp.com/collections/tgContacts`,
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  }
});
export default Contact;
