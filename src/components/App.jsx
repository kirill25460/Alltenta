import { HomePage } from 'page/HomePage';
import { Footer } from './Footer/Footer';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import { AboutAlltenta } from 'page/AboutAlltenta';
import { ContactPage } from 'page/ContactPage';
import { ProductPage } from 'page/ProductPage';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Alltenta" element={<AboutAlltenta />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};
