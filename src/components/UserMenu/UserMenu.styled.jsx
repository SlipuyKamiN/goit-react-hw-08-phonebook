import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const WelcomeTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 150px;
  height: 40px;
  overflow: hidden;
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
