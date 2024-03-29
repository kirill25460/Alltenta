import { AboutUs } from './AboutUs/AboutUs';
import { CompanyPerformance } from './CompanyPerformance/CompanyPerformance';
import { ContactUs } from './ContactUs/ContactUs';
import { Footer } from './Footer/Footer';
import { Gallery } from './Gallery/Gallery';
import Header from './Header/Header';
import { Hero } from './Hero/Hero';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs/>
      <CompanyPerformance />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
};
