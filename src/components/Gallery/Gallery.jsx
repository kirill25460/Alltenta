import React, { useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightButton,
  ButtonBlockItem,
  ButtonConteiner,
  ButtonSlider,
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [image2, image3, image4, image5];

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const mouseEnter = index => {
    setHoveredIndex(index);
  };

  const mouseLeave = () => {
    setHoveredIndex(null);
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '10px',
    slidesToShow: 4,
    speed: 500,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <GalleryConteiner>
      <MainGalleryText>ГАЛЕРЕЯ / КАТАЛОГ</MainGalleryText>
      <GalleryText>
        Ше трошки тексту про тенти, про всілякі різні кольорові там, з різних
        матеріалів або різних типів і шо все воно є в нас.
      </GalleryText>
      <GalleryBlockConteiner>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <SliderConteiner key={index}>
              <GalleryItemImage
                src={image}
                alt={`image${index + 2}`}
                onMouseEnter={() => mouseEnter(index)}
                onMouseLeave={mouseLeave}
              />
              {hoveredIndex === index && (
                <ButtonSlider>
                  Замовити <ArrowRightButton />
                </ButtonSlider>
              )}
            </SliderConteiner>
          ))}
        </Slider>
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
