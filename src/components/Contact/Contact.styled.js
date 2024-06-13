import styled from 'styled-components';
import backgroundImage from '../../Images/img7.png';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';

export const ContactConteiner = styled.div`
  height: 500px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px -100px 32.4px rgba(0, 0, 0, 0.43);

  padding-bottom: 73px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  @media (min-width: 768px) {
    padding-left: 60px;
    align-items: unset;
  }

  @media (min-width: 1200px) {
    padding-left: 150px;
  }
`;

export const ContactBlock = styled.div``;

export const ContactMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;

  color: #ffffff;

  margin-bottom: 20px;

  width: 300px;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 49px;
    line-height: 60px;

    width: 771px;
  }

  @media (min-width: 1200px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    width: 980px;
  }
`;

export const ContainerFormItem = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;

  justify-content: center;
  @media (min-width: 768px) {
    position: relative;
    margin-top: 30px;
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

export const StyledInput = styled.input`
  height: 31px;
  width: 300px;
  border: 1px solid #ffffff;
  margin-bottom: 20px;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  color: #ffffff;
  background: transparent;

  @media (min-width: 768px) {
    width: 431px;
    height: 45px;
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
  height: 31px;
  width: 300px;
  border: 1px solid #ffffff;
  margin-bottom: 20px;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  color: #ffffff;
  background: transparent;

  @media (min-width: 768px) {
    width: 309px;
    height: 45px;
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

export const ButtonForm = styled.button`
  margin-top: 10px;
  width: 300px;
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

  @media (min-width: 768px) {
    margin-top: 0px;
    position: absolute;
    left: 340px;
    bottom: 115px;
    width: 92px;
    height: 42px;
  }
  @media (min-width: 1024px) {
    width: 90px;
    margin-top: 0px;
    position: absolute;
    left: 340px;
    bottom: 130px;
    width: 100px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
    position: absolute;
    left: 340px;
    bottom: 130px;
    width: 100px;
    height: 50px;
  }

  &:hover {
    color: #a2b9d0;
    fill: #a2b9d0;
    border: 1px solid #a2b9d0;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const StyledLink = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 30px;
  /* or 300% */
  display: flex;
  align-items: center;

  color: #ffffff;

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
