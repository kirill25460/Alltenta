import { ContactUs } from 'components/ContactUs/ContactUs';
import { ProductDescription } from 'components/ProductDescription/ProductDescription';
import { WhyChooseUs } from 'components/WhyChooseUs/WhyChooseUs';

export const ProductPage = () => {
  return (
    <>
      <ProductDescription />
      <WhyChooseUs/>
      <ContactUs />
    </>
  );
};
