import {
  AppForm,
  ErrMessage,
  FormInput,
  FormInputLabel,
  FormTitle,
  FormWrapper,
  SubmitButton,
} from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { getAuthStatus } from 'redux/authSelectors';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
import { STATUS } from 'redux/constants';
import { notification } from 'components/SharedLayout/notification';
const { PENDING, FULFILLED } = STATUS;

export const LoginForm = () => {
  const emailID = nanoid();
  const passwordID = nanoid();
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
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

  const handleFormSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password })).then(response => {
      if (response.meta.requestStatus === FULFILLED) {
        reset({ email: '', password: '' });
        notification(`Welcome to your 'Be inTouch'`, 'success');
        return;
      }
      notification('Something went wrong. Please, check the inputed info');
    });
  };
  return (
    <FormWrapper>
      <FormTitle>Registered? Please input your data to sign in</FormTitle>
      <AppForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
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
          {authStatus === PENDING ? <LoadingIcon size="32px" /> : 'sign in'}
        </SubmitButton>
      </AppForm>
    </FormWrapper>
  );
};
