import React from 'react';
import ProductCard from './ProductCard';
import minion1high from '../assets/Minions1high.png';
import minion1low from '../assets/Minions1low.png';
import minion2high from '../assets/Minions2high.png';
import minion2low from '../assets/Minions2low.png';
import item from '../assets/item.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/bob.png'

// Добавляем поле category для фильтрации
const products = [
  { name: 'Bob', desc: 'Banananana Banana Bananananana 🍌🍌🍌😜', img: item, category: 'one-tall' },
  { name: 'Kevin', desc: 'Poopaye! Gelatooo! Bello! 🍦😎✨', img: item2, category: 'one-low' },
  { name: 'Stuart', desc: 'La papaya! Para tuuu! 🍉😂🎉', img: item3, category: 'two-tall' },
  { name: 'Bob', desc: 'Underwear! Ba-ba-ba! 👙🤣🎶', img: item3, category: 'two-tall' },
  { name: 'Stuart', desc: 'Tulaliloo ti amo! ❤️😍🎈', img: item2, category: 'one-low' },
  { name: 'Kevin', desc: 'Bee-do bee-do! Bee-do bee-do! 🚨🐝🎵', img: item, category: 'one-tall' },
  { name: 'Stuart', desc: 'Tank yuu! Dank uuu! 🙏😆👍', img: item3, category: 'two-tall' },
  { name: 'Bob', desc: 'Poopaye! Gelatooo! Bello! 🍦😎✨', img: item2, category: 'one-low' },
  { name: 'Stuart', desc: 'Banananana Banana Bananananana 🍌🍌🍌😜', img: item, category: 'one-tall' },
];

const ProductList = ({ selectedCategory }) => {
  const filtered = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;
  return (
    <section className="product-section-mockup">
      <div className="product-grid-mockup">
        {filtered.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;