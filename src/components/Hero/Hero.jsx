import React, { useState, useEffect } from 'react';
import {
  ArrowBox,
  ArrowHeroContainer,
  ArrowHeroContainerMobile,
  ArrowLeft,
  ArrowRight,
  BlackSpan,
  GreySpan,
  HeroButton,
  HeroContainer,
  HeroImg,
  LeftHeroConatiner,
  RightHeroContainer,
  SmallArrow,
} from './Hero.styled';
import hero_img from '../../Images/hero_img.png';
import hero_img360 from '../../Images/hero_img360.png';
import hero_img768 from '../../Images/hero_img768.png';
import hero_img2 from '../../Images/image2.png';
import { Link } from 'react-scroll';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero_img, hero_img360, hero_img768, hero_img2];
  const [imageSrc, setImageSrc] = useState(images[currentImage]);

  useEffect(() => {
    setImageSrc(images[currentImage]);
  }, [currentImage, images]);

  useEffect(() => {
    const handleResize = () => {
      // Определение ширины окна просмотра
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setCurrentImage(1); // Мобильные устройства
      } else if (screenWidth <= 1200) {
        setCurrentImage(2); // Планшеты
      } else {
        setCurrentImage(0); // Десктопы
      }
    };

    handleResize(); // Установка начальных значений
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLeftArrowClick = () => {
    setCurrentImage(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImage(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonClick = () => {
    // Логика для кнопки "Замовити"
  };

  return (
    <HeroContainer id="home">
      <LeftHeroConatiner>
        <GreySpan>ПРОЕКТ</GreySpan>
        <BlackSpan>ВЕРАНДА</BlackSpan>
        <ArrowHeroContainer>
          <ArrowBox onClick={handleLeftArrowClick}>
            <ArrowLeft />
          </ArrowBox>
          <ArrowBox onClick={handleRightArrowClick}>
            <ArrowRight />
          </ArrowBox>
        </ArrowHeroContainer>
      </LeftHeroConatiner>
      <RightHeroContainer>
          <HeroImg
            src={imageSrc}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        {isHovered && (
          <Link to="order" smooth={true} duration={500} offset={-70}>
            <HeroButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleButtonClick}
            >
              Замовити <SmallArrow />
            </HeroButton>
          </Link>
        )}
      </RightHeroContainer>
      <ArrowHeroContainerMobile>
        <ArrowBox onClick={handleLeftArrowClick}>
          <ArrowLeft />
        </ArrowBox>
        <ArrowBox onClick={handleRightArrowClick}>
          <ArrowRight />
        </ArrowBox>
      </ArrowHeroContainerMobile>
    </HeroContainer>
  );
};