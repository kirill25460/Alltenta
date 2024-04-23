import ContactUsPhoto from '../../Images/Rectangle 26.png';
import ContactUs360 from '../../Images/ContactUs360.png';
import ContactUs768 from '../../Images/ContactUs768.png';
import {
  Container,
  StyledInput,
  ContainerForm,
  StyledMessage,
  ButtonForm,
  Text,
  ContactUsImg,
  StyledLink,
  MailIcon,
  PhonIcon,
  ContactWrap,
  InfoWrap,
} from './ContactUs.styled';
// import { useState } from 'react';

export const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   contact: '',
  //   interestedIn: '',
  //   message: '',
  // });

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <Container id="order">
      <InfoWrap>
        <Text>Готові до замовлення або залишились запитання?</Text>
        <picture>
          <source media="(max-width:768px)" srcSet={ContactUs360} />
          <source
            media="(min-width: 769px) and (max-width: 1200px)"
            srcSet={ContactUs768}
          />
          <ContactUsImg src={ContactUsPhoto} alt="p" />
        </picture>
        <div>
          <ContactWrap>
            {' '}
            <StyledLink href="tel:+38097 033 29 29">
              <PhonIcon />
              +097 033-29-29
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
        </div>
      </InfoWrap>

      <ContainerForm>
        <StyledInput
          type="text"
          name="name"
          placeholder="ІМ’Я"
          // value={formData.name}
          // onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="contact"
          placeholder="ТЕЛЕФОН/ЕМЕЙЛ"
          // value={formData.contact}
          // onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="interestedIn"
          placeholder="ЗАЦІКАВЛЕНИЙ В"
          // value={formData.interestedIn}
          // onChange={handleChange}
        />
        <StyledMessage
          type="text"
          name="message"
          placeholder="Повідомлення"
          // value={formData.message}
          // onChange={handleChange}
        />
        <ButtonForm type="submit">ВІДПРАВИТИ</ButtonForm>
      </ContainerForm>
    </Container>
  );
};
