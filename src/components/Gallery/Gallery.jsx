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
import { Link } from 'react-scroll';

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
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <GalleryConteiner id="gallery">
      <MainGalleryText>ГАЛЕРЕЯ / КАТАЛОГ</MainGalleryText>
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
                <Link to="order" smooth={true} duration={500} offset={-70}>
                  <ButtonSlider
                    onMouseEnter={() => mouseEnter(index)}
                    onMouseLeave={mouseLeave}
                  >
                    Замовити <ArrowRightButton />
                  </ButtonSlider>
                </Link>
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
