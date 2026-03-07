import { useEffect, useMemo, useRef, useState } from 'react';

const Reveal = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 800,
  y = 18,
  once = true,
  direction, // 'left' | 'right' for split slide (x from -40 or 40)
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  const transformFrom = direction === 'left' ? 'translateX(-40px)' : direction === 'right' ? 'translateX(40px)' : `translateY(${y}px)`;
  const transformTo = direction ? 'translateX(0)' : 'translateY(0)';

  const style = useMemo(
    () => ({
      transitionDelay: `${delayMs}ms`,
      transitionDuration: `${durationMs}ms`,
      transform: shown ? transformTo : transformFrom,
    }),
    [delayMs, durationMs, shown, transformFrom, transformTo]
  );

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
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out ${shown ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ ...style, transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {children}
    </div>
  );
};

export default Reveal;

