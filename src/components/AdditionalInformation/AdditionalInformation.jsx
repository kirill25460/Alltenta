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
          Доставка обраного товару здійснюється протягом 1-3 робочих днів, після
          виготовлення. Ваш товар може бути доставлений в будь-який населений
          пункт України. При замовленні на суму від 40 000 грн, вартість
          доставки безкоштовна (варто враховувати, що дана пропозиція не
          підсумовується зі знижками та акційними пропозиціями). Товари на суму
          до 150 грн післяплатою не потрапляють. Доставка великогабаритних
          посилок прораховується індивідуально, залежно від розміру товару.
          Після виготовлення замовлення, час доставки буде узгоджено з Вами
          нашими менеджерами. Повернення і обмін Компанія "ПВХ штори" здійснює
          повернення та обмін товарів належної якості відповідно до Закону « Про
          захист прав споживачів ». Обмін або повернення не стосується виробів
          виготовлених за Пускозарядний розміром. Строки повернення і обміну
          Повернення і обмін товарів можливий протягом 14 днів після отримання
          товару покупцем. Зворотній доставка товарів здійснюється за
          домовленістю. Умови повернення для товарів належної якості Відповідно
          до Закону «Про захист прав споживачів», компанія може відмовити
          споживачеві в обміні і поверненні товарів належної якості, якщо вони
          відносяться до категорій, зазначених у чинному Переліку непродовольчих
          товарів належної якості, що не підлягають поверненню та обміну.
        </AdviceText>
      </AdviceBlock>
    </AdditionalInformationConteiner>
  );
};
