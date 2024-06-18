import styled from 'styled-components';

export const AdditionalInformationConteiner = styled.div`
  margin-bottom: 150px;

  padding-left: 10px;
  padding-right: 10px;
`;

export const FirstAdditionalInformationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondAdditionalInformationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 12px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1200px) {
    margin-top: 50px;
  }
`;

export const TextAdditionalInformationBlock = styled.div`
  margin: 0px auto;
  width: 300px;

  @media (min-width: 768px) {
    width: 730px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const AdditionalInformationMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 66px;

  color: #001d3d;

  margin-top: 0;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
`;

export const ImgAdditionalInformationItem = styled.img`
  width: 104px;
  height: 132px;

  margin-right: 13px;

  @media (min-width: 768px) {
    width: 230px;
    height: 290px;
    margin-right: 41px;
  }

  @media (min-width: 1200px) {
    width: 395px;
    height: 500px;
    margin-right: 50px;
  }
`;

export const ImgAdditionalInformation = styled.img`
  width: 183px;
  height: 132px;
  @media (min-width: 768px) {
    width: 405px;
    height: 290px;
  }

  @media (min-width: 1200px) {
    width: 695px;
    height: 500px;
  }
`;

export const ImgSmall = styled.img`
  width: 104px;
  height: 59px;
  margin-bottom: 13px;

  @media (min-width: 768px) {
    width: 230px;
    height: 133px;
    margin-bottom: 22px;
  }

  @media (min-width: 1200px) {
    width: 395px;
    height: 225px;
    margin-bottom: 50px;
  }
`;

export const ImgSmallItem = styled.img`
  width: 104px;
  height: 59px;

  @media (min-width: 768px) {
    width: 230px;
    height: 133px;
  }

  @media (min-width: 1200px) {
    width: 395px;
    height: 225px;
  }
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 13px;

  @media (min-width: 768px) {
    margin-left: 41px;
  }

  @media (min-width: 1200px) {
    margin-left: 50px;
  }
`;

export const AdditionalInformationText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #767676;

  margin-bottom: 15px;

  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 40px;
  }
`;

export const AdviceBlock = styled.div`
  margin: 0px auto;
  margin-top: 60px;
  width: 300px;

  @media (min-width: 768px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const AdviceMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 30px;

  margin-top: 0;
  margin-bottom: 30px;
  color: #001d3d;
`;

export const AdviceText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #767676;

  margin: 0;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
`;
