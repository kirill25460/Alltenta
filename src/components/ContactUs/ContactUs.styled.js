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
    margin-top: 150px;
    margin-bottom: 150px;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 300px;
  border: 1px solid #232529;
  margin-bottom: 30px;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #767676;

  @media (min-width: 768px) {
    width: 440px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    width: 293px;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  justify-content: center;
  align-items: flex-end;
  @media (min-width: 768px) {
    position: relative;
    margin-top: 0;
    margin-left: 100px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    margin-left: 18px;
    margin-top: 85px;
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
    width: 440px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    width: 293px;
  }
`;

export const ButtonForm = styled.button`
  margin-top: 10px;
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

  @media (min-width: 768px) {
    margin-top: 0px;
    position: absolute;
    left: 0px;
    bottom: -40px;

    padding: 15px 146px;
  }
`;

export const Text = styled.h3`
  width: 300px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  text-align: center;

  color: #232529;

  @media (min-width: 768px) {
    width: 500px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    margin: 0 0 25px 0px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    line-height: 30px;
    font-size: 25px;
    text-align: left;
  }
`;

export const ContactUsImg = styled.img`
  height: 373px;
  width: 300px;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    width: 343px;
    height: 339px;
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

  @media (min-width: 360px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 30px;
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

  @media (min-width: 360px) {
    margin-bottom: 30px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (width >= 768px) and (width <= 1200px) {
    align-items: baseline;
    width: 373px;
  }
`;
