import { useEffect } from 'react';
import { ContactsList } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/contactsOperations';
import { getContacts } from 'redux/contactsSelectors';
import { getIsLoggedIn } from 'redux/authSelectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const filterValue = useSelector(({ filter }) => filter);

  useEffect(() => {
    isLoggedIn && dispatch(fetchAll());
  }, [dispatch, isLoggedIn]);

  const filteredContacts = (() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <ContactsList>
      {contacts.length > 0 ? (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      ) : (
        <span>There are no contacts in your phonebook, yet.</span>
      )}
    </ContactsList>
  );
};
