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
  GalleryTextItem,
  MainGalleryText,
  SliderConteiner,
  TextHover,
  // TextActiveButton,
} from './Gallery.styled';
import image2 from '../../Images/img8.png';
import image3 from '../../Images/img9.png';
import image4 from '../../Images/img10.png';
import image5 from '../../Images/img11.png';
import image6 from '../../Images/img12.png';
import image7 from '../../Images/img13.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-scroll';

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [image2, image3, image4, image5, image6, image7];

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
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
              {hoveredIndex !== index ? (
                <GalleryTextItem>Лоджія 23м</GalleryTextItem>
              ) : (
                <></>
              )}
              {hoveredIndex === index && (
                <>
                  <TextHover
                    onMouseEnter={() => mouseEnter(index)}
                    onMouseLeave={mouseLeave}
                  >
                    Лоджія 23м <br />
                    ПВХ/Шось там
                  </TextHover>
                  <Link to="order" smooth={true} duration={500} offset={-70}>
                    <ButtonSlider
                      onMouseEnter={() => mouseEnter(index)}
                      onMouseLeave={mouseLeave}
                    >
                      Замовити <ArrowRightButton />
                    </ButtonSlider>
                  </Link>
                </>
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
