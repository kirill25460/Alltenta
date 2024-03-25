import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const AboutUsConteiner = styled.div`
  margin-top: 150px;
  margin-bottom: 130px;

  @media (width <= 768px) {
    margin-top: 150px;
    margin-bottom: 200px;
  }
`;

export const AboutUsConteinerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutUsImageBlock = styled.div`
  width: 611px;
  height: 600px;

  position: relative;
  @media (width <= 768px) {
    margin-right: 0;
    width: 153px;
    height: 385px;
  }
`;

export const AboutUsBlock = styled.div``;

export const AboutUsImageFirst = styled.img`
  width: 372px;
  height: 372px;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;

  @media (width <= 768px) {
    width: 120px;
    height: 206px;
    top: -20px;
  }
`;

export const AboutUsImageSecond = styled.img`
  width: 289px;
  height: 289px;
  position: absolute;
  z-index: 1;
  top: 290px;
  right: 300px;

  @media (width <= 768px) {
    width: 123px;
    height: 205px;
    top: 150px;
    right: 29px;
  }
`;

export const MainTextAboutUsSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 97px;
  line-height: 118px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0%;
  color: #001d3d;
  margin: 0 20px 0 0;

  @media (width <= 768px) {
    display: none;
  }
`;

export const MainTextAboutUsSpanMobile = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  color: #001d3d;
  font-size: 48px;
  line-height: 59px;

  @media (width >= 768px) {
    display: none;
  }
`;

export const MainTextAboutUs = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 97px;
  line-height: 118px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0%;
  color: #001d3d;

  @media (width <= 768px) {
    display: none;
  }
`;

export const MainTextAboutUsMobile = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0%;
  color: #001d3d;
  font-size: 48px;
  line-height: 59px;
  padding-left: 110px;

  @media (width >= 768px) {
    display: none;
  }
`;

export const AboutUsText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  text-align: justify;

  width: 480px;

  color: #767676;

  margin-bottom: 50px;

  @media (width <= 768px) {
    font-size: 7px;
    line-height: 12px;
    width: 196px;
    height: 368px;
  }
`;

export const AboutUsButton = styled.button`
  border: 1px solid #232529;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */
  display: flex;
  align-items: center;
  cursor: pointer;

  color: #232529;

  width: 169px;
  height: 50px;

  background-color: #fff;
  &:hover {
    color: #a2b9d0;
    border: 1px solid #a2b9d0;
  }

  @media (width <= 768px) {
    display: none;
  }
`;

export const AboutUsArrow = styled(IoIosArrowRoundForward)`
  width: 30px;
  height: 25px;
`;
