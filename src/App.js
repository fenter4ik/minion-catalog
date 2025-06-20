import React, { useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './App.css';
import './fonts.css'; // Подключаем кастомные шрифты

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="App">
          <Header />
          <Categories />
          <ProductList />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
