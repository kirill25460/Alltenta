import {
  CloseIcon,
  HeaderContainer,
  HeaderItem,
  HeaderList,
  ImgLogo,
  LeftConatiner,
  Link,
  LogoLink,
  Menu,
  MenuConteiner,
  MenuIcon,
  MobileMenu,
  NavItem,
  NavSpan,
  Navigation,
  RightContainer,
} from './Header.styled';
import logo from '../../Images/headerLogo.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuClick, setMenuClick] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  const handleOpenButton = () => {
    setMenuClick(true);
  };

  const handleCloseButton = () => {
    setMenuClick(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuLinkClick = () => {
    handleCloseButton();
    handleMouseLeave();
  };

  return (
    <HeaderContainer>
      <LeftConatiner>
        <LogoLink to="/">
          <ImgLogo src={logo} />
        </LogoLink>
      </LeftConatiner>
      {isMobile ? (
        menuClick ? (
          <CloseIcon onClick={handleCloseButton} />
        ) : (
          <MenuIcon onClick={handleOpenButton} />
        )
      ) : (
        <></>
      )}
      <RightContainer>
        <Navigation>
          <NavItem>
            <Link to="/Alltenta" smooth={true} duration={500} offset={-70}>
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
                    <HeaderItem>
                      <Link to="/Product">Штори для альтанок</Link>
                    </HeaderItem>
                    <HeaderItem>
                      <Link to="/Product">Штори для альтанок</Link>
                    </HeaderItem>
                    <HeaderItem>
                      <Link to="/Product">Штори для альтанок</Link>
                    </HeaderItem>
                    <HeaderItem>
                      <Link to="/Product">Штори для альтанок</Link>
                    </HeaderItem>
                    <HeaderItem>
                      <Link to="/Product">Штори для альтанок</Link>
                    </HeaderItem>
                  </HeaderList>
                </Menu>
              ) : (
                <></>
              )}
            </MenuConteiner>
          </NavItem>
          <NavItem>
            <Link to="/Contact" smooth={true} duration={500} offset={-70}>
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
      {isMobile && menuClick && (
        <MobileMenu>
          <Navigation>
            <NavItem>
              <Link
                to="/Alltenta"
                onClick={handleCloseButton}
                smooth={true}
                duration={500}
                offset={-70}
              >
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
                      <HeaderItem>
                        <Link to="/Product" onClick={handleMenuLinkClick}>
                          Штори для альтанок
                        </Link>
                      </HeaderItem>
                      <HeaderItem>
                        <Link to="/Product" onClick={handleMenuLinkClick}>
                          Штори для альтанок
                        </Link>
                      </HeaderItem>
                      <HeaderItem>
                        <Link to="/Product" onClick={handleMenuLinkClick}>
                          Штори для альтанок
                        </Link>
                      </HeaderItem>
                      <HeaderItem>
                        <Link to="/Product" onClick={handleMenuLinkClick}>
                          Штори для альтанок
                        </Link>
                      </HeaderItem>
                      <HeaderItem>
                        <Link to="/Product" onClick={handleMenuLinkClick}>
                          Штори для альтанок
                        </Link>
                      </HeaderItem>
                    </HeaderList>
                  </Menu>
                ) : (
                  <></>
                )}
              </MenuConteiner>
            </NavItem>
            <NavItem>
              <Link
                to="/Contact"
                onClick={handleCloseButton}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <NavSpan>Контакти</NavSpan>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                smooth={true}
                onClick={handleCloseButton}
                duration={500}
                offset={-70}
              >
                <NavSpan>Блог</NavSpan>
              </Link>
            </NavItem>
          </Navigation>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
