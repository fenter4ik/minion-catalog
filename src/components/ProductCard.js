import React from 'react';

const ProductCard = ({ name, desc, img }) => (
  <div className="product-card-mockup">
    <div className="product-card-frame">
      <div className="product-card-sides" />
      <div className="product-card-inner">
        <img src={img} alt={name} className="product-img-mockup" />
      </div>
      <div className="product-card-sides" />
    </div>
    <div className="product-card-bottom">
      <div className="product-card-info">
        <div className="product-card-name">NAME</div>
        <div className="product-card-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur lectus at ipsum euismod, nec aliquam nulla egestas. Vestibulum porttitor, erat eu vestibulum porttitor
        </div>
      </div>
      <button className="product-card-buy">BUY</button>
    </div>
  </div>
);

export default ProductCard;