import styled from 'styled-components';

export const WhyChooseUsConteiner = styled.div`
  
  @media (min-width: 768px) {
   
  }

  @media (min-width: 1024px) {
    margin-bottom: 150px;
  }
`;

export const TextBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
   
  }

  @media (min-width: 1024px) {
    width: 860px;
  }
`;

export const TextWhyChooseUs = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  margin: 0;

font-size: 16px;
line-height: 20px;
text-align: center;

color: #767676;

width: 250px;

  @media (min-width: 768px) {
width: 640px;
font-weight: 600;
font-size: 22px;
line-height: 27px;
text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media (min-width: 1440px) {
width: 860px;
font-size: 30px;
line-height: 37px;
text-align: center;
  }
`;

export const MainTextWhyChooseUs = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  margin: 0;
font-size: 22px;
line-height: 27px;
text-align: center;

color: #001D3D;
width: 250px;


  @media (min-width: 768px) {
    width: 640px;
font-weight: 600;
font-size: 22px;
line-height: 27px;
text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  line-height: 37px;
  }
  @media (min-width: 1440px) {
width: 860px;
font-size: 30px;
line-height: 37px;
text-align: center;
  }
`;

export const WhyChooseUsList = styled.ul`
  list-style: none;
padding: 0px;
 margin: 0px;
  @media (min-width: 768px) {
   
  }

  @media (min-width: 1024px) {
    &:not(:last-child) {
    margin-right: 32px;
  }
  }
`;

export const WhyChooseUsItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #000000;
width: 240px;
font-size: 11px;
line-height: 13px;
margin-top: 20px;
 
  @media (min-width: 768px) {
   
  }

  @media (min-width: 1024px) {
    width: 484px;
    font-size: 19px;
    line-height: 23px;
    &:not(:last-child) {
    margin-bottom: 60px;
  }
  }
`;

export const SvgItem = styled.img`
  width: 34px;
  height: 34px;

  margin-right: 15px;
  @media (min-width: 768px) {
   
  }

  @media (min-width: 1024px) {
    width: 54px;
    height: 54px;
  }
`;

export const ListConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 margin-top: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    margin-top: 52px;
  }
`;
