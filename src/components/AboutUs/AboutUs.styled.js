import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const AboutUsConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 150px;
  margin-bottom: 130px;
`;
export const AboutUsImageBlock = styled.div`
  margin-right: 60px;

  width: 611px;
  height: 600px;

  position: relative;
`;

export const AboutUsBlock = styled.div``;

export const AboutUsImageFirst = styled.img`
  width: 372px;
  height: 372px;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;

  @media (max-width: 360px) {
    width: 100px;
    height: 150px;
  }
`;

export const AboutUsImageSecond = styled.img`
  width: 289px;
  height: 289px;
  position: absolute;
  z-index: 1;
  top: 290px;
  right: 300px;

  @media (max-width: 360px) {
    width: 100px;
    height: 170px;
    top: 90px;
    right: 55px;
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

  @media (max-width: 360px) {
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

  @media (max-width: 360px) {
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

  @media (max-width: 360px) {
    font-size: 10px;
    line-height: 12px;
    width: 149px;
    height: 251px;
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

  @media (max-width: 360px) {
    display: none;
  }
`;

export const AboutUsArrow = styled(IoIosArrowRoundForward)`
  width: 30px;
  height: 25px;
`;
