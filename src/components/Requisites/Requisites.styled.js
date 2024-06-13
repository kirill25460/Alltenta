import styled from 'styled-components';

export const RequisitesConteiner = styled.div`
  margin-bottom: 150px;
`;

export const RequisitesMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 66px;
  text-align: center;

  color: #001d3d;

  margin-top: 0;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 66px;
    margin-bottom: 30px;
  }
`;

export const RequisitesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const RequisitesItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  text-align: center;

  color: #767676;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 30px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const RequisitesSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 30px;

  color: #767676;

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 29px;
  }
`;
