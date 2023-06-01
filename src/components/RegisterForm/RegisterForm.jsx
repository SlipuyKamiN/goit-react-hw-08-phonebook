import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from 'redux/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  AppForm,
  ErrMessage,
  FormInput,
  FormInputLabel,
  FormTitle,
  FormWrapper,
  SubmitButton,
} from './RegisterForm.styled';
import { nanoid } from 'nanoid';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
import { getAuthStatus } from 'redux/authSelectors';
import { STATUS } from 'redux/constants';
import { notification } from 'components/SharedLayout/notification';
const { PENDING, FULFILLED } = STATUS;

export const RegisterForm = () => {
  const nameID = nanoid();
  const emailID = nanoid();
  const passwordID = nanoid();
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    email: yup
      .string()
      .matches(
        '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        'Email can contain letters, digits and may contain "@" and "." example@mail.com'
      )
      .required(),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ name, email, password }) => {
    dispatch(createNewUser({ name, email, password })).then(response => {
      if (response.meta.requestStatus === FULFILLED) {
        reset({ name: '', email: '', password: '' });
        notification(`Welcome to your 'Be inTouch'`, 'success');
        return;
      }
      notification(
        'Please, check the inputed info. Maybe, you already have an account?'
      );
    });
  };
  return (
    <FormWrapper>
      <FormTitle>Please register to get access to application</FormTitle>
      <AppForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInputLabel htmlFor={nameID}>name</FormInputLabel>
        <FormInput type="name" {...register('name')} id={nameID}></FormInput>
        {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
        <FormInputLabel htmlFor={emailID}>Email</FormInputLabel>
        <FormInput type="email" {...register('email')} id={emailID}></FormInput>
        {errors.email && <ErrMessage>{errors.email.message}</ErrMessage>}
        <FormInputLabel htmlFor={passwordID}>Password</FormInputLabel>
        <FormInput
          type="password"
          {...register('password')}
          id={passwordID}
        ></FormInput>
        {errors.password && <ErrMessage>{errors.password.message}</ErrMessage>}
        <SubmitButton type="submit" disabled={authStatus === PENDING}>
          {authStatus === PENDING ? <LoadingIcon size="32px" /> : 'sign up'}
        </SubmitButton>
      </AppForm>
    </FormWrapper>
  );
};
