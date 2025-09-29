import React, { useEffect, useRef } from 'react';
import minion1high from '../assets/Minions1high.png';
import minion1low from '../assets/Minions1low.png';
import minion2high from '../assets/Minions2high.png';
import minion2low from '../assets/Minions2low.png';

const categories = [
	{ label: 'One-Eyed Tall Minions', img: minion1high },
	{ label: 'One-eyed Low Minions', img: minion1low },
	{ label: 'Two-Eyed Tall Minions', img: minion2high },
	{ label: 'Two-Eyed Low Minions', img: minion2low },
];

const Categories = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Поочередно запускаем анимацию для каждой карточки
    cardRefs.current.forEach((el, idx) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('category-jump-in');
        }, 180 * idx + 100); // задержка между карточками
      }
    });
  }, []);

  return (
    <section className="categories-mockup">
      <h2 className="categories-title-mockup">CATEGORIES</h2>
      <div className="categories-line-mockup" />
      <div className="categories-list-mockup">
        {categories.map((cat, idx) => (
          <div
            className="category-card-mockup"
            key={idx}
            ref={el => cardRefs.current[idx] = el}
          >
            <div className="category-img-bg">
              <img
                src={cat.img}
                alt={cat.label}
                className="category-img-mockup"
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
      </div>c:\Users\user\Desktop\,\Практика4\minonseling\minon\src\assets\bob.png
    </section>
  );
};

export default Categories;