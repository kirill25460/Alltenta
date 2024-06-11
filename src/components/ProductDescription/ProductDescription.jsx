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
  ProductDescriptionListTab,
  ProductWrap,
} from './ProductDescription.styled';
import img from '../../Images/img6.png';
import img1 from '../../Images/img6.png';
import img2 from '../../Images/img6.png';
import ProductPageSvg from '../../Images/ProductPageSvg.svg';

export const ProductDescription = () => {
  return (
    <ProductDescriptionConteiner>
      <ProductDescriptionBlock>
        <ProductWrap>
        <MainTextProductDescription>Тераса</MainTextProductDescription>
        <ProductDescriptionListTab>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Монтаж</TextDetailItem>
              <TextInformation>2 день</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Вартість</TextDetailItem>
              <TextInformation>26 730 грн</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Площа</TextDetailItem>
              <TextInformation>29,7 м2</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
        </ProductDescriptionListTab>
        </ProductWrap>
        <TextProductDescription>
          Плівка Achilles (Японія), товщина 500 мкм, окантовка тканини ПВХ,
          комплект кріплень через кожні 30-40 см
        </TextProductDescription>
        <ImgProductDescription src={img} />
      </ProductDescriptionBlock>
      <ProductDescriptionBlock>
        <ProductDescriptionList>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Монтаж</TextDetailItem>
              <TextInformation>2 день</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Вартість</TextDetailItem>
              <TextInformation>26 730 грн</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Площа</TextDetailItem>
              <TextInformation>29,7 м2</TextInformation>
            </DetailItem>
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
