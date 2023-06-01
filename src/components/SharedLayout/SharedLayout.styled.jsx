import styled from '@emotion/styled';
import { MdContacts, MdOutlineContacts } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: none;
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 60px;
  }
`;

export const Header = styled.header`
  @media screen and (max-width: 768px) {
    position: static;
    flex-direction: column;
    flex-wrap: wrap;
    height: 240px;
  }

  width: 100%;
  position: fixed;
  padding: 0 20px;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  height: 60px;
  border-bottom: 3px solid black;
  backdrop-filter: blur(10px);
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AppLogo = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
`;

export const ContactsLogo1 = styled(MdContacts)`
  position: absolute;
  top: 0;
  left: 0;
  animation: slideIcon 6s infinite;
`;

export const ContactsLogo2 = styled(MdOutlineContacts)`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  animation: slideIcon 6s infinite 3s;
`;

export const MainWrapper = styled.main`
  padding: 100px 0 40px;
`;

export const LoadingIcon = styled(FaReact)`
  display: block;
  margin-top: 100px;
  margin: auto;
  animation: loading 2s linear;
`;
