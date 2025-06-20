import React, { useEffect, useRef, useState } from 'react';
import bananaImg from '../assets/icons8-банан-96.png';

const Preloader = ({ onFinish }) => {
  const bananaRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let x = 80, y = 80;
    let dx = 3 + Math.random() * 2, dy = 2 + Math.random() * 2;
    let width = 80, height = 80;
    let raf;
    const move = () => {
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      x += dx;
      y += dy;
      if (x <= 0 || x + width >= winW) dx = -dx;
      if (y <= 0 || y + height >= winH) dy = -dy;
      if (bananaRef.current) {
        bananaRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);
    // Скрыть preloader через 3.5 сек (было 2.2 сек)
    const timer = setTimeout(() => {
      setHidden(true);
      if (onFinish) onFinish();
      cancelAnimationFrame(raf);
    }, 3500);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [onFinish]);

  if (hidden) return null;
  return (
    <div style={{
      position: 'fixed',
      zIndex: 9999,
      top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'radial-gradient(circle, #ffe066 60%, #fffde7 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      transition: 'opacity 0.5s',
    }}>
      <img
        ref={bananaRef}
        src={bananaImg}
        alt="banana"
        style={{
          width: 80, height: 80,
          position: 'absolute',
          left: 0, top: 0,
          filter: 'drop-shadow(0 4px 24px #ffd600)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default Preloader;