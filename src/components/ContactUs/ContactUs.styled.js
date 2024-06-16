import styled from 'styled-components';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @media (min-width: 1024px) {
    margin-top: 150px;
    margin-bottom: 150px;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 300px;
  border: 1px solid #232529;
  margin-bottom: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #767676;

  @media (min-width: 768px) {
    width: 370px;
    height: 56px;
    margin-bottom: 15px;
  }
  @media (min-width: 1024px) {
    width: 440px;
    height: 50px;
    margin-bottom: 30px;
  }
  /* @media (width >= 768px) and (width <= 1200px) {
    width: 293px;
  } */
`;

export const StyledInputEmail = styled.input`
  height: 50px;
  width: 300px;
  border: 1px solid #232529;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #767676;

  @media (min-width: 768px) {
    width: 293px;
    height: 58px;
    margin-bottom: 15px;
  }
  @media (min-width: 1024px) {
    width: 308px;
    height: 50px;
    margin-bottom: 30px;
  }
  /* @media (width >= 768px) and (width <= 1200px) {
    width: 293px;
  } */
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    position: relative;
    margin-top: 30px;
    align-items: unset;
  }
  @media (min-width: 1024px) {
    margin-top: 30px;
    justify-content: normal;
    align-items: baseline;
  }
  @media (min-width: 1440px) {
    justify-content: normal;
    align-items: baseline;
  }
`;

export const StyledMessage = styled.textarea`
  height: 245px;
  width: 300px;
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

  @media (min-width: 768px) {
    width: 293px;
    height: 215px;
  }
  @media (min-width: 1024px) {
    width: 440px;
    height: 245px;
  }
  /* @media (width >= 768px) and (width <= 1200px) {
    width: 293px;
  } */
`;

export const ButtonForm = styled.button`
  margin-top: 10px;
  width: 300px;
  height: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #232529;
  background: #ffffff;
  border: 1px solid #232529;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 70px;
    height: 58px;
    margin-top: 0px;
    position: absolute;
    left: 300px;
    bottom: 15px;
  }
  @media (min-width: 1024px) {
    width: 90px;
    margin-top: 0px;
    position: absolute;
    left: 341px;
    bottom: 31px;
    width: 100px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
    position: absolute;
    left: 341px;
    bottom: 31px;
    width: 100px;
    height: 50px;
  }

  &:hover {
    color: #a2b9d0;
    fill: #a2b9d0;
    border: 1px solid #a2b9d0;
  }
`;

export const Text = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 20px;
  text-align: center;

  margin-top: 0;

  color: #232529;

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 30px;
    width: 345px;
  }

  @media (min-width: 1024px) {
    width: 430px;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
  }
  @media (min-width: 1440px) {
  }
`;

/* Ми розрахуємо вартість вашого замовлення безкоштовно! */

export const ContactUsImg = styled.img`
  height: 373px;
  width: 300px;

  @media (min-width: 768px) {
    width: 343px;
    height: 339px;
  }

  @media (min-width: 1024px) {
    height: 373px;
    width: 500px;
  }
`;

export const StyledLink = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 30px;
  text-decoration: none;
  color: #767676;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 50px;
  }

  @media (min-width: 768px) {
    font-size: 13px;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  @media (min-width: 1024px) {
    font-size: 15px;
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const MailIcon = styled(CiMail)`
  width: 12px;
  height: 12px;
  margin-right: 10px;
`;

export const PhonIcon = styled(FiPhone)`
  width: 12px;
  height: 12px;
  margin-right: 10px;
`;

export const ContactWrap = styled.div`
  display: flex;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: normal;
  }
`;

export const ContactFormConteiner = styled.div`
  padding-left: 10px;

  @media (min-width: 1024px) {
    padding-left: 50px;
  }
`;

export const ContactWrapConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
