import { useState, useEffect } from 'react';

const CoverflowCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=500&fit=crop',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const totalCards = images.length;
    
    // Normalize diff to be between -totalCards/2 and totalCards/2
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }

    const angle = normalizedDiff * 15; // Degrees
    const translateX = normalizedDiff * 180; // Pixels
    const translateZ = -Math.abs(normalizedDiff) * 200; // Depth
    const scale = 1 - Math.abs(normalizedDiff) * 0.15;
    const opacity = Math.max(0.3, 1 - Math.abs(normalizedDiff) * 0.2);
    const rotateY = angle;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: 10 - Math.abs(normalizedDiff),
    };
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden my-20">
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute w-64 md:w-80 h-80 md:h-96 transition-all duration-700 ease-out cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-primary-accent w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverflowCarousel;
