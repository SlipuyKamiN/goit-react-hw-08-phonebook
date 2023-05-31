import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px 0;

  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  font-weight: 600;

  &.active {
    color: #ffffff;
    border-bottom: 3px solid #ffffff;
  }
`;
