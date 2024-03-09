import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const GalleryConteiner = styled.div`
  text-align: center;
`;

export const ButtonConteiner = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonBlockItem = styled.div`
  margin-right: 110px;
`;

export const MainGalleryText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 71px;
  line-height: 66px;
  margin-bottom: 20px;

  color: #001d3d;

  @media (max-width: 360px) {
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

  @media (max-width: 360px) {
    display: none;
  }
`;

export const GalleryBlockConteiner = styled.div``;

export const GalleryItemImage = styled.img`
  width: 510px;
  transition: filter 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const SliderConteiner = styled.div`
  position: relative;
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
  width: 40px;
  height: 35px;
  cursor: pointer;
`;

export const ButtonSlider = styled.button`
  cursor: pointer;
  background: #ffffff;
  width: 119px;
  height: 50px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 66px;
  display: flex;
  align-items: center;

  color: #232629;

  position: absolute;
  top: 460px;
  left: 165px;

  border: 0;
`;
