import {
  ListItem,
  DeleteButton,
  ContactName,
  ContactNumber,
} from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserGraduate, FaUserTimes } from 'react-icons/fa';

import { LuPhoneCall } from 'react-icons/lu';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
import {
  getContactsError,
  getContactsOperation,
} from 'redux/contactsSelectors';
import { STATUS } from 'redux/constants';
import { notification } from 'components/SharedLayout/notification';
const { FULFILLED } = STATUS;

export const ContactListItem = ({ contact }) => {
  const contactsOperation = useSelector(getContactsOperation);
  const contactsError = useSelector(getContactsError);
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const handleDeleteContact = id => {
    dispatch(deleteContact({ id })).then(response => {
      if (response.meta.requestStatus === FULFILLED && !contactsError) {
        notification(
          `Contact '${name}' has been successfully deleted.`,
          'success'
        );
        return;
      }

      notification(
        'We are failed with deleting your contact. Please, try again...'
      );
    });
  };

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
        disabled={contactsOperation === id}
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        {contactsOperation === id ? (
          <LoadingIcon size="32px" />
        ) : (
          <FaUserTimes size="20px" />
        )}
      </DeleteButton>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
