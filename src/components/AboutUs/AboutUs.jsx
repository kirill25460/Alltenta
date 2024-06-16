import {
  AboutUsArrow,
  AboutUsBlock,
  AboutUsButton,
  AboutUsConteiner,
  AboutUsConteinerItem,
  AboutUsImageBlock,
  AboutUsImageFirst,
  AboutUsImageSecond,
  AboutUsText,
  MainTextAboutUs,
  MainTextAboutUsMobile,
  MainTextAboutUsSpan,
  MainTextAboutUsSpanMobile,
} from './AboutUs.styled';
import aboutUsImage from '../../Images/img6.png';
// import aboutUsImage768 from '../../Images/img6_tab.png';
import aboutUsImage768 from '../../Images/img6_tab(1).jpeg';
// import aboutUsImage360 from '../../Images/img6_mob.png';
import aboutUsImage360 from '../../Images/img6_mob(1).jpeg';
import aboutUsImageSecond from '../../Images/img7.png';
import aboutUsImageSecond768 from '../../Images/img7_tab.png';
// import aboutUsImageSecond360 from '../../Images/img7_mob.png';
import aboutUsImageSecond360 from '../../Images/img7_mob(1).jpeg';

import { Link } from 'react-scroll';

export const AboutUs = () => {
  return (
    <AboutUsConteiner id="about">
      <MainTextAboutUsMobile>
        <MainTextAboutUsSpanMobile>ПРО</MainTextAboutUsSpanMobile> Alltenta
      </MainTextAboutUsMobile>
      <AboutUsConteinerItem>
        <AboutUsImageBlock>
          <picture>
            <source media="(max-width: 767px)" srcSet={aboutUsImageSecond360} />
            <source
              media="(min-width: 768px) and (max-width: 1024px)"
              srcSet={aboutUsImageSecond768}
            />
            <AboutUsImageSecond src={aboutUsImageSecond} alt="house" />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet={aboutUsImage360} />
            <source
              media="(min-width: 768px) and (max-width: 1024px)"
              srcSet={aboutUsImage768}
            />
            <AboutUsImageFirst src={aboutUsImage} alt="house" />
          </picture>
        </AboutUsImageBlock>
        <AboutUsBlock>
          <MainTextAboutUs>
            <MainTextAboutUsSpan>ПРО</MainTextAboutUsSpan> Alltenta
          </MainTextAboutUs>
          <AboutUsText>
            Компанія «Alltenta» – надійний виробник виробів з ПВХ тканини та ПВХ
            плівки з понад 12-річним досвідом на ринку. Ми пропонуємо широкий
            асортимент високоякісної продукції, виготовленої з європейських
            матеріалів на професійному обладнанні швейцарської компанії Leister.
            Наша команда висококваліфікованих спеціалістів забезпечує
            індивідуальний підхід до кожного клієнта, гарантуючи надійність,
            довговічність та високу якість усіх виробів. Обирайте «Alltenta» для
            найкращих рішень у сфері ПВХ матеріалів!
          </AboutUsText>
          {/* <AboutUsButton>
            <Link to="gallery" smooth={true} duration={500} offset={-70}>
              Наші роботи
            </Link>
            <AboutUsArrow />
          </AboutUsButton> */}
        </AboutUsBlock>
      </AboutUsConteinerItem>
    </AboutUsConteiner>
  );
};
