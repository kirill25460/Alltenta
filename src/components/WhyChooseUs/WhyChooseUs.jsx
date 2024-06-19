import {
  CheckMark,
  ListConteiner,
  MainTextWhyChooseUs,
  ServicesItem,
  ServicesList,
  SpanWhyChooseUs,
  // SvgItem,
  TextBlock,
  TextWhyChooseUs,
  WhyChooseUsConteiner,
  WhyChooseUsItem,
  WhyChooseUsItemText,
  WhyChooseUsList,
  WhyChooseUsListSecond,
} from './WhyChooseUs.styled';
// import ProductPageSvg from '../../Images/ProductPageSvg.svg';

export const WhyChooseUs = () => {
  return (
    <WhyChooseUsConteiner>
      <TextBlock>
        <MainTextWhyChooseUs>НАШІ ПОСЛУГИ</MainTextWhyChooseUs>
        <TextWhyChooseUs>
          Наша компанія надає повний комплекс послуг починаючи від виїзду
          замірювальника, закінчуючи післягарантійним обслуговуванням ПВХ штор і
          їх ремонтом. Ми зварюємо, а не зшиваємо полотна між собою і надаємо
          гарантію 24 місяці на зварювальний шов. Ми здійснюємо доставку нашої
          продукції по всій території України. Монтаж ПВХ штор, завіс та м'яких
          вікон нашими фахівцями виконується по Києву та Київській області.
        </TextWhyChooseUs>
        <ServicesList>
          <SpanWhyChooseUs>Заміри об'єкта. Виїзд майстра.</SpanWhyChooseUs>
          <ServicesItem>
            - Наша компанія надає послуги по заміру конструкцій з подальшим
            наданням креслення і комерційної пропозиції.
          </ServicesItem>
          <SpanWhyChooseUs>Монтаж і демонтаж ПВХ конструкцій.</SpanWhyChooseUs>
          <ServicesItem>
            - Наша компанія надає послуги з монтажу та демонтажу ПВХ штор по
            Києву та Київській області. Вартість монтажу будь-якої конструкції
            від 2500 грн.
          </ServicesItem>
          <SpanWhyChooseUs>Зварювання ПВХ тканини.</SpanWhyChooseUs>
          <ServicesItem>
            - Наша компанія зварює (не зшиває) ПВХ полотна між собою за
            допомогою швейцарського обладнання Leister Uniplan S.
          </ServicesItem>
          <SpanWhyChooseUs>Ремонт або заміна.</SpanWhyChooseUs>
          <ServicesItem>
            - Наша компанія надає послуги з ремонту ПВХ конструкцій. Якщо ремонт
            не виправданий або неможливий ми виготовимо штору того ж розміру і
            кольору в найкоротші терміни.
          </ServicesItem>
        </ServicesList>
      </TextBlock>
      <ListConteiner>
        <WhyChooseUsList>
          <WhyChooseUsItem>
            {/* <SvgItem src={ProductPageSvg} /> */}
            <CheckMark />
            <WhyChooseUsItemText>
              Ми пропонуємо гарантію на всі наші вироби з ПВХ. Гарантійний
              термін на зварні шви становить 3 роки, а загальний термін
              експлуатації виробів – до 7 років. Це підтвердження нашого
              високого рівня якості та надійності.
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              У виробництві використовується лише сертифікована та перевірена
              сировина, що забезпечує довговічність та надійність наших виробів.
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              Ми застосовуємо новітні технології та інноваційні рішення, що
              дозволяє створювати продукцію високої якості з мінімальними
              термінами виробництва.
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              Наша продукція з ПВХ повністю безпечна для здоров'я та
              навколишнього середовища, відповідає всім сучасним екологічним
              стандартам.
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              Ми враховуємо всі побажання та вимоги клієнтів, пропонуючи
              індивідуальні рішення для кожного проєкту.
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          {/* <WhyChooseUsItem>
            <CheckMark />
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            Ми пропонуємо якісну продукцію за доступними цінами, що робить наші
            вироби чудовим вибором для всіх категорій клієнтів.
          </WhyChooseUsItem> */}
        </WhyChooseUsList>
        <WhyChooseUsListSecond>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              Ми пропонуємо якісну продукцію за доступними цінами, що робить
              наші вироби чудовим вибором для всіх категорій клієнтів.
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              У нашому каталозі представлені різні види ПВХ виробів: вікна,
              двері, фасади та багато іншого, що дозволяє задовольнити будь-які
              потреби клієнтів.{' '}
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              {' '}
              Ми забезпечуємо оперативну доставку продукції в будь-який регіон,
              гарантуючи дотримання термінів і цілісність виробів.{' '}
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              {' '}
              Наші фахівці завжди готові допомогти вам з вибором продукції,
              відповісти на всі питання та надати професійні рекомендації.{' '}
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            <WhyChooseUsItemText>
              {' '}
              Ми забезпечуємо комплексне обслуговування після продажу, включаючи
              встановлення, ремонт та обслуговування виробів з ПВХ.{' '}
            </WhyChooseUsItemText>
          </WhyChooseUsItem>
          {/* <WhyChooseUsItem>
            <CheckMark />
            30 дней возврат или обмен продукции.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <CheckMark />
            Официальная гарантия до 3-х лет, в комплекте гарантийный талон
          </WhyChooseUsItem> */}
        </WhyChooseUsListSecond>
      </ListConteiner>
    </WhyChooseUsConteiner>
  );
};
