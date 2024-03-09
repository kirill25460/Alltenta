import {
  ImgLogo,
  Container,
  FooterText,
  InstIcon,
  FaceBIcon,
  TelegramIcon,
  PhoneIcon,
  WrapIcons,
  StyledLink,
  PhonIcon,
  ContactWrap,
  MailIcon,
  FooterLink,
  FooterSocText,
  InfoWrap,
} from './Footer.styled';

import logo from '../../Images/alltentaLogo.png';

export const Footer = () => {
  return (
    <Container>
      <ImgLogo src={logo} />
      <InfoWrap>
        <FooterText>Інформація</FooterText>
        <FooterLink>Про нас</FooterLink>
        <FooterLink>Галерея</FooterLink>
      </InfoWrap>
      <ContactWrap>
        <FooterText>Контакти</FooterText>
        <StyledLink href="tel:+380 648 044 44"><PhonIcon/>+380 648 044 44</StyledLink>
        <StyledLink href="mailto:alltenta@gmail.com"><MailIcon/>alltenta@gmail.com</StyledLink>
      </ContactWrap>
      <div>
        <FooterSocText>Соціальні мережі</FooterSocText>
        <WrapIcons>
          {' '}
          <StyledLink href="mailto:alltenta@gmail.com">
            <InstIcon />
          </StyledLink>
          <StyledLink href="mailto:alltenta@gmail.com">
            <FaceBIcon />
          </StyledLink>
          <StyledLink href="mailto:alltenta@gmail.com">
            <TelegramIcon />
          </StyledLink>
          <StyledLink href="mailto:alltenta@gmail.com">
            <PhoneIcon />
          </StyledLink>
        </WrapIcons>
      </div>
    </Container>
  );
};
