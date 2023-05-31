import { AuthHome } from 'components/Home/AuthHome';
import { UnAuthHome } from 'components/Home/UnAuthHome';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSelectors';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <AuthHome /> : <UnAuthHome />;
};

export default Home;
