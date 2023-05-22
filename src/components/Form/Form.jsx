import {
  AppForm,
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
} from './Form.styled';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useFetchAllQuery, useAddContactMutation } from 'redux/contactsSlice';
import { RotatingLines } from 'react-loader-spinner';
import { notification } from 'components/App/App';

export const ContactForm = () => {
  const nameID = nanoid();
  const numberID = nanoid();
  const { data: contacts = [] } = useFetchAllQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

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

  const handleFormSubmit = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const isNameAlreadyInContacts = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isNameAlreadyInContacts) {
      notification(`"${name}" is already in contacts.`);
      return;
    }

    addContact({ name, number })
      .unwrap()
      .then(() => {
        notification(
          `Contact "${name}" has been successfully added`,
          'success'
        );
        reset({ name: '', number: '' });
      })
      .catch(notification);
  };

  return (
    <AppForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormInputLabel htmlFor={nameID}>Name</FormInputLabel>
      <FormInput type="text" {...register('name')} id={nameID} />
      {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
      <FormInputLabel htmlFor={numberID}>Number</FormInputLabel>
      <FormInput type="text" {...register('number')} id={numberID} />
      {errors.number && <ErrMessage>{errors.number.message}</ErrMessage>}
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? (
          <RotatingLines strokeColor="white" width="12" />
        ) : (
          'Submit'
        )}
      </SubmitButton>
    </AppForm>
  );
};
