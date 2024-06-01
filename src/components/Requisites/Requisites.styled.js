import styled from 'styled-components';

export const RequisitesConteiner = styled.div`
  margin-bottom: 150px;
`;

export const RequisitesMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 66px;

  text-align: center;

  margin-top: 0;
  margin-bottom: 30px;

  color: #001d3d;
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
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  color: #767676;
`;

export const RequisitesSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #767676;
`;
