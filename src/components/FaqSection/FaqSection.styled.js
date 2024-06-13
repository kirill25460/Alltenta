import styled from 'styled-components';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';

export const FaqSectionConteiner = styled.div`
  margin-bottom: 150px;
`;

export const MainTextFaqSection = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;

  color: #001d3d;

  text-align: center;
  margin-top: 150px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 66px;
  }
`;

export const TextFaqSection = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  margin-top: 10px;

  color: #767676;

  @media (min-width: 768px) {
    margin-top: 15px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const FaqSectionList = styled.ul`
  list-style: none;
  margin-top: 46px;

  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqSectionItem = styled.li`
  border-top: 2px solid #c6c6c6;
`;

export const ItemBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  padding-left: 15px;

  color: #232529;

  @media (min-width: 512px) {
    font-size: 22px;
    line-height: 27px;

    margin-right: 135px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 29px;

    margin-right: 219px;
  }
`;

export const TextHoverFaqSection = styled.p`
  padding-left: 23px;

  margin-bottom: 28px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  color: #767676;

  width: 300px;

  @media (min-width: 512px) {
    font-size: 14px;
    line-height: 18px;

    width: 460px;
  }

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 1200px) {
    font-size: 15px;
    line-height: 19px;

    width: 833px;
  }
`;

export const Plus = styled(CiSquarePlus)`
  width: 19px;
  height: 19px;

  padding-right: 30px;

  @media (min-width: 512px) {
    padding-right: 18px;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1200px) {
    padding-right: 21px;
  }

  cursor: pointer;
`;

export const Minus = styled(CiSquareMinus)`
  width: 19px;
  height: 19px;

  padding-right: 30px;

  @media (min-width: 512px) {
    padding-right: 18px;
  }

  @media (min-width: 1200px) {
    padding-right: 21px;
  }

  cursor: pointer;
`;
