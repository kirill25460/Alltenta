import { ContactUsD } from 'components/ContactUsDescription/ContactUsD';
import { ProductDescription } from 'components/ProductDescription/ProductDescription';
import { WhyChooseUs } from 'components/WhyChooseUs/WhyChooseUs';

export const ProductPage = () => {
  return (
    <>
      <ProductDescription />
      <WhyChooseUs/>
      <ContactUsD />
    </>
  );
};
