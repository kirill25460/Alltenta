import styled from 'styled-components';

export const WhyChooseUsConteiner = styled.div`
  margin-bottom: 150px;
`;

export const TextBlock = styled.div`
  width: 860px;
  margin: 0 auto;
  text-align: center;
`;

export const TextWhyChooseUs = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;

  margin: 0;

  color: #767676;
`;

export const MainTextWhyChooseUs = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;

  margin: 0;

  color: #001d3d;
`;

export const WhyChooseUsList = styled.ul`
  list-style: none;

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const WhyChooseUsItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;

  width: 484px;

  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

export const SvgItem = styled.img`
  width: 54px;
  height: 54px;

  margin-right: 15px;
`;

export const ListConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 52px;
`;
