import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { Contact } from 'components/Contact/Contact';
import { ContactInformation } from 'components/ContactInformation/ContactInformation';
import { FaqSection } from 'components/FaqSection/FaqSection';
import { InformationMap } from 'components/InformationMap/InformationMap';
import { Requisites } from 'components/Requisites/Requisites';

export const ContactPage = () => {
  return (
    <>
      <ContactInformation />
      <InformationMap />
      <AdditionalInformation />
      <Requisites />
      <FaqSection />
      <Contact />
    </>
  );
};
