import { ListItem, DeleteButton } from './ContactListItem.styled';
import { RotatingLines } from 'react-loader-spinner';
// import { useDeleteContactMutation } from 'redux/contactsSlice';
import { deleteContact } from 'redux/contactsOperations';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  return (
    <ListItem>
      {name}: {number}
      <DeleteButton
        type="button"
        disabled={false}
        onClick={() => {
          dispatch(deleteContact({ id }));
        }}
      >
        {false ? <RotatingLines strokeColor="white" width="12" /> : 'Delete'}
      </DeleteButton>
    </ListItem>
  );
};
