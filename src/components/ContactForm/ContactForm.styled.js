import styled from 'styled-components';
import backgroundImage from '../../Images/img7.png';
// import { FiPhone } from 'react-icons/fi';
// import { CiMail } from 'react-icons/ci';

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
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: unset;
  }
`;

export const ContactFormBlock = styled.div``;

export const ContactFormMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;

  margin-top: 30px;
  width: 300px;
  padding-top: 50px;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 30px;

    margin-bottom: 30px;
    width: 357px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 49px;

    width: 681px;
    margin-bottom: 20px;
  }
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
  @media (min-width: 768px) {
    font-size: 19px;
    line-height: 23px;
    width: 357px;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  position: relative;

  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 60px;
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
    width: 287px;
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
    width: 205px;
    height: 45px;
    margin-bottom: 15px;
    margin-left: -80px;
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
  width: 90px;
  height: 45px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #232529;
  cursor: pointer;

  color: #232529;

  position: absolute;
  left: 321px;
  top: 144px;
  left: 211px;

  @media (min-width: 768px) {
    width: 62px;
    height: 46px;
    left: 227px;
    top: 60px;
    font-size: 7px;

    line-height: 30px;
  }
  @media (min-width: 1024px) {
    width: 90px;
    left: 350px;
    top: 80px;
    height: 50px;
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
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

// export const ContactWrap = styled.div`
//   display: flex;
//   margin-top: 30px;

//   @media (min-width: 768px) {
//     margin-top: 20px;
//     margin-left: 50px;
//   }
// `;

// export const StyledLink = styled.a`
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 10px;
//   line-height: 30px;
//   display: flex;
//   align-items: center;

//   color: #ffffff;

//   &:not(:last-child) {
//     margin-right: 50px;
//   }

//   @media (min-width: 768px) {
//     font-size: 13px;
//     &:not(:last-child) {
//       margin-right: 40px;
//     }
//   }
//   @media (min-width: 1024px) {
//     font-size: 15px;
//     &:not(:last-child) {
//       margin-right: 50px;
//     }
//   }
// `;

// export const MailIcon = styled(CiMail)`
//   width: 12px;
//   height: 12px;
//   margin-right: 10px;
// `;

// export const PhonIcon = styled(FiPhone)`
//   width: 12px;
//   height: 12px;
//   margin-right: 10px;
// `;
