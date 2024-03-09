import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const LeftConatiner = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  height: 100px;

  @media (max-width: 360px) {
    justify-content: center; 
  }
`;

export const RightContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 650px;
  padding: 0;

  @media (max-width: 360px) {
    display: none; 
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
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
    background-color: #FFC300; /* Желтый цвет подчеркивания при наведении */
  }
`;

export const ImgLogo = styled.img`
  width: 82px;
  height: 30px;
`;
