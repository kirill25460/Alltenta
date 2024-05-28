import styled from 'styled-components';
import backgroundImage from '../../Images/img7.png';

export const HeroAltentaContainer = styled.div`
  width: 100%;
  height: 628px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px -100px 32.4px rgba(0, 0, 0, 0.43);

  margin-top: 87px;
  margin-bottom: 100px;
`;

export const MainTextHeroAlltenta = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 98px;

  text-align: center;

  padding-top: 222px;

  color: #ffffff;
`;

export const TextHeroAlltenta = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;

  text-align: center;

  color: #ffffff;
`;
