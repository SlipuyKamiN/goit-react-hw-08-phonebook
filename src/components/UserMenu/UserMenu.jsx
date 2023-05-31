import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { getUserName } from 'redux/authSelectors';
import { LogOutButton, UserMenuWrapper, WelcomeTitle } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';
import { FaUserSecret } from 'react-icons/fa';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <UserMenuWrapper>
      <FaUserSecret size="36px" />
      <WelcomeTitle>{userName}</WelcomeTitle>
      <LogOutButton
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        <span>Log out</span>
        <MdLogout size="16px" />
      </LogOutButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
