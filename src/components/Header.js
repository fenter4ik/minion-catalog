import React from 'react';
import hadderImg from '../assets/hadder.jpg';

const Header = () => (
  <header className="header-mockup">
    <img src={hadderImg} alt="Minions" className="header-img-mockup" />
    <div className="header-title-bg-mockup">
      <h1 className="header-title-mockup header-title-left">SELLING MINIONS</h1>
    </div>
  </header>
);

export default Header;