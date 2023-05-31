import {
  AppForm,
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
  Backdrop,
  FormTitle,
  FormWrapper,
  CloseButton,
} from './ModalForm.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RotatingLines } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ModalForm = ({ toggleModal }) => {
  const nameID = nanoid();
  const numberID = nanoid();
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: yup
      .string()
      .matches(
        '^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$',
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleToggleModal = event => {
    const isEventModalControlElement =
      event.currentTarget.dataset?.openModal ||
      event.target.dataset?.closeModal ||
      event.target.dataset?.backdrop ||
      event.code === 'Escape';

    if (isEventModalControlElement) {
      toggleModal();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModal);
    return () => {
      window.removeEventListener('keydown', handleToggleModal);
    };
  });

  const handleFormSubmit = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const isNameAlreadyInContacts = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isNameAlreadyInContacts) {
      // notification(`"${name}" is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset({ name: '', number: '' });
    toggleModal();
  };

  return createPortal(
    <Backdrop data-backdrop onClick={handleToggleModal}>
      <FormWrapper>
        <CloseButton data-close-modal onClick={handleToggleModal}>
          <AiOutlineCloseCircle size="25px" data-close-modal />
        </CloseButton>
        <AppForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
          <FormTitle>Fill the form below, to add your new contact.</FormTitle>
          <FormInputLabel htmlFor={nameID}>Name</FormInputLabel>
          <FormInput type="text" {...register('name')} id={nameID} />
          {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
          <FormInputLabel htmlFor={numberID}>Number</FormInputLabel>
          <FormInput type="text" {...register('number')} id={numberID} />
          {errors.number && <ErrMessage>{errors.number.message}</ErrMessage>}
          <SubmitButton type="submit" disabled={false}>
            {false ? (
              <RotatingLines strokeColor="white" width="12" />
            ) : (
              'Add contact'
            )}
          </SubmitButton>
        </AppForm>
      </FormWrapper>
    </Backdrop>,
    modalRoot
  );
};
