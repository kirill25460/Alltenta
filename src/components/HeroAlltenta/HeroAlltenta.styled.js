import styled from 'styled-components';
import backgroundImage from '../../Images/img7.png';

export const HeroAltentaContainer = styled.div`
  width: 100%;
  height: 158px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px -100px 32.4px rgba(0, 0, 0, 0.43);
  margin-top: 60px;
  margin-bottom: 100px;


  @media (min-width: 768px) {
    height: 326px;
  }

  @media (min-width: 1400px) {
    height: 628px;
    margin-top: 87px;
    margin-bottom: 100px;
  }
`;

export const MainTextHeroAlltenta = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  padding-top: 50px;
  margin-right: 0px;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 49px;
    padding-top: 116px;
  }

  @media (min-width: 1400px) {
    font-size: 80px;
    line-height: 98px;
    padding-top: 222px;
  }
`;

export const TextHeroAlltenta = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  text-align: center;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }

  @media (min-width: 1400px) {
    font-size: 30px;
    line-height: 37px;
  }
`;
