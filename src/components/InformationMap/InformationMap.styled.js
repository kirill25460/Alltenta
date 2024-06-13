import styled from 'styled-components';

export const InformationMapConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-top: 150px;
    margin-bottom: 150px;
  }
`;

export const InformationMapBlock = styled.div``;

export const MainTextInformationMap = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 66px;

  color: #001d3d;

  margin-top: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 55px;
    margin-bottom: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
    margin-bottom: 50px;
  }
`;

export const MapConteiner = styled.div``;

export const TextMap = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #767676;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ResponsiveIframe = styled.iframe`
  width: 300px;
  height: 276px;
  @media (min-width: 768px) {
    width: 446px;
    height: 408px;
  }
  @media (min-width: 1200px) {
    width: 550px;
    height: 500px;
  }
`;
