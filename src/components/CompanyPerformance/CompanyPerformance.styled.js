import styled from 'styled-components';

export const CompanyPerformanceConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
`;

export const CompanyPerformanceBlock = styled.div`
  width: 220px;
  text-align: center;
  margin-right: 0;

  &:not(:last-child) {
    margin-right: 150px;
  }
`;

export const CompanyPerformanceMainText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;

  color: #232529;
`;

export const CompanyPerformanceText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #767676;
`;

export const CompanyPerformanceImage = styled.img`
  `;
