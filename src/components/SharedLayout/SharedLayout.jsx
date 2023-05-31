import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  AppLogo,
  MainWrapper,
  ContactsLogo1,
  ContactsLogo2,
  LogoWrapper,
} from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSelectors';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Header>
        <LogoWrapper to="/">
          <AppLogo>
            <ContactsLogo1 size="50px" className="firstChild" />
            <ContactsLogo2 size="50px" className="secondChild" />
          </AppLogo>
          <h2>Be inTouch</h2>
        </LogoWrapper>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </Header>
      <Suspense fallback={<div>Please wait...</div>}>
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </Suspense>
    </Container>
  );
};
