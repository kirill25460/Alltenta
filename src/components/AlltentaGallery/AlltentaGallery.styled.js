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
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-top: 27px;
  }

  @media (min-width: 1200px) {
    margin-top: 50px;
  }
`;

export const MainGalleryText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 66px;

  text-align: center;

  color: #001d3d;
  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 66px;
  }
`;

export const ImgGalleryItem = styled.img`
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

export const ImgGallery = styled.img`
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
