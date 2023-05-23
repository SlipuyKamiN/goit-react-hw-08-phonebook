import { Form, Input, LoginButton } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', 'Wrong email format')
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
    dispatch(logIn({ email, password }));
    reset({ email: '', password: '' });
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <Input type="email" {...register('email')}></Input>
      <Input type="password" {...register('password')}></Input>
      <LoginButton type="submit">Login</LoginButton>
    </Form>
  );
};
