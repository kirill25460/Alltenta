import { HomePage } from 'page/HomePage';
import { Footer } from './Footer/Footer';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import { AboutAlltenta } from 'page/AboutAlltenta';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Alltenta" element={<AboutAlltenta />} />
      </Routes>
      <Footer />
    </>
  );
};
