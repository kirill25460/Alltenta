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
  ImgSmallItem,
  SecondAdditionalInformationBlock,
  TextAdditionalInformationBlock,
} from './AdditionalInformation.styled';
import img1 from '../../Images/img5.png';
import Tab1 from '../../Images/img5_tab.png';
import img2 from '../../Images/img6.png';
import Tab2 from '../../Images/img6_tab(1).jpeg';

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
        <picture>
          <source media="(max-width: 767px)" srcSet={Tab1} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={Tab1}
          />
          <ImgAdditionalInformationItem src={img1} />
        </picture>
        <picture>
          <source media="(max-width: 767px)" srcSet={Tab2} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={Tab2}
          />
          <ImgAdditionalInformation src={img2} />
        </picture>
      </FirstAdditionalInformationBlock>
      <SecondAdditionalInformationBlock>
        <picture>
          <source media="(max-width: 767px)" srcSet={Tab2} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={Tab2}
          />
          <ImgAdditionalInformation src={img2} />
        </picture>
        <ImgSection>
          <picture>
            <source media="(max-width: 767px)" srcSet={Tab2} />
            <source
              media="(min-width: 768px) and (max-width: 1199px)"
              srcSet={Tab2}
            />
            <ImgSmall src={img2} />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet={Tab2} />
            <source
              media="(min-width: 768px) and (max-width: 1199px)"
              srcSet={Tab2}
            />
            <ImgSmallItem src={img2} />
          </picture>
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
