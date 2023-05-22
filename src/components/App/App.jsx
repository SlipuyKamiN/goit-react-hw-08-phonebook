import {
  PhonebookWrapper,
  PhonebookTitle,
  PhonebookSubTitle,
} from './App.styled';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFetchAllQuery } from 'redux/contactsSlice';

export const notification = (
  message = 'Something went wrong...',
  type = 'error'
) => {
  const toastConfig = {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  if (type === 'success') {
    toast.success(message, toastConfig);
    return;
  }

  toast.error(message, toastConfig);
};

export const App = () => {
  const {
    data: contacts = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useFetchAllQuery();

  const isContacts = isSuccess && contacts.length !== 0;

  return (
    <PhonebookWrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      {!isContacts && !isFetching && !isError && (
        <span>There are no contacts in your phonebook, yet.</span>
      )}
      {isContacts && <Filter />}
      {isLoading && (
        <>
          <span>Updating, please wait... </span>
          <RotatingLines strokeColor="gray" width="20" />
        </>
      )}
      {isContacts && <ContactList />}
      {isError && <span>Oops, something went wrong. Please try again!</span>}
      <ToastContainer />
    </PhonebookWrapper>
  );
};
