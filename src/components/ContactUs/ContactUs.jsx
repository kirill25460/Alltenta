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

export const ContactUs = () => {
  return (
    <Container id="order">
      <InfoWrap>
        <Text>Готові до замовлення або залишились запитання?</Text>
        <picture>
          <source media="(max-width:768px)" srcSet={ContactUs360} />
          <source media="(min-width: 769px) and (max-width: 1200px)" srcSet={ContactUs768} />
          <ContactUsImg src={ContactUsPhoto} alt="p" />
        </picture>  
        <div>
          <ContactWrap>
            {' '}
            <StyledLink href="tel:+38097 033 29 29">
              <PhonIcon />
              +097 033-29-29
            </StyledLink>
            <StyledLink href="mailto:manager@alltenta.com">
              <MailIcon />
              manager@alltenta.com
            </StyledLink>
          </ContactWrap>
          <ContactWrap>
            {' '}
            <StyledLink href="tel:+38093 033 29 29">
              <PhonIcon />
              +093 033-29-29
            </StyledLink>
            <StyledLink href="mailto:manager@alltenta.com">
              <MailIcon />
              manager@alltenta.com
            </StyledLink>
          </ContactWrap>
        </div>
      </InfoWrap>
   
        <ContainerForm>
          <StyledInput type="text" name="name" placeholder="ІМ’Я" />
          <StyledInput type="text" name="contact" placeholder="ТЕЛЕФОН/ЕМЕЙЛ" />
          <StyledInput
            type="text"
            name="interestedIn"
            placeholder="ЗАЦІКАВЛЕНИЙ В"
          />
          <StyledMessage
            type="text"
            name="message"
            placeholder="Повідомлення"
          />
          <ButtonForm>ВІДПРАВИТИ</ButtonForm>
        </ContainerForm>
      
    </Container>
  );
};
