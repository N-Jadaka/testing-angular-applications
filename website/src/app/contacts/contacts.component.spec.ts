import ContactClass from './shared/models/contact';

fdescribe('Contact class tests', () => {
  let contact: ContactClass = null;

  beforeEach(() => {
    contact = new ContactClass();
  });

  it('should have a valid constructor', () => {
    expect(contact).not.toBeNull();
  });

  it('should set name correctly through constructor', () => {
    contact = new ContactClass('Josh');
    expect(contact.name).toEqual('Josh');
  })

  it('should get and set email correctly', () => {
    contact.email = 'jnezia1@gmail.com';
    expect(contact.email).toEqual('jnezia1@gmail.com');

  });

  it('should get and set number', () => {
    contact.number = '2252259952'
    expect(contact.number).toEqual('2252259952');
  });

  it('should get and set country correctly', () => {
    contact.country = 'United States';
    expect(contact.country).toEqual('United States');
  });

  it('should  get and set favorite correctly', () => {
    contact.favorite = true;
    expect(contact.favorite).toEqual(true);
  });

  afterEach(() => {
    contact = null;
  });

});


