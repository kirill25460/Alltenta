import {
  CompanyProfileConteiner,
  EquipmentAndValuesBlock,
  EquipmentAndValuesImg,
  EquipmentAndValuesMainText,
  EquipmentAndValuesSection,
  EquipmentAndValuesText,
  ExperienceBlock,
  ExperienceMainText,
  ExperienceText,
  ProductionAndStaffBlock,
  ProductionAndStaffImg,
  ProductionAndStaffMainText,
  ProductionAndStaffSection,
  ProductionAndStaffText,
  WorkingPrinciplesBlock,
  WorkingPrinciplesMainText,
  WorkingPrinciplesText,
  WorkingProcessBlock,
  WorkingProcessMainText,
  WorkingProcessText,
} from './CompanyProfileSection .styled';
import img from '../../Images/img6.png';
import imgTab from '../../Images/img6_tab(1).jpeg';

export const CompanyProfile = () => {
  return (
    <CompanyProfileConteiner>
      <ExperienceBlock>
        <ExperienceMainText>
          Досвід це основа успішної співпраці
        </ExperienceMainText>
        <ExperienceText>
          Компанія «Alltenta» вже понад 12 років успішно працює на ринку виробів
          з ПВХ тканини та ПВХ плівки. Ми зарекомендували себе як надійний
          виробник високоякісної продукції, забезпечуючи клієнтів найкращими
          рішеннями у сфері ПВХ матеріалів.
        </ExperienceText>
      </ExperienceBlock>
      <ProductionAndStaffBlock>
        <picture>
          <source media="(max-width: 767px)" srcSet={imgTab} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={imgTab}
          />
          <ProductionAndStaffImg src={img} />
        </picture>
        <ProductionAndStaffSection>
          <ProductionAndStaffMainText>
            Виробничі потужності та персонал
          </ProductionAndStaffMainText>
          <ProductionAndStaffText>
            Наша компанія пишається власними виробничими потужностями, які
            дозволяють нам виконувати всі замовлення швидко та якісно. Ми маємо
            сучасне обладнання та висококваліфікований персонал, що
            спеціалізується на виготовленні найрізноманітніших виробів з ПВХ
            матеріалів. Наші фахівці проходять регулярне навчання і підвищення
            кваліфікації, що дозволяє нам залишатися лідерами в галузі.
          </ProductionAndStaffText>
        </ProductionAndStaffSection>
      </ProductionAndStaffBlock>
      <WorkingProcessBlock>
        <WorkingProcessMainText>
          Використання європейських матеріалів
        </WorkingProcessMainText>
        <WorkingProcessText>
          В своїй роботі ми використовуємо лише матеріали європейського
          виробництва, що гарантує високу якість та довговічність нашої
          продукції. Співпраця з провідними європейськими постачальниками
          дозволяє нам забезпечувати наших клієнтів найкращими матеріалами, які
          відповідають всім міжнародним стандартам.
        </WorkingProcessText>
      </WorkingProcessBlock>
      <EquipmentAndValuesBlock>
        <EquipmentAndValuesSection>
          <EquipmentAndValuesMainText>
            Професійне обладнання та цінності нашої компанії
          </EquipmentAndValuesMainText>
          <EquipmentAndValuesText>
            Всі роботи з пайки ПВХ ми виконуємо на професійному обладнанні
            швейцарської компанії Leister. Це дозволяє нам досягати максимальної
            точності та надійності у виготовленні виробів. Використання
            передових технологій та обладнання забезпечує високу продуктивність
            та якість нашої продукції. Ми завжди готові розробити та виготовити
            продукцію за індивідуальними вимогами клієнтів, забезпечуючи високу
            якість та відповідність всім їхнім потребам.
          </EquipmentAndValuesText>
        </EquipmentAndValuesSection>
        <EquipmentAndValuesImg src={img} />
      </EquipmentAndValuesBlock>
      <WorkingPrinciplesBlock>
        <WorkingPrinciplesMainText>
          Про принцип роботи
        </WorkingPrinciplesMainText>
        <WorkingPrinciplesText>
          Компанія «Alltenta» завжди орієнтується на задоволення потреб клієнтів
          та надання високоякісних послуг. Ми цінуємо довіру наших клієнтів і
          прагнемо до встановлення довгострокових партнерських відносин.
          Надійність, професіоналізм та інновації – це основні принципи нашої
          роботи. Запрошуємо вас стати нашими партнерами та переконатися в
          якості продукції та послуг, які пропонує компанія «Alltenta».
        </WorkingPrinciplesText>
      </WorkingPrinciplesBlock>
    </CompanyProfileConteiner>
  );
};
