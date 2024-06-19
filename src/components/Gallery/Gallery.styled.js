import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const GalleryConteiner = styled.div`
  text-align: center;
  overflow: hidden;
`;

export const ButtonConteiner = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-between;
  margin: 30px auto 0px;
`;

export const ButtonBlockItem = styled.div``;

export const MainGalleryText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 71px;
  line-height: 66px;
  margin-bottom: 20px;

  color: #001d3d;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 44px;
  }
`;

export const GalleryText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-top: 0;
  width: 613px;
  display: inline-block;
  color: #767676;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextActiveButton = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 66px;

  position: absolute;

  color: #ffffff;

  top: 86px;
  left: 50px;

  @media (max-width: 768px) {
    top: 86px;
    left: 50px;
  }
`;

export const GalleryBlockConteiner = styled.div``;

export const GalleryItemImage = styled.img`
  width: 100%;
  transition: filter 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const SliderConteiner = styled.div`
  position: relative;
  width: fit-content;
`;

export const ArrowLeft = styled(IoIosArrowRoundBack)`
  width: 45px;
  height: 40px;
  cursor: pointer;
`;
export const ArrowRight = styled(IoIosArrowRoundForward)`
  width: 45px;
  height: 40px;
  cursor: pointer;
`;

export const ArrowRightButton = styled(IoIosArrowRoundForward)`
  width: 20px;
  height: 20px;
  margin-left: 7px;
  cursor: pointer;
`;

export const ButtonSlider = styled.button`
  cursor: pointer;
  background: transparent;
  width: 119px;
  height: 40px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  color: #ffffff;
  box-shadow: none;

  border: 2px solid #ffffff;
  @media (min-width: 1440px) {
    bottom: 50px;
  }
  @media (min-width: 1800px) {
    bottom: 40px;
  }
`;

export const TextHover = styled.h4`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  margin: 0 auto;
  color: #ffffff;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0px 4px 6.4px rgba(0, 0, 0, 0.28);

  @media (min-width: 768px) {
    bottom: 80px;
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    bottom: 80px;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    bottom: 100px;
    font-size: 20px;
  }
  @media (min-width: 1800px) {
    font-weight: 600;
    font-size: 18px;
    bottom: 90px;
  }
`;

export const GalleryTextItem = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  bottom: 0;
  left: 20px;
  color: #ffffff;
  position: absolute;
`;
