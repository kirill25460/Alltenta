import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height:100px;
  align-items: center;
`;

export const LeftConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;



`;

export const RightContainer = styled.div`
  display: none;
  margin: 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 110px;
  }
  @media (min-width: 1024px) {
    margin-left: 200px;
  }
  @media (min-width: 1201px) {
    margin-left: 400px;
  }

`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
margin:0;
`;

export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  margin-right: 130px;

  &:last-child{
    margin-right: 0;
  }

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
  width: 112px;
  height: 25px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 89px;
    height: 25px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 112px;
    height: 25px;
  }
`;

export const LogoLink = styled.a`
  width: 82px;
  height: 30px;
`;
