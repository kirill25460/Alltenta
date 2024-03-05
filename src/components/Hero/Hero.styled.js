import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

export const LeftHeroConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 490px;
  height: 700px;
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
`;

export const BlackSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 71px;
  line-height: 66px;
  margin-bottom: 50px;
  color: #001d3d;
`;

export const HeroImg = styled.img`
  position: relative;
  display: inline-block;
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
  }
`;

export const ArrowHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
`;

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
  color: #232629;
`;
