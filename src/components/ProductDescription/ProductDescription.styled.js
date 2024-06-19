import styled from 'styled-components';

export const ProductDescriptionConteiner = styled.div`
  margin-top: 87px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 0px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const ProductDescriptionBlock = styled.div``;

export const ProductWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MainTextProductDescription = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  text-align: center;
  color: #001d3d;
  margin: 0;
  width: 296px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 34px;
    text-align: left;
    color: #001d3d;
    width: 422px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 49px;
    width: 695px;
  }
`;

export const TextProductDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  color: #767676;
  width: 296px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  @media (min-width: 768px) {
    width: 664px;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 24px;
    width: 695px;
  }
`;

export const ImgProductDescription = styled.img`
  width: 300px;
  height: 348px;

  @media (min-width: 768px) {
    width: 664px;
    height: 500px;
    margin: 0 auto;
    display: block;
  }

  @media (min-width: 1200px) {
    width: 695px;
    height: 500px;
  }
`;

export const ProductDescriptionList = styled.ul`
  list-style: none;

  padding: 0;
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: flex;
    margin-left: 50px;
    margin-top: 38px;
    margin-bottom: 30px;
  }
  @media (min-width: 1440px) {
    display: flex;
    margin-left: 50px;
    margin-top: 55px;
    margin-bottom: 30px;
  }
`;

export const ProductDescriptionListTab = styled.ul`
  display: none;
  @media (min-width: 768px) {
    list-style: none;
    display: inline-block;
    padding: 0;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ProductDescriptionItem = styled.li`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 7px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const ImgDetailItem = styled.img`
  width: 32px;
  height: 32px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const TextDetailItem = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  margin: 0;

  color: #767676;
  font-size: 12px;
  line-height: 15px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const TextInformation = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 15px;
  color: #001d3d;

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    font-size: 15px;
    line-height: 18px;
    margin-top: 12px;
  }
`;

export const ProductImg = styled.img`
  width: 395px;
  height: 225px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const ImgBlock = styled.div`
  display: none;
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;

    margin-left: 50px;
  }
`;

export const ProductDescriptionTextConteiner = styled.div``;

export const ProductDescriptionText = styled.p`
  width: 500px;
`;
