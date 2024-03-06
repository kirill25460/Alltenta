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
} from './AboutUs.styled';
import aboutUsImage from '../../Images/aboutUsImage.png';
import aboutUsImageSecond from '../../Images/secondAboutUsImage.png';

export const AboutUs = () => {
  return (
    <AboutUsConteiner>
      <AboutUsImageBlock>
        <AboutUsImageSecond src={aboutUsImageSecond} alt="house" />
        <AboutUsImageFirst src={aboutUsImage} alt="house" />
      </AboutUsImageBlock>
      <AboutUsBlock>
        <MainTextAboutUs>ПРО НАС</MainTextAboutUs>
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
        <AboutUsButton>Наші роботи<AboutUsArrow/></AboutUsButton>
      </AboutUsBlock>
    </AboutUsConteiner>
  );
};
