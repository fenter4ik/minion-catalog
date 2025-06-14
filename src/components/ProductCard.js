import React from 'react';

const ProductCard = ({ name, desc, img, isFooter }) => (
  <div className={isFooter ? 'slot footer-card-productcard-slot' : 'slot'}>
    {!isFooter && <div className="rectangle12"></div>}
    {!isFooter && <div className="rectangle15"></div>}
    {!isFooter && <div className="rectangle13"></div>}
    <div className={isFooter ? 'rectangle14 footer-card-productcard-rectangle14' : 'rectangle14'}>
      {!isFooter && <img className="image1" src={img} alt={name} />}
    </div>
    <div className={isFooter ? 'frame1 footer-card-productcard-frame1' : 'frame1'}>
      <div className={isFooter ? 'name footer-card-productcard-name' : 'name'}>{name || 'NAME'}</div>
      {!isFooter && (
        <div className="desc-on-blue">
          {desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lectus at ipsum euismod, nec aliquam nulla egestas. Vestibulum porttitor, erat eu vestibulum porttitor'}
        </div>
      )}
      {!isFooter && <button className="buy-on-blue">BUY</button>}
    </div>
  </div>
);

export default ProductCard;