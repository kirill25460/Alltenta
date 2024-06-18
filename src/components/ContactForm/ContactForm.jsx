import { useEffect, useState } from 'react';
import {
  ButtonForm,
  ContactFormBlock,
  ContactFormConteiner,
  ContactFormMainText,
  ContactFormText,
  // ContactWrap,
  ContainerForm,
  // MailIcon,
  // PhonIcon,
  StyledInput,
  StyledInputEmail,
  // StyledLink,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        return setScreenWidth(true);
      } else {
        return setScreenWidth(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <ContactFormConteiner>
      <ContactFormBlock>
        <ContactFormMainText>
          Готові до замовлення або залишились запитання?
        </ContactFormMainText>
        {screenWidth ? (
          <></>
        ) : (
          <ContactFormText>
            Залиште свій номер телефону та ім’я, після чого ми зв’яжемось з вами
            з приводу будь-яких питань, котрі стосуються продукції.
          </ContactFormText>
        )}
      </ContactFormBlock>
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
        {/* <ContactWrap>
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
        </ContactWrap> */}
        <ButtonForm type="submit">ВІДПРАВИТИ</ButtonForm>
      </ContainerForm>
    </ContactFormConteiner>
  );
};
