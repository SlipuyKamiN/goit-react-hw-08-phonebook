import {
  HomeTitle,
  HomeWrapper,
  HomeTextWrapper,
  HomeAuthLinks,
  HomeAuthLinksList,
  HomeDescription,
  UserLogo,
} from 'pages/Home/Home.styled';
import { MdReportGmailerrorred } from 'react-icons/md';

export const ErrorPage = () => {
  return (
    <HomeWrapper>
      <UserLogo>
        <MdReportGmailerrorred size="200px" />
      </UserLogo>
      <HomeTextWrapper>
        <HomeTitle>ERROR 404</HomeTitle>
        <HomeDescription>
          Sorry, page is not found. Try navigate to home page.
        </HomeDescription>
        <HomeAuthLinksList>
          <li>
            <HomeAuthLinks to="/">Home</HomeAuthLinks>
          </li>
        </HomeAuthLinksList>
      </HomeTextWrapper>
    </HomeWrapper>
  );
};

export default ErrorPage;
