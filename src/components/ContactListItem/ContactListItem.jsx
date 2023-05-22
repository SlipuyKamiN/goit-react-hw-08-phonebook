import { ListItem, DeleteButton } from './ContactListItem.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { notification } from 'components/App/App';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, number } = contact;

  return (
    <ListItem>
      {name}: {number}
      <DeleteButton
        type="button"
        disabled={isLoading}
        onClick={() => {
          deleteContact({ id })
            .unwrap()
            .then(() => {
              notification(`Contact "${name}" has been deleted`);
            })
            .catch(() => notification());
        }}
      >
        {isLoading ? (
          <RotatingLines strokeColor="white" width="12" />
        ) : (
          'Delete'
        )}
      </DeleteButton>
    </ListItem>
  );
};
