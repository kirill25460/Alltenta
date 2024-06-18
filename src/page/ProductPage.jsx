import { ContactUsD } from 'components/ContactUsDescription/ContactUsD';
import { ProductDescription } from 'components/ProductDescription/ProductDescription';
import { TextDescription } from 'components/TextDescription/TextDescription';


export const ProductPage = () => {
  return (
    <>
      <ProductDescription />
      <TextDescription/>
      <ContactUsD />
    </>
  );
};
