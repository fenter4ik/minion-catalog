import React from 'react';
import ProductCard from './ProductCard';
import minion1high from '../assets/Minions1high.png';
import minion1low from '../assets/Minions1low.png';
import minion2high from '../assets/Minions2high.png';
import minion2low from '../assets/Minions2low.png';
import item from '../assets/item.png';

const products = [
  { name: 'NAME', desc: '', img: minion1high },
  { name: 'NAME', desc: '', img: minion1low },
  { name: 'NAME', desc: '', img: minion2high },
  { name: 'NAME', desc: '', img: minion2low },
  { name: 'NAME', desc: '', img: item },
  { name: 'NAME', desc: '', img: item },
  { name: 'NAME', desc: '', img: item },
  { name: 'NAME', desc: '', img: item },
  { name: 'NAME', desc: '', img: item },
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