import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { getUserName } from 'redux/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div>
      <p>Welcome, {userName}</p>
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
