const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { getIsLoggedIn } = require('redux/authSelectors');

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
