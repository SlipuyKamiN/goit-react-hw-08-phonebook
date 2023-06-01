import { useEffect } from 'react';
import { ContactsList } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/contactsOperations';
import { getContacts, getContactsOperation } from 'redux/contactsSelectors';
import { getIsLoggedIn } from 'redux/authSelectors';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
import { notification } from 'components/SharedLayout/notification';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactsOperation = useSelector(getContactsOperation);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const filterValue = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn &&
      dispatch(fetchAll()).catch(() => {
        notification(
          'We are failed with loading your contacts. Please, try again..'
        );
      });
  }, [dispatch, isLoggedIn]);

  const filteredContacts = (() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return contactsOperation === 'fetchAll' ? (
    <LoadingIcon size="150px" />
  ) : (
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
