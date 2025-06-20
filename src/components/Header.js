import React, { useEffect, useRef } from 'react';
import hadderImg from '../assets/hadder.jpg';

const Header = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Анимация для заголовка и картинки
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current.classList.add('header-title-animated');
      }, 350);
    }
  }, []);

  return (
    <header className="header-mockup" ref={headerRef}>
      <img ref={imgRef} src={hadderImg} alt="Minions" className="header-img-mockup" />
      <div className="header-title-bg-mockup">
        <h1 ref={titleRef} className="header-title-mockup header-title-left">SELLING MINIONS</h1>
      </div>
    </header>
  );
};

export default Header;