import React, { useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ButtonBlockItem,
  ButtonConteiner,
  GalleryBlockConteiner,
  GalleryConteiner,
  GalleryItemImage,
  GalleryText,
  MainGalleryText,
  SliderConteiner,
} from './Gallery.styled';
import image2 from '../../Images/image2.png';
import image3 from '../../Images/image3.png';
import image4 from '../../Images/image4.png';
import image5 from '../../Images/image5.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Gallery = () => {
  const images = [image2, image3, image4, image5];

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 4,
    speed: 500,
    draggable: false, 
    arrows: false,
  };

  return (
    <GalleryConteiner>
      <MainGalleryText>ГАЛЕРЕЯ / КАТАЛОГ</MainGalleryText>
      <GalleryText>
        Ше трошки тексту про тенти, про всілякі різні кольорові там, з різних
        матеріалів або різних типів і шо все воно є в нас.
      </GalleryText>
      <GalleryBlockConteiner>
        <SliderConteiner>
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <GalleryItemImage
                key={index}
                src={image}
                alt={`image${index + 2}`}
              />
            ))}
          </Slider>
        </SliderConteiner>
        <ButtonConteiner>
          <ButtonBlockItem onClick={previous}>
            <ArrowLeft />
          </ButtonBlockItem>
          <ButtonBlockItem onClick={next}>
            <ArrowRight />
          </ButtonBlockItem>
        </ButtonConteiner>
      </GalleryBlockConteiner>
    </GalleryConteiner>
  );
};
