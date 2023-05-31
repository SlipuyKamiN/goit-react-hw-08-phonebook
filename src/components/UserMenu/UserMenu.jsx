import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { getAuthStatus, getUserName } from 'redux/authSelectors';
import { LogOutButton, UserMenuWrapper, WelcomeTitle } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';
import { FaUserSecret } from 'react-icons/fa';
import { LoadingIcon } from 'components/SharedLayout/SharedLayout.styled';
import { STATUS } from 'redux/constants';
import { notification } from 'components/SharedLayout/notification';
const { PENDING, REJECTED } = STATUS;

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const authStatus = useSelector(getAuthStatus);

  if (authStatus === REJECTED) {
    notification();
  }

  return (
    <UserMenuWrapper>
      <FaUserSecret size="36px" />
      <WelcomeTitle>{userName}</WelcomeTitle>
      <LogOutButton
        type="button"
        disabled={authStatus === PENDING}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        {authStatus === PENDING ? (
          <LoadingIcon size="32px" />
        ) : (
          <>
            <span>Log out</span>
            <MdLogout size="16px" />
          </>
        )}
      </LogOutButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
