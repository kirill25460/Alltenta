import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const AboutUsConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  `;

export const AboutUsConteinerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const AboutUsImageBlock = styled.div`
  width: 611px;
  height: 600px;

  position: relative;
  @media (width < 768px) {
    margin-right: 0;
    width: 153px;
    height: 385px;
  }
  @media (width >= 768px) and (width <= 1200px) {
    width: 340px;
    height: 660px;
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

  @media (width < 768px) {
    width: 120px;
    height: 206px;
    top: -20px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    width: 300px;
    height: 150px;
    top: -30px;
    right: -138px;
  }
`;

export const AboutUsImageSecond = styled.img`
  width: 289px;
  height: 289px;
  position: absolute;
  z-index: 1;
  top: 290px;
  right: 300px;

  @media (width < 768px) {
    width: 123px;
    height: 205px;
    top: 150px;
    right: 29px;
  }

  @media (width >= 768px) and (width <= 1200px) {
    width: 200px;
    height: 570px;
    top: 34px;
    right: 30px;
  }
`;

export const MainTextAboutUsSpan = styled.span`
display:none;
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
display:none;
 @media (min-width: 768px) {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 97px;
  line-height: 69px;
  display: block;
  margin: 0;
  color: #001d3d;
padding-left: 170px;
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
  font-size: 7px;
  line-height: 10px;
  width: 150px;
  color: #767676;
  margin:0;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 14px;
line-height: 14px;
width:400px;
padding-top: 20px;
padding-bottom: 0px;

  }
  @media (min-width:1024px) {
   
    font-size: 15px;
    padding-top: 20px;
    margin-bottom: 25px;
  }
  @media (min-width:1440px) {
    width: 480px;
    font-size: 15px;
    padding-top: 20px;
    margin-bottom: 25px;
  }
`;

export const AboutUsButton = styled.button`
display: none;
@media (min-width:1024px) {

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
