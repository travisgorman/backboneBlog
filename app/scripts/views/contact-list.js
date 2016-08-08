import $ from 'jquery';
import moment from 'moment';

function renderContacts(contactsCollection) {
  let $contactList = $(`
    <div class="contact-list">
      <h2>Contacts<f/h2>
      <ul>
      </ul>
    </div>
  `);

  function renderSingleContact(contact) {
    let $contactItem = $(`
        <li class="contact-list-item">
          <h3 class="contact-name">
            ${contact.get('lastName')} ,
            ${contact.get('firstName')}
          </h3>
          <span class="address">
            ${contact.get('address')}
          </span>
          <span class="phone">
            ${contact.get('phone')}
          </span>
        </li>
    `);

    $contactList.find('ul').append($contactItem);
  }

  contactsCollection.on('add', renderSingleContact);
  contactsCollection.forEach(renderSingleContact);

  return $contactList;

}

export default renderContacts;
