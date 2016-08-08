import $ from 'jquery';
import contactsCollection from '../collections/contacts';
import router from '../router';

import user from '../models/username';

function contactForm() {
  let $newContact = $(`
      <div class="contact-form">
        <h2>Add a New Contact</h2>
        <form>
          <input
            type="text"
            name="firstName"
            class="firstName"
            placeholder="First Name" />
          <input
            type="text"
            name="lastName"
            class="lastName"
            placeholder="Last Name" />
          <input
            type="text"
            name="address"
            class="address"
            placeholder="Address" />
          <input
            type="text"
            name="phone"
            class="phone"
            placeholder="Phone Number" />
          <input
            type="submit"
            name="submit"
            class="submit-button"
            value="submit" />
        </form>
      </div>
  `);

  $newContact.find('input[type="submit"]')
    .on('click', function(evt){
      console.log(evt);
      evt.preventDefault();
      contactsCollection.create({
          firstName: $('.firstName').val(),
          lastName: $('.lastName').val(),
          address: $('.address').val(),
          phone: $('.phone').val()
      }, {
          success:function (response) {
            router.navigate('contacts', {trigger: true});
          }
      });
    });
  return $newContact;

}
export default contactForm;
