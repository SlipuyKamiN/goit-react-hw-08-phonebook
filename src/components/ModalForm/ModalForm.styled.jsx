import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000066;
  backdrop-filter: blur(4px);
  overflow-y: scroll;
`;

export const FormWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffffcc;
  box-shadow: #ffffff 0px 0px 20px;

  width: 300px;
  border-radius: 15px;
  padding: 15px;
`;

export const CloseButton = styled.button`
  display: block;
  margin-left: auto;
  margin-bottom: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  padding: 0;
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
  padding: 10px;
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
