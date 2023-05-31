import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  margin: 0 auto;
  background-color: #ffffff66;
  box-shadow: #ffffff 0px 0px 20px;

  width: 300px;
  border-radius: 15px;
  padding: 15px;
`;

export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const FormInput = styled.input`
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

export const FormInputLabel = styled.label`
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  width: 100%;
  font-size: 18px;
`;

export const ErrMessage = styled.span`
  max-width: 100%;
  font-size: 14px;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  text-align: center;
  background-color: transparent;
  transition: background-color 250ms linear, color 250ms linear;
  overflow: hidden;

  &:hover,
  &:focus,
  &:disabled {
    cursor: pointer;
    background-color: #00000044;
    color: #fff;
  }
`;
