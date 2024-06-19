import styled from 'styled-components';

export const CompanyPerformanceConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CompanyPerformanceBlock = styled.div`
  width: 220px;
  text-align: center;
  margin-right: 0;

  &:not(:last-child) {
    margin-right: 150px;
    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 767px) and (max-width: 1200px) {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const CompanyPerformanceImageBlock = styled.div`
  width: 213px;
`;

export const CompanyPerformanceMainText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;

  color: #232529;

  @media (max-width: 767px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

export const CompanyPerformanceText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  margin: 0;
  color: #767676;

  @media (max-width: 767px) {
    margin-top: 25px;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const CompanyPerformanceImage = styled.img``;
export const CompanyPerformanceReliabilityImage = styled.img`
  position: absolute;

  &:not(:last-child) {
    margin-left: -53px;
    margin-top: 8px;
    z-index: 1;
  }
`;

export const CompanyPerformanceImageConteiner = styled.div`
  position: relative;
  width: 180px;
  height: 71px;
  margin-bottom: 44px;
`;

export const CompanyPerformanceList = styled.ul`
  list-style: none;
  padding: 0;
`;
