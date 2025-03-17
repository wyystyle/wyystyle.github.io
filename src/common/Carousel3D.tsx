import React, { useEffect, useRef } from 'react';
import '@/assets/css/Carousel3D.css';

interface Carousel3DProps {
  images: string[];
}

const Carousel3D: React.FC<Carousel3DProps> = ({ images }) => {
  const totalItems = images.length;
  const imgWidth = 300;
  const imgHeight = 400;
  const contentWidth = 600;
  const contentHeight = 400;
  const anglePerItem = 360 / totalItems;
  const translateZ = 200 / Math.sin(Math.PI / totalItems);

  // 使用 useRef 管理 carouselContainer
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = document.querySelectorAll('.carousel-item');

    const handleMouseEnter = () => {
      if (carouselContainerRef.current) {
        carouselContainerRef.current.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      if (carouselContainerRef.current) {
        carouselContainerRef.current.style.animationPlayState = 'running';
      }
    };

    items.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    // 清除事件监听器
    return () => {
      items.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div style={{width:`${contentWidth}px`,height:`${contentHeight}px`}} className="carousel-container" ref={carouselContainerRef}>
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-item cursor"
          style={{
            transform: `translateX(${ (contentWidth - imgWidth)/2 }px) rotateY(${anglePerItem * index}deg) translateZ(${translateZ}px)`,
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
          }}
        >
          <img src={image} alt={`carousel-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel3D;