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
