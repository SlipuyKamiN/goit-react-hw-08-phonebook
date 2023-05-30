import { Form, Input, RegisterButton } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { createNewUser } from 'redux/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
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
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ name, email, password }) => {
    dispatch(createNewUser({ name, email, password }));
    reset({ name: '', email: '', password: '' });
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <Input type="name" {...register('name')}></Input>
      <Input type="email" {...register('email')}></Input>
      <Input type="password" {...register('password')}></Input>
      <RegisterButton type="submit">Login</RegisterButton>
    </Form>
  );
};
