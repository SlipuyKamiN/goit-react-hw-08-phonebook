import { NavList, NavigationLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavList>
        {isLoggedIn ? (
          <>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/contacts">Contacts</NavigationLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavigationLink to="/login">LogIn</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/register">Register</NavigationLink>
            </li>
          </>
        )}
      </NavList>
    </nav>
  );
};
