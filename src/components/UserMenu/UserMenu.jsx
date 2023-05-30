import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { getUserEmail } from 'redux/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(getUserEmail);

  return (
    <div>
      <p>{userMail}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
