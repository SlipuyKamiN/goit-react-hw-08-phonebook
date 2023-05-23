import {
  PhonebookWrapper,
  PhonebookTitle,
  PhonebookSubTitle,
} from './App.styled';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ModalForm/ModalForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFetchAllQuery } from 'redux/contactsSlice';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import { useLogInMutation, useLogOutMutation } from 'redux/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from 'redux/authOperations';

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
  // const {
  //   data: contacts = [],
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   isError,
  // } = useFetchAllQuery();

  // const isContacts = isSuccess && contacts.length !== 0;

  // const [logIn, { data }] = useLogInMutation();
  // const [logOut, { data: logOutData }] = useLogOutMutation();

  useEffect(() => {
    // logIn({
    //   // name: 'razerq',
    //   email: 'razer@mail.com',
    //   password: 'qwe123qwe',
    // });
    // logOut();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Contacts />} />
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );

  // return (
  //   <PhonebookWrapper>
  //     <PhonebookTitle>Phonebook</PhonebookTitle>
  //     <ContactForm />
  //     <PhonebookSubTitle>Contacts</PhonebookSubTitle>
  //     {!isContacts && !isFetching && !isError && (
  //       <span>There are no contacts in your phonebook, yet.</span>
  //     )}
  //     {isContacts && <Filter />}
  //     {isLoading && (
  //       <>
  //         <span>Updating, please wait... </span>
  //         <RotatingLines strokeColor="gray" width="20" />
  //       </>
  //     )}
  //     {isContacts && <ContactList />}
  //     {isError && <span>Oops, something went wrong. Please try again!</span>}
  //     <ToastContainer />
  //   </PhonebookWrapper>
  // );
};
