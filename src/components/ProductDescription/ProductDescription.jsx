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
  ProductDescriptionTextConteiner,
  ProductDescriptionText,
} from './ProductDescription.styled';
import ProductPageSvg from '../../Images/ProductPageSvg.svg';
import { useParams } from 'react-router-dom';
import { configProductDescription } from './configProductDescription';

export const ProductDescription = () => {
  const { id } = useParams();
  const product = configProductDescription.find(
    item => item.id === parseInt(id)
  );

  console.log(product.images[0]);

  return (
    <ProductDescriptionConteiner>
      <ProductDescriptionBlock>
        <ProductWrap>
          <MainTextProductDescription>
            {product.title}
          </MainTextProductDescription>
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
        <TextProductDescription>{product.mainText}</TextProductDescription>
        <ImgProductDescription src={product.images[2]} />
      </ProductDescriptionBlock>
      <ProductDescriptionBlock>
        <ProductDescriptionList>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Монтаж</TextDetailItem>
              <TextInformation>{product.installation}</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Вартість</TextDetailItem>
              <TextInformation>{product.coast}</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
          <ProductDescriptionItem>
            <ImgDetailItem src={ProductPageSvg} />
            <DetailItem>
              <TextDetailItem>Площа</TextDetailItem>
              <TextInformation>{product.square}</TextInformation>
            </DetailItem>
          </ProductDescriptionItem>
        </ProductDescriptionList>
        <ImgBlock>
          <ProductImg src={product.images[0]} />
          <ProductImg src={product.images[1]} />
        </ImgBlock>
      </ProductDescriptionBlock>
    </ProductDescriptionConteiner>
  );
};
