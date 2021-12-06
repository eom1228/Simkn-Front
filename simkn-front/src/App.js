import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Common/header';
import MainPage from './Pages/mainPage';
import BoardPage from './Pages/boardPage';
import PortfolioPage from './Pages/portfolioPage';
import ProductsPage from './Pages/productsPage';
import ShowroomPage from './Pages/showroomPage';
import Footer from './Components/Common/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/showrooms" element={<ShowroomPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/notice" element={<BoardPage />} />
        <Route path="/news" element={<BoardPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
