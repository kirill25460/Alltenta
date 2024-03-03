import { CompanyPerformance } from './CompanyPerformance/CompanyPerformance';
import { ContactUs } from './ContactUs/ContactUs';
import { Footer } from './Footer/Footer';
import { Gallery } from './Gallery/Gallery';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <CompanyPerformance />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
};
