import styled from 'styled-components';
import backgroundImage from '../../Images/img7.png';

export const ContactFormConteiner = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px -100px 32.4px rgba(0, 0, 0, 0.43);

  margin-top: 150px;
  margin-bottom: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactFormBlock = styled.div``;

export const ContactFormMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  width: 681px;

  color: #ffffff;
`;

export const ContactFormText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  margin-top: 0;
  width: 534px;

  color: #ffffff;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    position: relative;
    margin-top: 75px;
  }
  @media (min-width: 1024px) {
    margin-top: 30px;
    margin-left: 50px;
    justify-content: normal;
    align-items: baseline;
  }
  @media (min-width: 1440px) {
    margin-left: 50px;
    justify-content: normal;
    align-items: baseline;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 300px;
  border: 1px solid #ffffff;
  margin-bottom: 30px;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  background: transparent;

  @media (min-width: 768px) {
    width: 293px;
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
  height: 50px;
  width: 300px;
  border: 1px solid #ffffff;
  margin-bottom: 30px;
  padding-left: 15px;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  background: transparent;

  @media (min-width: 768px) {
    width: 293px;
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
    left: 0px;
    bottom: -40px;
    width: 294px;
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
