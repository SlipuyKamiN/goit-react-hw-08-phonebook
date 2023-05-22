import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid red;
  background-color: transparent;
  &:hover,
  &:focus,
  &:disabled {
    color: #fff;
    background-color: grey;
  }
`;
