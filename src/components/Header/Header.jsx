import {
  HeaderContainer,
  HeaderItem,
  HeaderList,
  ImgLogo,
  LeftConatiner,
  Link,
  LogoLink,
  Menu,
  MenuConteiner,
  NavItem,
  NavSpan,
  Navigation,
  RightContainer,
} from './Header.styled';
import logo from '../../Images/headerLogo.png';
import { useState } from 'react';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <HeaderContainer>
      <LeftConatiner>
        <LogoLink to='/'>
          <ImgLogo src={logo} />
        </LogoLink>
      </LeftConatiner>
      <RightContainer>
        <Navigation>
          <NavItem>
            <Link to='/Alltenta' smooth={true} duration={500} offset={-70}>
              <NavSpan>Про Altenta</NavSpan>
            </Link>
          </NavItem>

          <NavItem>
            <MenuConteiner
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link smooth={true} duration={500} offset={-70}>
                Каталог товарів
              </Link>
              {isMenuVisible ? (
                <Menu>
                  <HeaderList>
                    <HeaderItem>Штори для альтанок</HeaderItem>
                    <HeaderItem>Штори для альтанок</HeaderItem>
                    <HeaderItem>Штори для альтанок</HeaderItem>
                    <HeaderItem>Штори для альтанок</HeaderItem>
                    <HeaderItem>Штори для альтанок</HeaderItem>
                  </HeaderList>
                </Menu>
              ) : (
                <></>
              )}
            </MenuConteiner>
          </NavItem>
          <NavItem>
            <Link smooth={true} duration={500} offset={-70}>
              <NavSpan>Контакти</NavSpan>
            </Link>
          </NavItem>
          <NavItem>
            <Link smooth={true} duration={500} offset={-70}>
              <NavSpan>Блог</NavSpan>
            </Link>
          </NavItem>
        </Navigation>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
