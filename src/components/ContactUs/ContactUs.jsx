import ContactUsPhoto from '../../Images/Rectangle 26.png';
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
} from './ContactUs.styled';

export const ContactUs = () => {
  return (
    <Container>
      <div>
        <Text>Готові до замовлення або залишились запитання?</Text>
        <ContactUsImg src={ContactUsPhoto} alt="p" />
        <div>
        <ContactWrap>        <StyledLink href="tel:+380 648 044 44"><PhonIcon/>+380 648 044 44</StyledLink>
        <StyledLink href="mailto:alltenta@gmail.com"><MailIcon/>alltenta@gmail.com</StyledLink></ContactWrap>
        <ContactWrap>        <StyledLink href="tel:+380 648 044 44"><PhonIcon/>+380 648 044 44</StyledLink>
        <StyledLink href="mailto:alltenta@gmail.com"><MailIcon/>alltenta@gmail.com</StyledLink></ContactWrap>

        </div>
      </div>
      <ContainerForm>
        <form>
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
        </form>
      </ContainerForm>
    </Container>
  );
};
