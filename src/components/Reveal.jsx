import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * direction: 'up' | 'down' | 'left' | 'right'
 * distance: px to travel (default 50)
 */
const Reveal = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 850,
  direction = 'up',
  distance = 50,
  once = true,
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  const transformFrom = useMemo(() => {
    switch (direction) {
      case 'left': return `translateX(-${distance}px)`;
      case 'right': return `translateX(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      default: return `translateY(${distance}px)`;
    }
  }, [direction, distance]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out ${shown ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        transform: shown ? 'translate(0,0)' : transformFrom,
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
