import styled from 'styled-components';

export const CompanyPerformanceConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;

  @media (max-width: 360px) {
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

export const CompanyPerformanceBlock = styled.div`
  width: 220px;
  text-align: center;
  margin-right: 0;

  &:not(:last-child) {
    margin-right: 150px;
    @media (max-width: 360px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;

export const CompanyPerformanceMainText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;

  color: #232529;

  @media (max-width: 360px) {
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
  font-size: 15px;
  line-height: 18px;
  text-align: center;
margin:0;
  color: #767676;

  @media (max-width: 360px) {
    margin-top: 25px;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const CompanyPerformanceImage = styled.img``;


export const CompanyPerformanceList = styled.ul`
 list-style: none;
 text-align: center;
 padding:0;
`;