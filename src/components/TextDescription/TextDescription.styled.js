import styled from 'styled-components';

export const ProductDescriptionTextContainer = styled.div`
  text-align: left;
  margin: 0 auto;
  width: 300px;

  @media (min-width: 768px) {
    width: 664px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const ProductDescriptionText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #767676;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 25px;
    line-height: 30px;
  }
`;
