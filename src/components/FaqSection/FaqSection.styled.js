import styled from 'styled-components';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';

export const FaqSectionConteiner = styled.div``;

export const MainTextFaqSection = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 66px;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 0;

  color: #001d3d;
`;

export const TextFaqSection = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-top: 15px;

  color: #767676;
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
  font-size: 24px;
  line-height: 29px;

  color: #232529;

  margin-right: 219px;
`;

export const TextHoverFaqSection = styled.p`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;

  color: #767676;
  width: 833px;

  padding-left: 23px;

  margin-bottom: 28px;
`;

export const Plus = styled(CiSquarePlus)`
  width: 19px;
  height: 19px;

  padding-right: 30px;

  cursor: pointer;
`;

export const Minus = styled(CiSquareMinus)`
  width: 19px;
  height: 19px;

  padding-right: 30px;

  cursor: pointer;
`;
