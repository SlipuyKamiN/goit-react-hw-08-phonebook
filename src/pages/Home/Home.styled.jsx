import styled from '@emotion/styled';
import { MdContacts, MdOutlineContacts } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const AppLogo = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const ContactsLogo1 = styled(MdContacts)`
  position: absolute;
  top: 0;
  left: 0;
  animation: slideIcon 6s infinite;
`;

export const UserLogo = styled.div`
  position: relative;
  width: 200px;

  text-align: center;

  svg {
    margin-bottom: 20px;
  }
`;

export const UserName = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const UserEmail = styled.p`
  font-size: 18px;
`;

export const HomeTextWrapper = styled.div`
  max-width: 568px;
`;

export const HomeTitle = styled.h1`
  margin-bottom: 20px;
`;

export const HomeDescription = styled.p`
  margin-bottom: 20px;
`;

export const ContactsLogo2 = styled(MdOutlineContacts)`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  animation: slideIcon 6s infinite 3s;
`;

export const HomeAuthLinksList = styled.ul`
  display: flex;
  gap: 20px;
  text-align: center;
`;

export const HomeAuthLinks = styled(Link)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  width: 150px;

  padding: 10px;
  border-radius: 4px;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  background-color: transparent;
  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus,
  &:disabled {
    cursor: pointer;
    background-color: #00000044;
    color: #fff;
  }
`;
