export const getFilter = store => store.filter;

export const getContacts = store => store.contacts;

export const getFilteredContacts = store => {
  const filter = getFilter(store);
  const contacts = getContacts(store);
  // const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
