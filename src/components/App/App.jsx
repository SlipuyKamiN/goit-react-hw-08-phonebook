import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { recoverySession } from 'redux/authOperations';
import Home from 'pages/Home/Home';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recoverySession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="login"
          element={<PublicRoute component={Login} redirectTo="/" />}
        />
        <Route
          path="register"
          element={<PublicRoute component={Register} redirectTo="/" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/ login" />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
