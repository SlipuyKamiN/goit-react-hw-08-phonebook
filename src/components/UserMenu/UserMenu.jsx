import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(state => state.user.email);

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
