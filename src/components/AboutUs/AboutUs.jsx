import {
  AboutUsArrow,
  AboutUsBlock,
  AboutUsButton,
  AboutUsConteiner,
  AboutUsImageBlock,
  AboutUsImageFirst,
  AboutUsImageSecond,
  AboutUsText,
  MainTextAboutUs,
  MainTextAboutUsSpan,
} from './AboutUs.styled';
import aboutUsImage from '../../Images/aboutUsImage.png';
import aboutUsImageSecond from '../../Images/secondAboutUsImage.png';
import aboutUsImage360 from '../../Images/aboutUsImage360.png';
import aboutUsImageSecond360 from '../../Images/secondAboutUsImage360.png';

export const AboutUs = () => {
  return (
    <AboutUsConteiner id="about">
      <AboutUsImageBlock>
        <picture>
          <source media="(max-width: 360px)" srcSet={aboutUsImageSecond360} />
          <AboutUsImageSecond src={aboutUsImageSecond} alt="house" />
        </picture>
        <picture>
          <source media="(max-width: 360px)" srcSet={aboutUsImage360} />
          <AboutUsImageFirst src={aboutUsImage} alt="house" />
        </picture>
      </AboutUsImageBlock>
      <AboutUsBlock>
        <MainTextAboutUs>
          <MainTextAboutUsSpan>ПРО</MainTextAboutUsSpan> НАС
        </MainTextAboutUs>
        <AboutUsText>
          Компанія «Alltenta» працює на ринку виробів з ПВХ тканини та ПВХ
          плівки вже понад 12 років. Наша компанія є виробником, маємо власні
          виробничі потужності та висококваліфікований персонал у сфері
          виготовлення будь-яких виробів з ПВХ матеріалів. В своїй роботі
          використовуємо матеріали європейського виробництва, а всі роботи з
          пайки ПВХ виконуємо лише професійним обладнанням швейцарської компанії
          Leister. Компанія «Alltenta» виробляє наступну продукцію:<br/> - М’які вікна
          для альтанок, бесідок, терас та балконів<br/> - Штори ПВХ для авто мийок, СТО
          та складських приміщень <br/> - Тенти на пікапи, легкові, зерновози та
          вантажні авто <br/> - Накриття з ПВХ тканини <br/> - Транспортувальні чохли для лодок
          - Стрічкові завіси ПВХ <br/> - Індивідуальні вироби з ПВХ під замовлення <br/>- Ремонт
          виробів з ПВХ <br/> Терміни виконання замовлення становлять 1-3 дні. У
          виробництві використовуємо ПВХ тканину високої якості з Німеччини,
          Бельгії та Польщі. Фурнітура у виробництві використовується лише
          європейського виробництва компанії Bozamet. Працюємо по всій території
          України, замовлення доставляються будь-яким перевізником за побажанням
          клієнта. Ми працюємо для Вас, задоволений клієнт – наша найголовніша
          нагорода. Телефонуйте та замовляйте саме те що потрібно Вам на
          вигідних умовах.
        </AboutUsText>
        <AboutUsButton>
          Наші роботи
          <AboutUsArrow />
        </AboutUsButton>
      </AboutUsBlock>
    </AboutUsConteiner>
  );
};
