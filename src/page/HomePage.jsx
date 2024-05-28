import { AboutUs } from "components/AboutUs/AboutUs";
import { CompanyPerformance } from "components/CompanyPerformance/CompanyPerformance";
import { ContactUs } from "components/ContactUs/ContactUs";
import { FaqSection } from "components/FaqSection/FaqSection";
import { Gallery } from "components/Gallery/Gallery";
import { Hero } from "components/Hero/Hero";


export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs/>
      <CompanyPerformance />
      <Gallery />
      <FaqSection/>
      <ContactUs />
    </>
  );
};