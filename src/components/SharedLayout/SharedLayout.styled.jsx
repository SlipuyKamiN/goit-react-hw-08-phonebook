import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  outline: red;
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  /* position: fixed; */
  border-bottom: 1px solid black;
`;

export const ImageLogo = styled.img`
  width: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    border-bottom: 1px solid red;
  }
`;
