import React from 'react';
import ProductCard from './ProductCard';
import minion1high from '../assets/Minions1high.png';
import minion1low from '../assets/Minions1low.png';
import minion2high from '../assets/Minions2high.png';
import minion2low from '../assets/Minions2low.png';
import item from '../assets/item.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/bob.png'

const products = [
  { name: 'Bob', desc: 'Banananana Banana Bananananana 🍌🍌🍌😜', img: item },
  { name: 'Kevin', desc: 'Poopaye! Gelatooo! Bello! 🍦😎✨', img: item2 },
  { name: 'Stuart', desc: 'La papaya! Para tuuu! 🍉😂🎉', img: item3 },
  { name: 'Bob', desc: 'Underwear! Ba-ba-ba! 👙🤣🎶', img: item3 },
  { name: 'Stuart', desc: 'Tulaliloo ti amo! ❤️😍🎈', img: item2 },
  { name: 'Kevin', desc: 'Bee-do bee-do! Bee-do bee-do! 🚨🐝🎵', img: item },
  { name: 'Stuart', desc: 'Tank yuu! Dank uuu! 🙏😆👍', img: item3 },
  { name: 'Bob', desc: 'Poopaye! Gelatooo! Bello! 🍦😎✨', img: item2},
  { name: 'Stuart', desc: 'Banananana Banana Bananananana 🍌🍌🍌😜', img: item },
];

const ProductList = () => (
  <section className="product-section-mockup">
    <div className="product-grid-mockup">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  </section>
);

export default ProductList;