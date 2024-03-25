import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    align-items: center;
    margin-top: 100px;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
    margin-bottom: 150px;
  }
`;

export const LeftHeroConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 110px;

  @media (width <= 768px) {
    height: 254px;

    width: 0;
    margin-top: 30px;
  }

  @media (width <= 1200px) {
    margin-right: 13px;
  }
`;

export const RightHeroContainer = styled.div`
  position: relative;
`;

export const GreySpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 86px;
  line-height: 66px;
  margin-top: 40px;
  color: #767676;

  @media (width <= 768px) {
    font-size: 59px;
    line-height: 42px;
    margin-top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (width <= 1200px) {
    font-size: 54px;
    line-height: 54px;
  }
`;

export const BlackSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 71px;
  line-height: 66px;
  margin-bottom: 50px;
  color: #001d3d;

  @media (width <= 768px) {
    font-size: 47px;
    line-height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (width <= 1200px) {
    font-size: 54px;
    line-height: 54px;
  }
`;

export const HeroImg = styled.img`
  width: 650px;
  height: 700px;
  position: relative;
  display: inline-block;

  @media (width <= 768px) {
    width: 389px;
    height: 460px;  
  }

  @media (width >= 768px) and (width <= 1200px) {
    width: 389px;
    height: 460px;  
  }

  @media (width <= 768px) {
    width: 300px;
    height: 324px;  
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;

  @media (width <= 768px) {
    display: none;
  }
`;

export const ArrowHeroContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;

  margin-top: 30px;
  padding-right: 165px;

  @media (width >= 768px) {
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
