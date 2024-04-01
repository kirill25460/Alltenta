import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;
  justify-content: center;
  margin-bottom: 100px;
margin-top:30px;
@media (min-width: 768px) {
    flex-direction: row; 
    margin-top:80px;
    margin-bottom: 90px;
  }
@media (min-width: 1024px) {
  margin-top:0px;
    margin-bottom: 150px;
}
`;

export const LeftHeroConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
@media (min-width: 767px) {
  align-items: normal;
  margin:0;
  padding-right: 25px;;
}
`;

export const RightHeroContainer = styled.div`
  position: relative;
`;

export const GreySpan = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 59px;
  line-height: 42px; 
  color: #767676;
  margin:0;
  padding-bottom: 10px;
  @media (min-width: 767px){
    font-size: 54px;
    line-height: 54px;
  }
  @media (min-width: 1024px) {
font-size: 86px;
line-height: 77%;
  }
`;

export const BlackSpan = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
   font-weight: 700; 
  margin:0;
  color: #001d3d;
font-size: 58px;
line-height: 42px;
@media (min-width: 767px){
    font-size: 54px;
    line-height: 54px;
  }
  @media (min-width: 1024px) {
font-size: 86px;
line-height: 77%;
  }
`;

export const HeroImg = styled.img`
  width: 300px;
  height: 324px;  
 
  position: relative;
  display: inline-block;
  @media (min-width: 767px){
    width: 390px;
    height: 460px;  
  }
  @media (min-width: 1024px) {
    width: 530px;
    height: 575px; 
  }
  @media (min-width: 1440px) {
    width: 650px;
  height: 700px;
  }
`;

export const HeroButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 119px;
  height: 50px;
  background: #ffffff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #a2b9d0;
    fill: #a2b9d0;
  }
`;

export const ArrowHeroContainer = styled.div`
 display: none;

  @media (min-width: 768px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
margin-top: 30px;
  }
`;

export const ArrowHeroContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;

  margin-top: 30px;
  padding-right: 165px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeroSource = styled.source``;

export const ArrowBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #232629;

  &:hover {
    border: 1px solid #a2b9d0;
  }
`;

export const ArrowLeft = styled(IoIosArrowRoundBack)`
  width: 32px;
  height: 24px;
  color: #232629;

  &:hover {
    color: #a2b9d0;
  }
`;

export const ArrowRight = styled(IoIosArrowRoundForward)`
  width: 32px;
  height: 24px;
  color: #232629;

  &:hover {
    color: #a2b9d0;
  }
`;

export const SmallArrow = styled(IoIosArrowRoundForward)`
  width: 32px;
  height: 24px;
`;
