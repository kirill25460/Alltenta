import {
  CompanyPerformanceBlock,
  CompanyPerformanceConteiner,
  CompanyPerformanceImage,
  CompanyPerformanceMainText,
  CompanyPerformanceText,
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
        <CompanyPerformanceText>
          Надійній ми Надійній ми Надійній ми Надійній ми Надійній ми
        </CompanyPerformanceText>
      </CompanyPerformanceBlock>
      <CompanyPerformanceBlock>
        <CompanyPerformanceMainText>Досвід</CompanyPerformanceMainText>
        <CompanyPerformanceImage src={experience} alt="experience" />
        <CompanyPerformanceText>
          Надійній ми Надійній ми Надійній ми Надійній ми Надійній ми
        </CompanyPerformanceText>
      </CompanyPerformanceBlock>
      <CompanyPerformanceBlock>
        <CompanyPerformanceMainText>Лояльність</CompanyPerformanceMainText>
        <CompanyPerformanceImage src={loyalty} alt="loyalty" />
        <CompanyPerformanceImage src={loyalt1} alt="loyalt1" />
        <CompanyPerformanceText>
          Надійній ми Надійній ми Надійній ми Надійній ми Надійній ми
        </CompanyPerformanceText>
      </CompanyPerformanceBlock>
    </CompanyPerformanceConteiner>
  );
};
