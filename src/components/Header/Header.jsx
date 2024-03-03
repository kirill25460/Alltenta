import {
  HeaderContainer,
  ImgLogo,
  LeftConatiner,
  NavItem,
  NavSpan,
  Navigation,
  RightContainer,
} from './Header.styled';
import logo from '../../Images/alltentaLogo.png';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftConatiner>
        <ImgLogo src={logo} />
      </LeftConatiner>
      <RightContainer>
        <Navigation>
          <NavItem>
            <NavSpan>Про нас</NavSpan>
          </NavItem>
          <NavItem>
            <NavSpan>Головна</NavSpan>
          </NavItem>
          <NavItem>
            <NavSpan>Галерея</NavSpan>
          </NavItem>
          <NavItem>
            <NavSpan>Замовити</NavSpan>
          </NavItem>
        </Navigation>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
<></>;
