import {
  AdditionalInformationConteiner,
  AdditionalInformationMainText,
  AdditionalInformationText,
  AdviceBlock,
  AdviceMainText,
  AdviceText,
  FirstAdditionalInformationBlock,
  ImgAdditionalInformation,
  ImgAdditionalInformationItem,
  ImgSection,
  ImgSmall,
  SecondAdditionalInformationBlock,
  TextAdditionalInformationBlock,
} from './AdditionalInformation.styled';
import img1 from '../../Images/img7.png';
import img2 from '../../Images/img6.png';

export const AdditionalInformation = () => {
  return (
    <AdditionalInformationConteiner>
      <TextAdditionalInformationBlock>
        <AdditionalInformationMainText>
          Додаткова інформація
        </AdditionalInformationMainText>
        <AdditionalInformationText>
          Наш офіс та виробництво
        </AdditionalInformationText>
      </TextAdditionalInformationBlock>
      <FirstAdditionalInformationBlock>
        <ImgAdditionalInformationItem src={img1} />
        <ImgAdditionalInformation src={img2} />
      </FirstAdditionalInformationBlock>
      <SecondAdditionalInformationBlock>
        <ImgAdditionalInformation src={img2} />
        <ImgSection>
          <ImgSmall src={img2} />
          <ImgSmall src={img2} />
        </ImgSection>
      </SecondAdditionalInformationBlock>
      <AdviceBlock>
        <AdviceMainText>
          Поради щодо паркування та особистого візиту
        </AdviceMainText>
        <AdviceText>
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. (когда получим текст, сможем передалать
          интереснее данный раздел)
        </AdviceText>
      </AdviceBlock>
    </AdditionalInformationConteiner>
  );
};
