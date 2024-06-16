import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const AboutUsConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const AboutUsConteinerItem = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const AboutUsImageBlock = styled.div`
  width: 153px;
  height: 385px;
  position: relative;
  @media (min-width: 768px) {
    width: 255px;
    height: 660px;
  }
  @media (min-width: 1024px) {
    width: 481px;
    height: 486px;
  }
  @media (min-width: 1440px) {
    width: 611px;
    height: 600px;
  }
`;

export const AboutUsBlock = styled.div``;

export const AboutUsImageFirst = styled.img`
  width: 120px;
  height: 206px;
  top: -8px;

  position: absolute;
  z-index: 2;
  right: 7px;

  @media (min-width: 768px) {
    width: 300px;
    height: 150px;
    top: -30px;
    right: -138px;
  }

  @media (min-width: 1024px) {
    width: 294px;
    height: 296px;
    top: 7px;
    right: 10px;
  }
  @media (min-width: 1440px) {
    width: 372px;
    height: 372px;
    top: 7px;
    right: 10px;
  }
`;

export const AboutUsImageSecond = styled.img`
  width: 123px;
  height: 205px;
  top: 173px;
  right: 29px;
  position: absolute;
  z-index: 1;

  @media (min-width: 768px) {
    width: 200px;
    height: 570px;
    top: 34px;
    right: 30px;
  }

  @media (min-width: 1024px) {
    width: 280px;
    height: 270px;
    top: 290px;
    right: 175px;
  }
  @media (min-width: 1440px) {
    width: 289px;
    height: 289px;
    top: 290px;
    right: 300px;
  }
`;

export const MainTextAboutUsSpan = styled.span`
  display: none;
  @media (min-width: 768px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 80px;
    line-height: 69px;
    display: block;
    margin: 0;
    color: #001d3d;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
    line-height: 98px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  @media (min-width: 1440px) {
    font-size: 96px;
    line-height: 118px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-right: 15px;
  }
`;

export const MainTextAboutUs = styled.h1`
  display: none;
  @media (min-width: 768px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 97px;
    line-height: 69px;
    display: block;
    margin: 0;
    color: #001d3d;
  }
  @media (min-width: 1024px) {
    font-size: 80px;
    line-height: 118px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 0px;
  }
  @media (min-width: 1440px) {
    font-size: 97px;
    line-height: 118px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 0px;
  }
`;

export const MainTextAboutUsMobile = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: center;

  margin: 0;
  color: #001d3d;
  font-size: 48px;
  line-height: 59px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MainTextAboutUsSpanMobile = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;
  padding-right: 10px;
  color: #001d3d;
  font-size: 48px;
  line-height: 59px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const AboutUsText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  text-align: justify;
  font-size: 10px;
  line-height: 10px;
  width: 150px;
  color: #767676;
  margin: 0;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    width: 400px;
    padding-top: 20px;
    padding-bottom: 0px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 17px;
    padding-top: 20px;
    margin-bottom: 25px;
  }
  @media (min-width: 1440px) {
    width: 480px;
    font-size: 15px;
    padding-top: 20px;
    margin-bottom: 25px;
  }
`;

export const AboutUsButton = styled.button`
  display: none;
  @media (min-width: 1024px) {
    border: 1px solid #232529;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #232529;
    width: 169px;
    height: 50px;
    background-color: #fff;
    &:hover {
      color: #a2b9d0;
      border: 1px solid #a2b9d0;
    }
  }
`;

export const AboutUsArrow = styled(IoIosArrowRoundForward)`
  width: 30px;
  height: 25px;
`;
