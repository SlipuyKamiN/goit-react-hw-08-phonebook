import {
  ListItem,
  DeleteButton,
  ContactName,
  ContactNumber,
} from './ContactListItem.styled';
import { RotatingLines } from 'react-loader-spinner';
// import { useDeleteContactMutation } from 'redux/contactsSlice';
import { deleteContact } from 'redux/contactsOperations';
import { useDispatch } from 'react-redux';
import { FaUserGraduate, FaUserTimes } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

export const ContactListItem = ({ contact }) => {
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
        disabled={false}
        onClick={() => {
          dispatch(deleteContact({ id }));
        }}
      >
        {false ? (
          <RotatingLines strokeColor="white" width="12" />
        ) : (
          <FaUserTimes size="20px" />
        )}
      </DeleteButton>
    </ListItem>
  );
};
