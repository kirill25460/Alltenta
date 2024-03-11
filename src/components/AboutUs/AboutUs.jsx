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
        <MainTextAboutUs><MainTextAboutUsSpan>ПРО</MainTextAboutUsSpan> НАС</MainTextAboutUs>
        <AboutUsText>
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо
          тенти, тенти тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти
          тентові. Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.
          Робимо тенти, тенти тентові. Робимо тенти, тенти тентові.{' '}
        </AboutUsText>
        <AboutUsButton>
          Наші роботи
          <AboutUsArrow />
        </AboutUsButton>
      </AboutUsBlock>
    </AboutUsConteiner>
  );
};
