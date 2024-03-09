import styled from 'styled-components';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 421px;
  border: 1px solid #232529;
  margin-bottom: 30px;
  padding-left: 15px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #767676;

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  margin-left: 100px;
  width: 450px;
  position: relative;
  @media (max-width: 360px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;

export const StyledMessage = styled.textarea`
  height: 245px;
  width: 440px;
  border: 1px solid #232529;
  padding: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #767676;
  resize: none;

  @media (max-width: 360px) {
    width: 318px;
  }
`;

export const ButtonForm = styled.button`
  position: absolute;
  left: 335px;
  bottom: 125px;
  width: 90px;
  height: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #232529;
  background: #ffffff;
  border: 1px solid #232529;
  cursor: pointer;

  @media (max-width: 360px) {
    position: static;
    left: auto;
    bottom: auto;
  }
`;

export const Text = styled.h3`
  width: 500px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #232529;
  margin: 0 0 40px 0px;

  @media (max-width: 360px) {
    width: 300px;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    margin-left: 30px;
  }
`;

export const ContactUsImg = styled.img`
  width: 500px;
  height: 373px;

  @media (max-width: 360px) {
    margin-left: 30px;
    width: 300px;
    height: 373px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #767676;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 50px;
  }

  @media (max-width: 360px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 30px;
  }
`;

export const MailIcon = styled(CiMail)`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (max-width: 360px) {
    width: 12px;
    height: 12px;
  }
`;

export const PhonIcon = styled(FiPhone)`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (max-width: 360px) {
    width: 12px;
    height: 12px;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  margin-top: 30px;

  @media (max-width: 360px) {
    margin-left: 30px;
    margin-bottom: 30px;
  }
`;
