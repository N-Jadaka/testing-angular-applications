import { ContactsComponent } from "./contacts.component";
import { Contact } from './shared/models';

fdescribe('ContactsComponents Tests', () => {
  let contactsComponent: ContactsComponent = null;
  beforeEach(() => {
    contactsComponent = new ContactsComponent();
  });

  it('should set instance correctly', () => {
    expect(contactsComponent).not.toBeNull();
  });



});
