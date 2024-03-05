import {
  ArrowBox,
  ArrowHeroContainer,
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
        <HeroImg
          src={hero_img}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
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
