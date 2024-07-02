import React, { useState } from 'react';
import axios from 'axios';
import {
  ButtonForm,
  ContactBlock,
  ContactConteiner,
  ContactMainText,
  ContactWrap,
  ContainerFormItem,
  MailIcon,
  PhonIcon,
  StyledInput,
  StyledInputEmail,
  StyledLink,
} from './Contact.styled';

export const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/send', formData);
      alert('Message sent successfully');
    } catch (error) {
      alert('Failed to send message');
    }

    setFormData({
      name: '',
    contact: ''
    });
  };



  return (
    <ContactConteiner>
      <ContactBlock>
        <ContactMainText>
          Готові до замовлення або залишились запитання?
        </ContactMainText>
      </ContactBlock>
      <ContainerFormItem>
        <StyledInput
          type="text"
          name="name"
          placeholder="ІМ’Я"
          value={formData.name}
          onChange={handleChange}
        />
        <StyledInputEmail
          type="text"
          name="contact"
          placeholder="ТЕЛЕФОН/ЕМЕЙЛ"
          value={formData.contact}
          onChange={handleChange}
        />
        <ButtonForm type="submit">ВІДПРАВИТИ</ButtonForm>
        <ContactWrap>
          {' '}
          <StyledLink href="tel:+38093 033 29 29">
            <PhonIcon />
            +093 033-29-29
          </StyledLink>
          <StyledLink href="mailto:manager@alltenta.info">
            <MailIcon />
            manager@alltenta.info
          </StyledLink>
        </ContactWrap>
        <ContactWrap>
          {' '}
          <StyledLink href="tel:+38093 033 29 29">
            <PhonIcon />
            +093 033-29-29
          </StyledLink>
          <StyledLink href="mailto:manager@alltenta.info">
            <MailIcon />
            manager@alltenta.info
          </StyledLink>
        </ContactWrap>
      </ContainerFormItem>
    </ContactConteiner>
  );
};
