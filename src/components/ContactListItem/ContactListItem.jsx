import {
  ListItem,
  DeleteButton,
  ContactName,
  ContactNumber,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserGraduate, FaUserTimes } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
import { getContactsStatus } from 'redux/contactsSelectors';

export const ContactListItem = ({ contact }) => {
  const contactsStatus = useSelector(getContactsStatus);
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  return (
    <ListItem>
      <FaUserGraduate size="40px" />
      <div>
        <ContactName>{name}</ContactName>
        <ContactNumber href={`tel:${number}}`}>
          <LuPhoneCall size="20px" />
          {number}
        </ContactNumber>
      </div>
      <DeleteButton
        type="button"
        disabled={contactsStatus === 'pending'}
        onClick={() => {
          dispatch(deleteContact({ id }));
        }}
      >
        {contactsStatus === 'pending' ? (
          <LoadingIcon size="32px" />
        ) : (
          <FaUserTimes size="20px" />
        )}
      </DeleteButton>
    </ListItem>
  );
};
