import { ContactsComponent } from "./contacts.component";
import { Contact } from './shared/models/contact.model';

describe('ContactsComponents Tests', () => {
  let contactsComponent: ContactsComponent = null;

  beforeEach(() => {
    contactsComponent = new ContactsComponent();
  });

  it('should set instance correctly', () => {
    expect(contactsComponent).not.toBeNull();
  });

  it('should be no contacts if there is no data', () => {
    expect(contactsComponent.contacts.length).toBe(0);
  });

  //create fake subscript

  it('should be contacts if there is data', () => {
    const newContact: Contact = {
      id: 1,
      name: 'Jason Pipemaker'
    };
    const contactsList: Array<Contact> = [newContact];
    contactsComponent.contacts = contactsList;

    expect(contactsComponent.contacts.length).toBe(1);
  });




});
