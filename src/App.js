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
  // добавляем состояние выбранной категории
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="App">
          <Header />
          <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          <ProductList selectedCategory={selectedCategory} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
