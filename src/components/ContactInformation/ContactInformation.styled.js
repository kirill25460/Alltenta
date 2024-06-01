import styled from 'styled-components';

export const ContactInformationConteiner = styled.div`
  margin-top: 180px;
  margin-bottom: 148px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInformation = styled.div``;

export const MainTextContactInformation = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 66px;

  margin-top: 0;

  color: #001d3d;
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
    margin-bottom: 50px;
  }
`;

export const InformationLink = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;

  text-decoration-line: underline;

  color: #001d3d;

  margin-top: 20px;
  margin-bottom: 0;
`;

export const ImgInformationBlock = styled.img`
  width: 399px;
  height: 390px;
`;
