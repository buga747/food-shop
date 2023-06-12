import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {
  ButtonContainer,
  Form,
  FormContainer,
  InputContainer,
  SubmitButton,
} from "./UserForm.styled";

const UserForm = ({
  handleSubmit,
  handleInputChange,
  formData,
  setCaptchaPassed,
}) => {
  const handleCaptchaChange = (value) => {
    setCaptchaPassed(!!value);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Phone:</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Address:</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <ReCAPTCHA
          sitekey='6LfQjkgmAAAAADzqKllwfh0OhqFSEQwd-lgA4hw0'
          onChange={handleCaptchaChange}
        />
        <ButtonContainer>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
