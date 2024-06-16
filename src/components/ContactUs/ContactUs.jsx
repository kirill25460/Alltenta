import { useEffect, useState } from 'react';
import ContactUsPhoto from '../../Images/img5.png';
import ContactUs360 from '../../Images/img5_mob(1).jpeg';
// import ContactUs360 from '../../Images/img5_mob.png';
import ContactUs768 from '../../Images/img5_tab(1).jpeg';
// import ContactUs768 from '../../Images/img5_tab.png';
import {
  Container,
  StyledInput,
  ContainerForm,
  ButtonForm,
  Text,
  ContactUsImg,
  StyledLink,
  MailIcon,
  PhonIcon,
  ContactWrap,
  InfoWrap,
  ContactFormConteiner,
  StyledInputEmail,
  ContactWrapConteiner,
} from './ContactUs.styled';
// import { useState } from 'react';

export const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   contact: '',
  // });

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container id="order">
      {isMobile ? (
        <Text>Ми розрахуємо вартість вашого замовлення безкоштовно!</Text>
      ) : (
        <></>
      )}
      <InfoWrap>
        <picture>
          <source media="(max-width:768px)" srcSet={ContactUs360} />
          <source
            media="(min-width: 769px) and (max-width: 1024px)"
            srcSet={ContactUs768}
          />
          <ContactUsImg src={ContactUsPhoto} alt="Altenta" />
        </picture>
      </InfoWrap>
      <ContactFormConteiner>
        {isMobile ? (
          <></>
        ) : (
          <Text>Ми розрахуємо вартість вашого замовлення безкоштовно!</Text>
        )}
        <ContainerForm>
          <StyledInput
            type="text"
            name="name"
            placeholder="ІМ’Я"
            // value={formData.name}
            // onChange={handleChange}
          />
          <StyledInputEmail
            type="text"
            name="contact"
            placeholder="ТЕЛЕФОН/ЕМЕЙЛ"
            // value={formData.contact}
            // onChange={handleChange}
          />
          <ButtonForm type="submit">ВІДПРАВИТИ</ButtonForm>
        </ContainerForm>
        <ContactWrapConteiner>
          <ContactWrap>
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
        </ContactWrapConteiner>
      </ContactFormConteiner>
    </Container>
  );
};
