import {
  AlltentaGalleryConteiner,
  FirstGalleryBlock,
  ImgGallery,
  ImgGalleryItem,
  ImgSection,
  ImgSmall,
  MainGalleryText,
  SecondGalleryBlock,
} from './AlltentaGallery.styled';
import img1 from '../../Images/img7.png';
import img2 from '../../Images/img6.png';

export const AlltentaGallery = () => {
  return (
    <AlltentaGalleryConteiner>
      <MainGalleryText>Галерея</MainGalleryText>
      <FirstGalleryBlock>
        <ImgGalleryItem src={img1} />
        <ImgGallery src={img2} />
      </FirstGalleryBlock>
      <SecondGalleryBlock>
        <ImgGallery src={img2} />
        <ImgSection>
          <ImgSmall src={img2} />
          <ImgSmall src={img2} />
        </ImgSection>
      </SecondGalleryBlock>
    </AlltentaGalleryConteiner>
  );
};
