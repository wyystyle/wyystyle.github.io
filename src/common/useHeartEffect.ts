import { useEffect, useRef } from 'react';

const useHeartEffect = () => {
  const heartsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    const createHeart = (x: number, y: number, hIndex: number) => {
      const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      const randomColor = getRandomColor();
      const randomSize = 24;

      heart.setAttribute('class', 'heart');
      heart.setAttribute('style', `position: absolute; left: ${x-randomSize/2}px; top: ${y-randomSize}px; width: ${randomSize}px; height: ${randomSize}; fill: ${randomColor};filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));`);
      path.setAttribute('d', 'M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z');

      heart.appendChild(path);
      heartsContainerRef.current?.appendChild(heart);
      const rotation = hIndex % 2 === 0 ? -15 : 15;
      setTimeout(() => {
        heart.remove();
      }, 1000);
      heart.animate(
        [
          { transform: `translateY(0) rotate(${rotation}deg) scale(1)`, opacity: 1 },
          { transform: `translateY(-120px) rotate(${rotation}deg) scale(0.7)`, opacity: 0 },
        ],
        {
          duration: 2000,
          easing: 'ease-out',
        }
      );
    };

    const handleClick = (event: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createHeart(event.clientX, event.clientY, i);
        }, i * 300);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return heartsContainerRef;
};

export default useHeartEffect;