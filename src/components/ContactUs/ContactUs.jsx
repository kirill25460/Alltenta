import ContactUsPhoto from '../../Images/Rectangle 26.png';
import {
  Container,
  StyledInput,
  ContainerForm,
  StyledMessage,
  ButtonForm,
  Text,
  ContactUsImg,
} from './ContactUs.styled';

export const ContactUs = () => {
  return (
    <Container>
      <div>
        <Text>Готові до замовлення або залишились запитання?</Text>
        <ContactUsImg src={ContactUsPhoto} alt="p" />
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
