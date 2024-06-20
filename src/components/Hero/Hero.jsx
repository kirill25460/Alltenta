import React, { useState, useEffect, useMemo } from 'react';
import {
  // ArrowBox,
  // ArrowHeroContainer,
  // ArrowHeroContainerMobile,
  // ArrowLeft,
  // ArrowRight,
  BlackSpan,
  // ButtonBlock,
  GreySpan,
  HeroButton,
  HeroButtonMobile,
  HeroContainer,
  HeroImg,
  LeftHeroConatiner,
  // NavLinkHero,
  RightHeroContainer,
  // SmallArrow,
} from './Hero.styled';
import hero_img from '../../Images/img2.png';
import hero_img2 from '../../Images/img3.png';
import hero_img3 from '../../Images/img1.png';
// import hero_img360 from '../../Images/hero_img360.png';
// import hero_img768 from '../../Images/hero_img768.png';
// import hero_img2 from '../../Images/image2.png';
import { Link } from 'react-scroll';

export const Hero = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = useMemo(() => [hero_img, hero_img2, hero_img3], []);
  const [imageSrc, setImageSrc] = useState(images[currentImage]);

  useEffect(() => {
    setImageSrc(images[currentImage]);
  }, [currentImage, images]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setCurrentImage(0); // Мобильные устройства
      } else if (screenWidth <= 1200) {
        setCurrentImage(0); // Планшеты
      } else {
        setCurrentImage(0); // Десктопы
      }
    };

    handleResize(); // Установка начальных значений
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Удаление пустого массива зависимостей

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const handleLeftArrowClick = () => {
  //   setCurrentImage(prevIndex =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleRightArrowClick = () => {
  //   setCurrentImage(prevIndex =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handleButtonClick = () => {
  //   // Логика для кнопки "Замовити"
  // };

  return (
    <HeroContainer id="home">
      <LeftHeroConatiner>
        <GreySpan>ПРОЄКТ</GreySpan>
        <BlackSpan>ВЕРАНДА</BlackSpan>
        {/* <ArrowHeroContainer>
          <ArrowBox onClick={handleLeftArrowClick}>
            <ArrowLeft />
          </ArrowBox>
          <ArrowBox onClick={handleRightArrowClick}>
            <ArrowRight />
          </ArrowBox>
        </ArrowHeroContainer> */}
        <Link to="order" smooth={true} duration={500} offset={-70}>
          <HeroButton
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
            Замовити
          </HeroButton>
        </Link>
      </LeftHeroConatiner>
      <RightHeroContainer>
        <HeroImg
          src={imageSrc}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        />
        {/* {isHovered ? (
          <ButtonBlock>
            <NavLinkHero to="/Product">
              <SmallArrow
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </NavLinkHero>
          </ButtonBlock>
        ) : (
          <></>
        )} */}
      </RightHeroContainer>
      {/* <ArrowHeroContainerMobile>
        <ArrowBox onClick={handleLeftArrowClick}>
          <ArrowLeft />
        </ArrowBox>
        <ArrowBox onClick={handleRightArrowClick}>
          <ArrowRight />
        </ArrowBox>
      </ArrowHeroContainerMobile> */}
      <Link to="order" smooth={true} duration={500} offset={-70}>
        <HeroButtonMobile
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
          Замовити
        </HeroButtonMobile>
      </Link>
    </HeroContainer>
  );
};
