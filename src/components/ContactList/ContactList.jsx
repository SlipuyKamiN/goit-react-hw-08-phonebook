import { ContactsList } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { useFetchAllQuery } from 'redux/contactsSlice';

export const ContactList = () => {
  const { data: contacts } = useFetchAllQuery();
  const filterValue = useSelector(({ filter }) => filter);

  const filteredContacts = (() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ContactsList>
    </>
  );
};
