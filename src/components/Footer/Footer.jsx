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

import logo from '../../Images/LogoWhite.png';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <Container>
      <ImgLogo src={logo} />
      <InfoWrap>
        <FooterText>Інформація</FooterText>
        <Link to="about" smooth={true} duration={500} offset={-70}>
        <FooterLink>Про нас</FooterLink>
        </Link>
        <Link to="gallery" smooth={true} duration={500} offset={-70}>
        <FooterLink>Галерея</FooterLink>
        </Link>
      </InfoWrap>
      <ContactWrap>
        <FooterText>Контакти</FooterText>
        <StyledLink href="tel:+38097 033 29 29"><PhonIcon/>+097 033-29-29</StyledLink>
        <StyledLink href="tel:+38093 033 29 29"><PhonIcon/>+093 033-29-29</StyledLink>
        <StyledLink href="mailto:manager@alltenta.com"><MailIcon/>manager@alltenta.com</StyledLink>
      </ContactWrap>
      <div>
        <FooterSocText>Соціальні мережі</FooterSocText>
        <WrapIcons>
          {' '}
          <StyledLink href="https://www.instagram.com/">
            <InstIcon />
          </StyledLink>
          <StyledLink href="https://www.facebook.com">
            <FaceBIcon />
          </StyledLink>
          <StyledLink href="https://web.telegram.org/">
            <TelegramIcon />
          </StyledLink>
          <StyledLink href="https://www.viber.com/">
            <PhoneIcon />
          </StyledLink>
        </WrapIcons>
      </div>
    </Container>
  );
};
