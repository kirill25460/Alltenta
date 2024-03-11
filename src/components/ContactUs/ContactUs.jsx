import ContactUsPhoto from '../../Images/Rectangle 26.png';
import ContactUs360 from '../../Images/ContactUs360.png';
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
          <ContactUsImg src={ContactUsPhoto} alt="p" />
        </picture>  
        <div>
          <ContactWrap>
            {' '}
            <StyledLink href="tel:+380 648 044 44">
              <PhonIcon />
              +380 648 044 44
            </StyledLink>
            <StyledLink href="mailto:alltenta@gmail.com">
              <MailIcon />
              alltenta@gmail.com
            </StyledLink>
          </ContactWrap>
          <ContactWrap>
            {' '}
            <StyledLink href="tel:+380 648 044 44">
              <PhonIcon />
              +380 648 044 44
            </StyledLink>
            <StyledLink href="mailto:alltenta@gmail.com">
              <MailIcon />
              alltenta@gmail.com
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
