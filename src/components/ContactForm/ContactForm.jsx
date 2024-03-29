import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsBooks-slice';
import { getFilteredContacts } from '../../redux/selectors';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const nameId = nanoid();
  const phoneId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const isDublicateName = name => {
    const normalizedName = name.toLowerCase();
    const dublicateName = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedName === normalizedCurrentName;
    });
    return Boolean(dublicateName);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, number };
    if (isDublicateName(name)) {
      setName('');
      setNumber('');
      return alert(`${name} is alredy in contacts`);
    }

    dispatch(addContact(data));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />

      <label htmlFor={phoneId}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        id={phoneId}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};
