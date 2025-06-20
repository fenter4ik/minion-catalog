import React, { useEffect, useRef } from 'react';
import '../assets/icons8-банан-96.png';

const BANANA_IMG = require('../assets/icons8-банан-96.png');

const getRandom = (min, max) => Math.random() * (max - min) + min;

const FloatingBananas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let bananas = [];
    let animationFrame;
    let running = true;

    function createBanana() {
      const banana = document.createElement('img');
      banana.src = BANANA_IMG;
      banana.className = 'floating-banana';
      banana.style.left = `${getRandom(0, 90)}%`;
      banana.style.width = `${getRandom(30, 50)}px`;
      banana.style.animationDuration = `${getRandom(3, 6)}s`;
      banana.style.transform = `rotate(${getRandom(-30, 30)}deg)`;
      container.appendChild(banana);
      bananas.push(banana);
      banana.addEventListener('animationend', () => {
        banana.remove();
        bananas = bananas.filter(b => b !== banana);
      });
    }

    function loop() {
      if (!running) return;
      if (Math.random() < 0.04) createBanana();
      animationFrame = requestAnimationFrame(loop);
    }
    loop();
    return () => {
      running = false;
      bananas.forEach(b => b.remove());
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={containerRef} className="floating-bananas-container" />;
};

const Footer = () => {
  const stickerRef = useRef(null);

  useEffect(() => {
    const sticker = stickerRef.current;
    if (!sticker) return;
    let triggered = false;
    function onScroll() {
      if (triggered) return;
      const rect = sticker.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        sticker.classList.add('sticker-glue-in');
        triggered = true;
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    // Проверка при монтировании (если уже видно)
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer-minion-redesign">
      <FloatingBananas />
      <div className="footer-minion-content">
        <div className="footer-minion-sticker" ref={stickerRef}>
          <span className="footer-minion-sticker-text">
            Minions rights<br />belong to Universal<br />Studios and<br />Illumination
          </span>
        </div>
        <div className="footer-minion-info">
          <div className="footer-minion-col">
            <div className="footer-minion-title">Contacts:</div>
            <div className="footer-minion-contact">+8888888888</div>
            <div className="footer-minion-contact">minion@gmail.com</div>
            <div className="footer-minion-contact">8 Sentosa Gateway, Minion Land<br />098269</div>
          </div>
          <div className="footer-minion-col">
            <div className="footer-minion-title">Links:</div>
            <div><a href="https://www.rwsentosa.com/en/attractions/universal-studios-singapore/minion-land" target="_blank" rel="noopener noreferrer">Minion Land – Themed Zone –</a></div>
            <div><a href="https://www.rwsentosa.com/en/attractions/universal-studios-singapore" target="_blank" rel="noopener noreferrer">Universal Studios Singapore</a></div>
            <div><a href="https://www.illumination.com/" target="_blank" rel="noopener noreferrer">Illumination Entertainment</a></div>
            <div><a href="https://www.instagram.com/illuminationent/" target="_blank" rel="noopener noreferrer">Illumination (@illuminationent)</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;