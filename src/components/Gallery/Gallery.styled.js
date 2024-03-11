import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const GalleryConteiner = styled.div`
  text-align: center;
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
  width: 100%;
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
  width: 20px;
  height: 20px;
  margin-left: 7px;
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
  justify-content: center;
  margin: 0 auto;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  color: #232629;

  border: 0;
`;
