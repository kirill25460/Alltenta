import styled from 'styled-components';

export const ContactInformationConteiner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  padding-left: 15px;
  padding-right: 15px;

  margin-top: 60px;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 148px;
    align-items: center;
    justify-content: center;
    flex-direction: unset;
    text-align: unset;
  }

  @media (min-width: 1200px) {
    margin-top: 180px;
    margin-bottom: 148px;
  }
`;

export const TextInformation = styled.div``;

export const MainTextContactInformation = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 66px;

  color: #001d3d;

  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 33px;
    line-height: 66px;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
    line-height: 66px;
  }
`;

export const InformationList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const InformationItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #767676;

  &:not(:last-child) {
    margin-bottom: 41px;
  }

  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const InformationLink = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #001d3d;

  text-decoration-line: underline;

  margin-top: 20px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 28px;
    line-height: 30px;
  }
`;

export const ImgInformationBlock = styled.img`
  width: 399px;
  height: 390px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 324px;
    height: 317px;
  }

  @media (min-width: 1200px) {
    width: 399px;
    height: 390px;
  }
`;
