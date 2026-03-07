import { useState, useEffect } from 'react';

const OccludedCarousel = ({ images = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Continuous horizontal scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 0.5) % 100);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="relative w-full h-full">
          {duplicatedImages.map((img, idx) => {
            // Calculate horizontal position with scroll offset
            const basePosition = (idx * 150) - scrollOffset * 10;
            const xPercent = (basePosition % 1500) / 15; // Convert to percentage (0-100)
            
            // Calculate vertical position along the arc (inverted parabola)
            // y = a(x - h)² + k where the parabola opens downward
            const normalizedX = (xPercent - 50) / 50; // Normalize to -1 to 1
            const yOffset = -Math.pow(normalizedX, 2) * 60 + 60; // Inverted parabola, max height 60px
            
            // Only show images within viewport
            const isVisible = xPercent >= -10 && xPercent <= 110;
            
            const isHovered = hoveredIndex === idx;
            const baseRotation = (idx % 3 === 0) ? -8 : (idx % 3 === 1) ? 5 : -4;
            
            return (
              <div
                key={idx}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  left: `${xPercent}%`,
                  bottom: `${yOffset}px`,
                  transform: `translate(-50%, 0) rotate(${baseRotation}deg) scale(${isHovered ? 1.6 : 1})`,
                  opacity: isVisible ? 1 : 0,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  zIndex: Math.floor(yOffset),
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ${isHovered ? 'ring-4 ring-primary-olive/60 shadow-[0_0_40px_rgba(137,168,74,0.5)]' : ''}`}>
                  <img
                    src={img}
                    alt={`Carousel ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OccludedCarousel;
