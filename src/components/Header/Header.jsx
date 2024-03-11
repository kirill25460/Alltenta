import {
  HeaderContainer,
  ImgLogo,
  LeftConatiner,
  LogoLink,
  NavItem,
  NavSpan,
  Navigation,
  RightContainer,
} from './Header.styled';
import logo from '../../Images/headerLogo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftConatiner>
        <LogoLink href="#">
          <ImgLogo src={logo} />
        </LogoLink>
      </LeftConatiner>
      <RightContainer>
        <Navigation>
          <NavItem>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <NavSpan>Про нас</NavSpan>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="home" smooth={true} duration={500} offset={-70}>
              <NavSpan>Головна</NavSpan>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="gallery" smooth={true} duration={500} offset={-70}>
              <NavSpan>Галерея</NavSpan>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="order" smooth={true} duration={500} offset={-70}>
              <NavSpan>Замовити</NavSpan>
            </Link>
          </NavItem>
        </Navigation>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
<></>;
