const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { getIsLoggedIn } = require('redux/authSelectors');

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAllowed = !isLoggedIn;

  return isAllowed ? <Component /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
