import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 214px;
margin-top: 40px;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: unset;
    height: 100px;
  }
`;

export const LeftConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
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

  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: unset;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 66px;

  color: #232629;

  @media (min-width: 768px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 66px;

    color: #232629;
    margin-right: 50px;
  }

  @media (min-width: 1400px) {
    margin-right: 130px;
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

export const LogoLink = styled(NavLink)`
  width: 82px;
  height: 30px;
`;

export const MenuConteiner = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 12.3px rgba(0, 0, 0, 0.16);

  width: 153px;

  z-index: 2;

  left: -18px;
  top: 22px;
`;

export const HeaderList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const HeaderItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;

  color: #232629;
  padding-left: 12px;

  height: 36px;

  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #232629;
`;
