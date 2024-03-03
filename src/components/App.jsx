import { CompanyPerformance } from './CompanyPerformance/CompanyPerformance';
import { ContactUs } from './ContactUs/ContactUs';
import { Footer } from './Footer/Footer';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <CompanyPerformance />
      <ContactUs/>
      <Footer/>
    </>
  );
};
