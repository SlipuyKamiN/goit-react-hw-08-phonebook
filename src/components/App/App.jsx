import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recoverySession } from 'redux/authOperations';
import { getAuthStatus } from 'redux/authSelectors';
import { STATUS } from 'redux/constants';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const ErrorPage = lazy(() => import('components/ErrorPage/ErrorPage'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    dispatch(recoverySession());
  }, [dispatch]);

  return authStatus === STATUS.IDLE ? (
    <LoadingIcon size="150px" />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<RestrictedRoute component={Login} />} />
        <Route
          path="register"
          element={<RestrictedRoute component={Register} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
