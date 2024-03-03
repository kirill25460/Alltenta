import { GalleryConteiner, GalleryText, MainGalleryText } from './Gallery.styled';

export const Gallery = () => {
  return (
    <GalleryConteiner>
      <MainGalleryText>ГАЛЕРЕЯ / КАТАЛОГ</MainGalleryText>
      <GalleryText>
        Ше трошки тексту про тенти, про всілякі різні кольорові там, з різних
        матеріалів або різних типів і шо все воно є в нас.
      </GalleryText>
    </GalleryConteiner>
  );
};
