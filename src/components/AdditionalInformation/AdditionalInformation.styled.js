import styled from 'styled-components';

export const AdditionalInformationConteiner = styled.div`
  margin-bottom: 150px;
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

  margin-top: 50px;
`;

export const TextAdditionalInformationBlock = styled.div`
  margin: 0px auto;
  width: 1140px;
`;

export const AdditionalInformationMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 66px;

  margin-top: 0;
  margin-bottom: 30px;

  color: #001d3d;
`;

export const ImgAdditionalInformationItem = styled.img`
  width: 395px;
  height: 500px;

  margin-right: 50px;
`;

export const ImgAdditionalInformation = styled.img`
  width: 695px;
  height: 500px;
`;

export const ImgSmall = styled.img`
  width: 395px;
  height: 225px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 50px;
`;

export const AdditionalInformationText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 40px;
  margin-top: 0;

  color: #767676;
`;

export const AdviceBlock = styled.div`
  margin: 0px auto;
  margin-top: 60px;
  width: 1140px;
`;

export const AdviceMainText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;

  margin-top: 0;
  margin-bottom: 30px;
  color: #001d3d;
`;

export const AdviceText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #767676;

  margin: 0;
`;
