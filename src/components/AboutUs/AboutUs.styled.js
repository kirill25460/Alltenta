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
`;

export const AboutUsImageSecond = styled.img`
  width: 289px;
  height: 289px;
  position: absolute;
  z-index: 1;
  top: 290px;
  right: 300px;
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

  color: #001d3d;
`;

export const AboutUsText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  width: 480px;
  height: 338px;

  color: #767676;

  margin-bottom: 50px;
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
`;

export const AboutUsArrow = styled(IoIosArrowRoundForward)`
  width: 30px;
  height: 25px;
`;
