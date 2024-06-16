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
          <source media="(max-width: 767px)" srcSet={Tab2} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={Tab2}
          />
          <ImgGallery src={img2} />
        </picture>
      </FirstGalleryBlock>
      <SecondGalleryBlock>
        <picture>
          <source media="(max-width: 767px)" srcSet={Tab2} />
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={Tab2}
          />
          <ImgGallery src={img2} />
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
