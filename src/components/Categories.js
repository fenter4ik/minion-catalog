import React, { useEffect, useRef } from 'react';
import minion1high from '../assets/Minions1high.png';
import minion1low from '../assets/Minions1low.png';
import minion2high from '../assets/Minions2high.png';
import minion2low from '../assets/Minions2low.png';

const categories = [
	{ label: 'One-Eyed Tall Minions', img: minion1high, key: 'one-tall' },
	{ label: 'One-eyed Low Minions', img: minion1low, key: 'one-low' },
	{ label: 'Two-Eyed Tall Minions', img: minion2high, key: 'two-tall' },
	{ label: 'Two-Eyed Low Minions', img: minion2low, key: 'two-low' },
];

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, idx) => {
      if (el) {
        el.classList.remove('category-jump-in');
        setTimeout(() => {
          el.classList.add('category-jump-in');
        }, 180 * idx + 100);
      }
    });
  }, [selectedCategory]);

  return (
    <section className="categories-mockup">
      <h2 className="categories-title-mockup">CATEGORIES</h2>
      <div className="categories-line-mockup" />
      <div className="categories-list-mockup">
        {categories.map((cat, idx) => (
          <div
            key={cat.key}
            ref={el => cardRefs.current[idx] = el}
            className={
              'category-card-mockup' + (selectedCategory === cat.key ? ' category-card-mockup-selected' : '')
            }
            onClick={() => onSelectCategory(selectedCategory === cat.key ? null : cat.key)}
            style={{ cursor: 'pointer' }}
          >
            <div className="category-img-bg">
              <img
                src={cat.img}
                alt={cat.label}
                className="category-img-mockup"
                draggable={false}
              />
            </div>
            <div className="category-label-mockup">{cat.label}</div>
          </div>
        ))}
      </div>
      <div className="categories-indicator-mockup">
        <span className="categories-search-label">Search</span>
        <div className="categories-indicator-dots">
          <span className="dot dot-filled" />
          <span className="dot dot-filled" />
          <span className="slider-tile" />
          <span className="dot dot-outline" />
          <span className="dot dot-outline" />
        </div>
      </div>
    </section>
  );
};

export default Categories;