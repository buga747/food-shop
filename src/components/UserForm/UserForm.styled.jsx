import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  flex-basis: 50%;
`;

export const Form = styled.form`
  width: 400px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0d47a1;
  }
`;
