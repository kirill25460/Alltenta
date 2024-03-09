import {
  ArrowBox,
  ArrowHeroContainer,
  ArrowHeroModileContainer,
  ArrowLeft,
  ArrowRight,
  BlackSpan,
  GreySpan,
  HeroButton,
  HeroContainer,
  HeroImg,
  HeroSource,
  LeftHeroConatiner,
  RightHeroContainer,
  SmallArrow,
} from './Hero.styled';
import hero_img from '../../Images/hero_img.png';
import hero_img360 from '../../Images/hero_img360.png';
import { useState } from 'react';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ttry = () => {
    console.log('fdsf');
  };

  return (
    <HeroContainer>
      <LeftHeroConatiner>
        <GreySpan>ПРОЕКТ</GreySpan>
        <BlackSpan>ВЕРАНДА</BlackSpan>
        <ArrowHeroContainer>
          <ArrowBox>
            <ArrowLeft />
          </ArrowBox>
          <ArrowBox>
            <ArrowRight />
          </ArrowBox>
        </ArrowHeroContainer>
      </LeftHeroConatiner>
      <RightHeroContainer>
        <picture>
          <source media="(max-width: 360px)" srcSet={hero_img360} />
          <HeroImg
            src={hero_img}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </picture>
        {isHovered && (
          <HeroButton
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => ttry()}
          >
            Замовити <SmallArrow />
          </HeroButton>
        )}
      </RightHeroContainer>
    </HeroContainer>
  );
};
