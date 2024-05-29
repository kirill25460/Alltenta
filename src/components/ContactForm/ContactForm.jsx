import {
    ButtonForm,
  ContactFormBlock,
  ContactFormConteiner,
  ContactFormMainText,
  ContactFormText,
  ContainerForm,
  StyledInput,
  StyledInputEmail,
} from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <ContactFormConteiner>
      <ContactFormBlock>
        <ContactFormMainText>
          Готові до замовлення або залишились запитання?
        </ContactFormMainText>
        <ContactFormText>
          Залиште свій номер телефону та ім’я, після чого ми зв’яжемось з вами з
          приводу будь-яких питань, котрі стосуються продукції.
        </ContactFormText>
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
        <ButtonForm type="submit">ВІДПРАВИТИ</ButtonForm>
      </ContainerForm>
    </ContactFormConteiner>
  );
};
