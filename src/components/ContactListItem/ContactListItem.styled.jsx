import styled from '@emotion/styled';

export const ListItem = styled.li`
  height: 60px;
  width: 350px;
  display: flex;

  padding: 5px 0;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid #000000;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: -1;
  visibility: hidden;
  pointer-events: none;

  &:checked + label {
    color: #ffffff;
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #ffffff66;
  }
`;

export const ContactName = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ContactNumber = styled.a`
  svg {
    margin-right: 5px;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  text-align: center;
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
