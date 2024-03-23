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
import hero_img360 from '../../Images/hero_img360.png';
import hero_img768 from '../../Images/hero_img768.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

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
    <HeroContainer id="home">
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
          <source media="(max-width: 768px)" srcSet={hero_img360} />
          <source media="(max-width: 1200px)" srcSet={hero_img768} />
          <HeroImg
            src={hero_img}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </picture>
        {isHovered && (
          <Link to="order" smooth={true} duration={500} offset={-70}>
            <HeroButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => ttry()}
            >
              Замовити <SmallArrow />
            </HeroButton>
          </Link>
        )}
      </RightHeroContainer>
    </HeroContainer>
  );
};
