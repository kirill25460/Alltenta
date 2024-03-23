import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const LeftConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 290px; 
  margin-top: 38px;
  margin-top: 0;

  @media (max-width: 768px) {
    margin-right: 0; 
    margin-top: 38px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    margin-right: 107px; 
  }
`;

export const RightContainer = styled.div`
  @media (width > 768px) {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 0;
  }
  @media (width <= 768px) {
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
  }

  @media (width <= 768px) {
    display: none;
    margin-right: 0;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  margin-right: 130px;

  @media (width <= 1200px) {
    margin-right: 50px;
  }
`;

export const NavSpan = styled.span`
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px; /* Расположение подчеркивания ниже текста */
    width: 100%;
    height: 2px; /* Высота подчеркивания */
    background-color: transparent; /* Прозрачный цвет подчеркивания */
    transition: background-color 0.3s ease; /* Плавный переход цвета */
  }

  &:hover::after {
    background-color: #ffc300; /* Желтый цвет подчеркивания при наведении */
  }
`;

export const ImgLogo = styled.img`
  width: 82px;
  height: 30px;
  cursor: pointer;
`;

export const LogoLink = styled.a`
  width: 82px;
  height: 30px;
`;
