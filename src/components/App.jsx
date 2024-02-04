import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.box}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.boxContacts}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
