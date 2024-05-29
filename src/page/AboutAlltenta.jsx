import { AlltentaGallery } from "components/AlltentaGallery/AlltentaGallery";
import { CompanyProfile } from "components/CompanyProfile/CompanyProfile";
import { ContactForm } from "components/ContactForm/ContactForm";
import { HeroAlltenta } from "components/HeroAlltenta/HeroAlltenta";



export const AboutAlltenta = () => {
  return (
    <>
        <HeroAlltenta/>
        <CompanyProfile/>
        <ContactForm/>
        <AlltentaGallery/>
    </>
  );
};