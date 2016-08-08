import Backbone from 'backbone';
import Contact from '../models/contact';

const Contacts = Backbone.Collection.extend({
  model: Contact,
  url: `https://tiny-za-server.herokuapp.com/collections/tgContacts`
});

let contactsCollection = new Contacts();
export default contactsCollection;
