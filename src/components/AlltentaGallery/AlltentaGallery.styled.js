import styled from 'styled-components';

export const AlltentaGalleryConteiner = styled.div`
  margin-bottom: 150px;
`;

export const FirstGalleryBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondGalleryBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;

export const MainGalleryText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 66px;

  text-align: center;

  color: #001d3d;
`;

export const ImgGalleryItem = styled.img`
  width: 395px;
  height: 500px;

  margin-right: 50px;
`;

export const ImgGallery = styled.img`
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
