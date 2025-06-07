import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';
import './fonts.css'; // Подключаем кастомные шрифты

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
