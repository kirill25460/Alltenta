import {
  ContactInformationConteiner,
  ImgInformationBlock,
  InformationItem,
  InformationLink,
  InformationList,
  MainTextContactInformation,
  TextInformation,
} from './ContactInformation.styled';
import img from '../../Images/ContactInformationImg.png';

export const ContactInformation = () => {
  return (
    <ContactInformationConteiner>
      <TextInformation>
        <MainTextContactInformation>
          Контактна інформація
        </MainTextContactInformation>
        <InformationList>
          <InformationItem>
            Зателефонуйте нам<InformationLink>+380 648 044 44</InformationLink>
          </InformationItem>
          <InformationItem>
            Електронна пошта<InformationLink>altenta@gmail.com</InformationLink>
          </InformationItem>
          <InformationItem>
            Завітайте до нас
            <InformationLink>Вул. П’ятницька 23А</InformationLink>
          </InformationItem>
        </InformationList>
      </TextInformation>
      <ImgInformationBlock src={img} />
    </ContactInformationConteiner>
  );
};
