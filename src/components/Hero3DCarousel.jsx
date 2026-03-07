import { useRef, useEffect, useState } from 'react';

const Hero3DCarousel = ({ images = [], className = '' }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r + 0.15);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const defaultImages = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=400&fit=crop',
  ];
  const list = images.length ? images : defaultImages;
  const count = list.length;
  const angleStep = (2 * Math.PI) / count;

  return (
    <div
      ref={containerRef}
      className={`perspective-1000 flex justify-center items-center min-h-[280px] md:min-h-[360px] ${className}`}
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative preserve-3d w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        {list.map((src, i) => {
          const angle = i * angleStep;
          const radius = 120;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius - radius;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden img-hover-luxury shadow-xl"
              style={{
                transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle * (180 / Math.PI)}deg)`,
                backfaceVisibility: 'hidden',
                zIndex: Math.round(z + radius) + 10,
              }}
            >
              <img
                src={typeof src === 'string' ? src : src.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero3DCarousel;
