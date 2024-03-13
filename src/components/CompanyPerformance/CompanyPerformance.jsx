import {
  CompanyPerformanceBlock,
  CompanyPerformanceConteiner,
  CompanyPerformanceImage,
  CompanyPerformanceMainText,
  CompanyPerformanceText,
  CompanyPerformanceList,
} from './CompanyPerformance.styled';
import experience from '../../Images/experience.svg';
import reliability from '../../Images/Reliability.svg';
import reliability2 from '../../Images/Reliability2.svg';
import loyalty from '../../Images/Loyalty.svg';
import loyalt1 from '../../Images/Loyalty1.svg';

export const CompanyPerformance = () => {
  return (
    <CompanyPerformanceConteiner>
      <CompanyPerformanceBlock>
        <CompanyPerformanceMainText>Надійність</CompanyPerformanceMainText>
        <CompanyPerformanceImage src={reliability} alt="reliability" />
        <CompanyPerformanceImage src={reliability2} alt="reliability2" />
        <CompanyPerformanceList>
          <li>
            <CompanyPerformanceText>Гарантія 24 міс.</CompanyPerformanceText>
          </li>
          <li>
            <CompanyPerformanceText>
            Термін експлуатації – 7 років
            </CompanyPerformanceText>
          </li>
          <li>
            <CompanyPerformanceText>
              Використання безпечних матеріалів затверджених СЕС
            </CompanyPerformanceText>
          </li>
        </CompanyPerformanceList>
      </CompanyPerformanceBlock>
      <CompanyPerformanceBlock>
        <CompanyPerformanceMainText>Досвід</CompanyPerformanceMainText>
        <CompanyPerformanceImage src={experience} alt="experience" />
        <CompanyPerformanceList>
          <li>
            <CompanyPerformanceText>
            Працюємо понад 12 років
            </CompanyPerformanceText>
          </li>
          <li>
            <CompanyPerformanceText>
            12000 + виконаних замовлень
            </CompanyPerformanceText>
          </li>
          <li>
            <CompanyPerformanceText>
            3000 + змонтованих/встановлених виробів
            </CompanyPerformanceText>
          </li>
        </CompanyPerformanceList>
      </CompanyPerformanceBlock>
      <CompanyPerformanceBlock>
        <CompanyPerformanceMainText>Лояльність</CompanyPerformanceMainText>
        <CompanyPerformanceImage src={loyalty} alt="loyalty" />
        <CompanyPerformanceImage src={loyalt1} alt="loyalt1" />
        <CompanyPerformanceList>
          <li>
            <CompanyPerformanceText>Лояльні ціни без посередників
</CompanyPerformanceText>
          </li>
          <li>
            <CompanyPerformanceText>
            Прозоре ціноутворення та система знижок
            </CompanyPerformanceText>
          </li>
          <li>
            <CompanyPerformanceText>
            Індивідуальний підхід до клієнта
            </CompanyPerformanceText>
          </li>
        </CompanyPerformanceList>
      </CompanyPerformanceBlock>
    </CompanyPerformanceConteiner>
  );
};
