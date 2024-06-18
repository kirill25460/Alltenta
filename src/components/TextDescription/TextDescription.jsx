import { ContactUsD } from 'components/ContactUsDescription/ContactUsD';
import { ProductDescription } from 'components/ProductDescription/ProductDescription';
import {
  ProductDescriptionText,
  ProductDescriptionTextContainer,
} from './TextDescription.styled';
import { useParams } from 'react-router-dom';
import { configProductDescription } from 'components/ProductDescription/configProductDescription';

export const TextDescription = () => {
  const { id } = useParams();
  const product = configProductDescription.find(
    item => item.id === parseInt(id)
  );

  return (
    <ProductDescriptionTextContainer>
      <ProductDescriptionText
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      <ProductDescriptionText
        dangerouslySetInnerHTML={{ __html: product.benefits }}
      />
      <ProductDescriptionText
        dangerouslySetInnerHTML={{ __html: product.usage }}
      />
      <ProductDescriptionText
        dangerouslySetInnerHTML={{ __html: product.designOptions }}
      />
      <ProductDescriptionText
        dangerouslySetInnerHTML={{ __html: product.cta }}
      />
    </ProductDescriptionTextContainer>
  );
};
