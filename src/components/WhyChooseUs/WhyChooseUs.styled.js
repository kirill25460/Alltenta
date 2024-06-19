import styled from 'styled-components';
import { MdDoneOutline } from 'react-icons/md';

export const WhyChooseUsConteiner = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
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
    width: 1000px;
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

  color: #001d3d;
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
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

export const WhyChooseUsListSecond = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: none;
  @media (min-width: 768px) {
    display: unset;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

export const WhyChooseUsItem = styled.li`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
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

export const WhyChooseUsItemText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #000000;
  width: 240px;
  font-size: 11px;
  line-height: 13px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    width: 484px;
    font-size: 19px;
    line-height: 23px;
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;

export const ListConteiner = styled.div`
  display: flex;
  align-items: normal;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin-top: 52px;
  }
`;

export const CheckMark = styled(MdDoneOutline)`
  width: 35px;
  height: 35px;
  margin-right: 15px;

  @media (min-width: 768px) {
    margin-right: 15px;
  }

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

export const ServicesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 20px;

  width: 250px;

  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1024px) {
    width: 860px;
  }
`;

export const ServicesItem = styled.li`
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #767676;

  :before {
    content: '-';
    margin-right: 5px;
  }
`;

export const SpanWhyChooseUs = styled.span`
  margin-right: 5px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: left;

  color: #001d3d;
`;
