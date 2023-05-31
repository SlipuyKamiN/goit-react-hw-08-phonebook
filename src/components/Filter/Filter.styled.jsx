import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 350px;
  margin-bottom: 25px;
`;

export const FilterInput = styled.input`
  padding: 10px;
  margin: 0;
  width: 100%;
  font-size: 24px;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #00000044;
  outline: 3px solid transparent;

  transition: outline 250ms linear;

  &:focus {
    outline: 3px solid #000000;
  }
`;

export const FilterLabel = styled.label`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
`;

export const AddContactButton = styled.button`
  display: block;
  flex-shrink: 0;
  width: 50px;
  height: 50px;

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
