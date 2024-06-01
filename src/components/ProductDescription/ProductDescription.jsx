import {
  DetailItem,
  ImgBlock,
  ImgDetailItem,
  ImgProductDescription,
  MainTextProductDescription,
  ProductDescriptionBlock,
  ProductDescriptionConteiner,
  ProductDescriptionItem,
  ProductDescriptionList,
  ProductImg,
  TextDetailItem,
  TextInformation,
  TextProductDescription,
} from './ProductDescription.styled';
import img from '../../Images/img6.png';
import img1 from '../../Images/img6.png';
import img2 from '../../Images/img6.png';
import ProductPageSvg from '../../Images/ProductPageSvg.svg';

export const ProductDescription = () => {
  return (
    <ProductDescriptionConteiner>
      <ProductDescriptionBlock>
        <MainTextProductDescription>Тераса</MainTextProductDescription>
        <TextProductDescription>
          Плівка Achilles (Японія), товщина 500 мкм, окантовка тканини ПВХ,
          комплект кріплень через кожні 30-40 см
        </TextProductDescription>
        <ImgProductDescription src={img} />
      </ProductDescriptionBlock>
      <ProductDescriptionBlock>
        <ProductDescriptionList>
          <ProductDescriptionItem>
            <DetailItem>
              <ImgDetailItem src={ProductPageSvg} />
              <TextDetailItem>Площа</TextDetailItem>
            </DetailItem>
            <TextInformation>29,7 м2</TextInformation>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <DetailItem>
              <ImgDetailItem src={ProductPageSvg} />
              <TextDetailItem>Монтаж</TextDetailItem>
            </DetailItem>
            <TextInformation>2 день</TextInformation>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <DetailItem>
              <ImgDetailItem src={ProductPageSvg} />
              <TextDetailItem>Вартість</TextDetailItem>
            </DetailItem>
            <TextInformation>26 730 грн</TextInformation>
          </ProductDescriptionItem>
        </ProductDescriptionList>
        <ImgBlock>
          <ProductImg src={img1} />
          <ProductImg src={img2} />
        </ImgBlock>
      </ProductDescriptionBlock>
    </ProductDescriptionConteiner>
  );
};
