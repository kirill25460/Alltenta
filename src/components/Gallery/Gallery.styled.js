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
`;

export const GalleryBlockConteiner = styled.div``;

export const GalleryItemImage = styled.img`
  width: 360px;
  height: 360px;
  transition: filter 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const ArrowLeft = styled(IoIosArrowRoundBack)`
  width: 45px;
  height: 40px;
`;
export const ArrowRight = styled(IoIosArrowRoundForward)`
  width: 45px;
  height: 40px;
`;
