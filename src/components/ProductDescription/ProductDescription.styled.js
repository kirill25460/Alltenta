import styled from 'styled-components';

export const ProductDescriptionConteiner = styled.div`
  margin-top: 87px;
  margin-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductDescriptionBlock = styled.div``;

export const MainTextProductDescription = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;

  color: #001d3d;
`;

export const TextProductDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #767676;

  width: 695px;
`;

export const ImgProductDescription = styled.img`
  width: 695px;
  height: 500px;
`;

export const ProductDescriptionList = styled.ul`
  list-style: none;
  margin-left: 50px;
  margin-top: 90px;
  margin-bottom: 30px;

  padding: 0;
  display: flex;
  align-items: center;
`;

export const ProductDescriptionItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgDetailItem = styled.img`
  width: 32px;
  height: 32px;
`;

export const TextDetailItem = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  margin: 0;
  padding-left: 10px;

  color: #767676;
`;

export const TextInformation = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: #001d3d;

  margin-top: 12px;
  margin-bottom: 0;
`;

export const ProductImg = styled.img`
  width: 395px;
  height: 225px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const ImgBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 50px;
`;
