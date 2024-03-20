import styled from 'styled-components';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiFacebookLine } from 'react-icons/ri';
import { LiaTelegramPlane } from 'react-icons/lia';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';

export const ImgLogo = styled.img`
  width: 82px;
  height: 30px;
`;

export const Container = styled.div`
  display: flex;
  background-color: #001d3d;
  padding-top: 60px;
  padding-bottom: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 90px;
  }
`;

export const FooterText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 50px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const FooterSocText = styled.h3`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    margin: 0;
    margin-bottom: 28px;
  }
`;

export const FooterLink = styled.h4`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
  cursor:pointer;
  position: relative;
  
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

export const InstIcon = styled(RxInstagramLogo)`
  width: 20px;
  height: 20px;
  color: #fff;
  margin-right: 15px;
  transition: color 0.3s;
  &:hover {
    color: #ffc300; 
  }
  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;

export const FaceBIcon = styled(RiFacebookLine)`
  width: 18px;
  height: 18px;
  color: #fff;
  border-radius: 10%;
  margin-right: 15px;
  border: 1px solid #fff;
  transition: color 0.3s;
  &:hover {
    color: #ffc300; 
    border: 1px solid #ffc300;
  }
  @media (min-width: 768px) {
    margin-right: 0px;
  }
`;

export const TelegramIcon = styled(LiaTelegramPlane)`
  width: 20px;
  height: 20px;
  color: #fff;
  margin-right: 15px;
  transition: color 0.3s;
  &:hover {
    color: #ffc300; 
  }
  @media (min-width: 768px) {
    margin-right: 30px;
    margin-top: 20px;
  }
`;

export const PhoneIcon = styled(LiaPhoneVolumeSolid)`
  width: 18px;
  height: 18px;
  color: #fff;
  border-radius: 10%;
  border: 1px solid #fff;
  transition: color 0.3s;
  &:hover {
    color: #ffc300; 
    border: 1px solid #ffc300;
  }
  @media (min-width: 768px) {
    margin-right: 0px;
    margin-top: 20px;
  }
`;

export const WrapIcons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 30px;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 90px;
    margin-top: 0px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 300%;
  text-align: center;
  
`;

export const PhonIcon = styled(FiPhone)`
  margin-right: 10px;
  width: 12px;
  height: 12px;
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const MailIcon = styled(CiMail)`
  margin-right: 10px;
  width: 12px;
  height: 12px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
