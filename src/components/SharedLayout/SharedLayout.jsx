import { Link, Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  ImageLogo,
  NavList,
  NavigationLink,
} from './SharedLayout.styled';
import appLogo from 'images/pageLogo.png';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSelectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Header>
        <Link to="/">
          <ImageLogo src={appLogo} alt="logo" />
          Home page
        </Link>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/contacts">Contacts</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/login">LogIn</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/register">Register</NavigationLink>
            </li>
          </NavList>
        </nav>
        {isLoggedIn && <UserMenu />}
      </Header>
      {/* <Suspense fallback={<div>Please wait...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </Container>
  );
};
