import {
  AlltentaGalleryConteiner,
  FirstGalleryBlock,
  ImgGallery,
  ImgGalleryItem,
  ImgSection,
  ImgSmall,
  ImgSmallItem,
  MainGalleryText,
  SecondGalleryBlock,
} from './AlltentaGallery.styled';
import img1 from '../../Images/img5.png';
import Tab1 from '../../Images/img5_tab.png';
import img2 from '../../Images/img6.png';
import Tab2 from '../../Images/img6_tab(1).jpeg';
import SHTORIPVH4 from '../../Images/SHTORIPVH4.jpg';
import SHTORIPVH5 from '../../Images/SHTORIPVH5.jpg';

export const AlltentaGallery = () => {
  return (
    <AlltentaGalleryConteiner>
      <MainGalleryText>Галерея</MainGalleryText>
      <FirstGalleryBlock>
        <picture>
          <source media="(max-width: 767px)" srcSet={Tab1} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={Tab1}
          />
          <ImgGalleryItem src={img1} />
        </picture>
        <picture>
          <source media="(max-width: 767px)" srcSet={SHTORIPVH4} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={SHTORIPVH4}
          />
          <ImgGallery src={SHTORIPVH4} />
        </picture>
      </FirstGalleryBlock>
      <SecondGalleryBlock>
        <picture>
          <source media="(max-width: 767px)" srcSet={SHTORIPVH5} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={SHTORIPVH5}
          />
          <ImgGallery src={SHTORIPVH5} />
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
      </SecondGalleryBlock>
    </AlltentaGalleryConteiner>
  );
};
